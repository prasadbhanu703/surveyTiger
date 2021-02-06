import logo from "./logo.png";
import "./App.css";
import { Button } from "reactstrap";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import CreateSurvey from "./components/create-survey";
import { useDispatch } from "react-redux";
import { createSurvey } from "./store/survey-slice";
import { unwrapResult } from "@reduxjs/toolkit";
import TakeSurvey from "./components/take-survey";
import ConfirmSurvey from "./components/confirm-survey";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("checking");
  console.log("checking again");

  const redirectToNewSurvey = () => {

    dispatch(createSurvey())
      .then(unwrapResult)
      .then((newSurveyId) => history.push("/create/" + newSurveyId));

  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route path="/create/:surveyId">
          <CreateSurvey />
        </Route>
        <Route path="/confirm/:surveyId">
          <ConfirmSurvey />
        </Route>
        <Route path="/take">
          <TakeSurvey />
        </Route>
        <Route path="/">
          <Button className="survey-main-btn" onClick={redirectToNewSurvey}>
            Create Survey
          </Button>
          <Link to="/take">
            <Button className="survey-main-btn">Take Survey</Button>
          </Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;


// manifest.json

// {
//   "short_name": "React App",
//   "name": "Create React App Sample",
//   "icons": [
//     {
//       "src": "favicon.ico",
//       "sizes": "64x64 32x32 24x24 16x16",
//       "type": "image/x-icon"
//     },
//     {
//       "src": "logo192.png",
//       "type": "image/png",
//       "sizes": "192x192"
//     },
//     {
//       "src": "logo512.png",
//       "type": "image/png",
//       "sizes": "512x512"
//     }
//   ],
//   "start_url": ".",
//   "display": "standalone",
//   "theme_color": "#000000",
//   "background_color": "#ffffff"
// }
