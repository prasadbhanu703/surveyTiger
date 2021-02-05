import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const responseSlice = createAsyncThunk(
  "surveys/createSurvey",
  async (_, thunkAPI) => {
    const newSurveyId = String(thunkAPI.getState().surveys.length + 1);
    return newSurveyId;
    console.log("checking receivers",newSurveyId)
  }
);

export const surveySlice = createSlice({
  name: "surveys",
  initialState: [],
  reducers: {
    addQuestion: (state, action) => {
      const { surveyId, type, options, question } = action.payload;
      const q = state.find((s) => s.surveyId === surveyId).questions;
      const qId = String(q.length + 1);
      q.push({
        qId,
        type,
        question,
        options,
      });
    },
    markPublished: (state, action) => {
      const { surveyId } = action.payload;
      state.find((s) => s.surveyId === surveyId).isPublished = true;
    }
  },
  extraReducers: {
    [responseSlice.fulfilled]: (state, action) => {
      state.push({
        surveyId: action.payload,
        isPublished: false,
        questions: []
      });
    },
  },
});