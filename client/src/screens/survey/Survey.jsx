/* REACT and ANIMA */
import React, { useCallback, useState } from 'react';
import { Cta } from "../../components/Cta";
import { QuestionSurvey } from "../../components/QuestionSurvey";
import "./style.css";
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

/* SURVEY.js */
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import { Model } from 'survey-core';
import axios from 'axios';
// import 'survey-core/defaultV2.min.css';
import surveyJson from './SurveyData.json';

export const Survey = () => {
    const navigate = useNavigate(); // Get the history object from react-router-dom
    const [surveyResult, setSurveyResult] = useState(null);
    // Now we try to make a request to the backend.
    const surveyComplete = useCallback(async (surveyResponse) => {
        try {
            const response = await axios.post(surveyResponseHandlerEndpoint, surveyResponse);
            console.log('Data sent successfully:', response.data);
            // Perform any additional actions upon successful response
            
            // Redirect to a new page
            navigate('/thank-you', { state: { surveyResult: surveyResponse } }); // Replace '/thank-you' with the desired URL
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
        <div className="page-play-the-survey">
        <div className="overlap-group-wrapper">
        <div className="overlap-group-2">
        <img className="white-line" alt="White line" src="/img/white-line.svg" />
        <div className="text-wrapper">Type your answer here</div>
        <img className="logo-small" alt="Logo small" src="/img/logo-small.png" />
        <div className="face">Face10</div>
        {/* <Survey.Survey model={surveyModel} /> */}
        <img className="vector" alt="Vector" src="/img/vector-1.svg" />
        <Cta className="CTA-instance" property1="yellow-botton" text="Go ahead" />
        </div>
        </div>
        </div>
        );
    };
    