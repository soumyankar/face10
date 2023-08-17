/* REACT and ANIMA and MUI*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

/* SURVEY.js */
import * as Survey from 'survey-react';
import { Model } from 'survey-core';
// import 'survey-core/defaultV2.min.css';
import surveyJson from './SurveyData.json';

/* STYLING */
import "./style.css";
import 'survey-react/survey.css';
import './surveyStyle.css';

/* COMPONENTS */
import { Header } from "../../components/Header";
import { MenuVariant } from "../../components/MenuVariant";

/* BACKEND ENDPOINTS */
// Grab the endpoint for the analysis page
// Base server URL + Endpoint URL
const surveyStartApi = process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_SURVEY_START_RESPONSE_HANDLER_ENDPOINT;
console.log(surveyStartApi);

export const Survey = () => {
    const navigate = useNavigate(); // Get the history object from react-router-dom
    const [surveyResult, setSurveyResult] = useState(null);
    // Now we try to make a request to the backend.
    async function submitSurvey(surveyResponse) {
        await fetch(surveyStartApi, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(surveyResponse),
          })
          .catch(error => {
            window.alert(error);
            return;
          });
          navigate('/survey/transition', { state: { surveyResult: surveyResponse } });
    }
    
    const surveyModel = new Model(surveyJson);
    surveyModel.onComplete.add((sender) => {
        setSurveyResult(sender.data);
        submitSurvey(sender.data);
    });

    return (
        <div style={{ backgroundColor: "#000", width: "100%", height:"100%" }}>
        <AppBar position="static" sx={{ backgroundColor: "#000" }}>
        <Header
                className="header-instance"
                menuProperty1="unselected-02"
                menuProperty11="mouse-over-05"
                override={<MenuVariant className="menu-variant7" text="About" />}
                hideMenuItems="false"
              />
        </AppBar>
        <Container>
        <div className="my-survey" maxwidth="md" sx={{ marginTop: "2rem", backgroundColor:"#000" }}>
            <Survey.Survey model={surveyModel} />
        </div>
        </Container>
        </div>
        );
    };
    