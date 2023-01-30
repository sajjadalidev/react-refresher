import "./App.css";
import { AllMeetups } from "./Pages/AllMeetups";
import { Favorite } from "./Pages/Favorite";
import { NewMeetup } from "./Pages/NewMeetup";
// import { Todo } from "./Components/Todo";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <Router>
      {/* <Todo title="Learn ReactJs with official Documentation" />
      <Todo title="Learn NextJs with Udemy Course" />
      <Todo title="Learn NextJs with Udemy Course " /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} exact />
          <Route path="/favorites" element={<Favorite />} />{" "}
          <Route path="/new-meetup" element={<NewMeetup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
