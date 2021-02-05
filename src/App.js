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