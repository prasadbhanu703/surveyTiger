import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

function TakeSurvey() {
  const surveyIDs = useSelector((globalStore) =>
    globalStore.surveys.filter((s) => s.isPublished).map((s) => s.surveyId)
  );
  const question = useSelector((globalStore) =>
    globalStore.surveys.filter((s) => s.isPublished).map((s) => s.questions.options)
  );

  return (
    <>
      {surveyIDs.map((surveyId) => (
        <Button className="survey-main-btn" key={surveyId} onClick= { () => { 
          // globalStore.surveys.filter((s) => s.isPublished).map((s) => s.surveyId);
          console.log("options", question) }  }>
          Take Survey {surveyId}
        </Button>
      ))}
    </>
  );
}

export default TakeSurvey;