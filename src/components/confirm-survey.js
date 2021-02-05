import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { surveySlice } from "../store/survey-slice";

function ConfirmSurvey() {
  const { surveyId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const survey = useSelector((globalStore) =>
    globalStore.surveys.find((s) => s.surveyId === surveyId)
  );

  const confirmAndPublishSurvey = () => {
    dispatch(surveySlice.actions.markPublished({ surveyId }));
    history.push("/");
  };

  return (
    <>
      {survey.questions.map((q) => (
        <>
          <h4>{q.question}</h4>
          {q.type === "single" ? (
            <>
            <div className= "options-style" >
              <input type="radio" />
              <label>{q.options[0]}</label>
              </div>
              <div className= "options-style" >
              <input type="radio" />
              <label>{q.options[1]}</label>
              </div>
            </>
          ) : (
            <>
            <div className= "options-style" >
            <input type="checkbox" />
              <label>{q.options[0]}</label>
            </div>
            <div className= "options-style" >
            <input type="checkbox" />
              <label>{q.options[1]}</label>
            </div>
            <div className= "options-style" >
            <input type="checkbox" />
              <label>{q.options[2]}</label>
            </div>
            <div className= "options-style" >
            <input type="checkbox" />
              <label>{q.options[3]}</label>
            </div>
            </>
          )}
          <hr/>
        </>
      ))}
      <Button className="survey-main-btn" onClick={confirmAndPublishSurvey}>
        Confirm Survey
      </Button>
    </>
  );
}

export default ConfirmSurvey;