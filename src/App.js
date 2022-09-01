// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
// import "./App.css";
import Home from "./components/Home";
// import Detail from "./components/Detail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );

  // return (
  //   <div className="App">
  //     <Router>
  //       <Header />
  //       <Switch>
  //         <Route exact path="/">
  //           <Login />
  //         </Route>
  //         <Route path="/home">
  //           <Home />
  //         </Route>
  //         {/* <Route path="/detail/:id">
  //           <Detail />
  //         </Route> */}
  //       </Switch>
  //     </Router>
  //   </div>
  // );
}

export default App;
