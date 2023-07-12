/****************************/
/* MIMICS THE SAME STRUCTURE AS THE FIRST SURVEY, THE SAME IDEA FOR THE MOST PART. */
/****************************/

/* REACT and ANIMA and MUI*/
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

/* SURVEY.js */
import * as Survey from 'survey-react';
import { Model } from 'survey-core';
import axios from 'axios';
// import 'survey-core/defaultV2.min.css';
import surveyJson from './SurveyFinalData.json';

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
const surveyFinalResponseHandlerEndpoint = process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_SURVEY_FINAL_RESPONSE_HANDLER_ENDPOINT;
console.log(surveyFinalResponseHandlerEndpoint);

export const SurveyFinal = () => {
    const navigate = useNavigate(); // Get the history object from react-router-dom
    const [surveyResult, setSurveyResult] = useState(null);
    // Now we try to make a request to the backend.
    const surveyComplete = useCallback(async (surveyResponse) => {
        try {
            const response = await axios.post(surveyFinalResponseHandlerEndpoint, surveyResponse);
            console.log('Data sent successfully to the final survey response handler endpoint:', response.data);
            // Perform any additional actions upon successful response
            
            // Redirect to a new page
            navigate('/survey/thank-you', { state: { surveyResult: surveyResponse } }); // Replace '/thank-you' with the desired URL
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle the error appropriately
        }
    }, [navigate]);
    
    const surveyModel = new Model(surveyJson);
    surveyModel.onComplete.add((sender) => {
        setSurveyResult(sender.data);
        surveyComplete(sender.data);
    });

    return (
        <div style={{ backgroundColor: "#000", width: "auto", height:"auto" }}>
        <AppBar position="static" sx={{ backgroundColor: "#000" }}>
        <Header
                className="header-instance"
                menuProperty1="unselected-02"
                menuProperty11="mouse-over-05"
                override={<MenuVariant className="menu-variant7" text="About" />}
                hideMenuItems="false"
              />
        </AppBar>
        <div>
        <Container className="my-survey" maxWidth="md" sx={{ marginTop: "2rem", backgroundColor:"#000" }}>
            <Survey.Survey model={surveyModel} />
        </Container>
        </div>
        </div>
        );
    };
    