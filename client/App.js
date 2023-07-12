/* REACT */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

/* MUI */
import { CssBaseline, ThemeProvider } from "@mui/material";

/* STYLING, TOKENS */
import "./index.css"

/* SCENES */
import { FrontPage } from "./src/screens/frontPage/FrontPage";
import { Survey } from "./src/screens/survey/Survey";
import { TransitionPage } from "./src/screens/transitionPage/TransitionPage";
import { SurveyFinal } from "./src/screens/surveyFinal/SurveyFinal";
import { ThankYou } from "./src/screens/thankYou/ThankYou";
/* ANALYTICS SCENES */
import { AnalysisPage } from "./src/screens/analysis/AnalysisPage";
import { AgeAnalysisPage } from "./src/screens/analysis/age/AgeAnalysisPage"

function App() {
    return (
        <div className="app">
        <main className="content">
        <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/survey/transition" element={<TransitionPage/>}/>
        <Route path="/survey/thank-you" element={<ThankYou/>}/>
        <Route path="/survey/final" element={<SurveyFinal/>}/>
        <Route path="/analysis/" element={<AnalysisPage/>}/>
        <Route path="/analysis/age" element={<AgeAnalysisPage/>}/>
        </Routes>
        </main>
        </div>
        );
        
    } export default App;
    