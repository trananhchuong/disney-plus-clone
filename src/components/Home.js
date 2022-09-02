import styled from "styled-components";
import ImgSlider from "./ImgSlider";
// import NewDisney from "./NewDisney";
// import Originals from "./Originals";
import Recommends from "./Recommends";
// import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

import { getDocs, collection, query } from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    getData();
  }, [userName]);

  const getData = async () => {
    try {
      const queryMovies = query(collection(db, "movies"));
      const querySnapshot = await getDocs(queryMovies);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const docData = doc.data();

        switch (docData.type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            return new Error("Not of all case");
        }

        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
    } catch (error) {
      console.log("🚀 ~ file: Home.js ~ line 73 ~ getData ~ error", error);
    }
  };

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      {/* <NewDisney /> */}
      {/* <Originals /> */}
      {/* <Trending /> */}
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
