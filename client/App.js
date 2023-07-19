/* REACT */
import { Routes, Route, Navigate } from "react-router-dom";

/* MUI */
// import { CssBaseline, ThemeProvider } from "@mui/material";

/* STYLING, TOKENS */
import "./index.css"

/* SCENES */
import { FrontPage } from "./src/screens/frontPage/FrontPage";
import { ConsentFormPage } from "./src/screens/consentFormPage/ConsentFormPage";
import { ConsentFormAcceptPage } from "./src/screens/consentFormPage/ConsentFormAcceptPage";
import { ConsentFormDeclinePage } from "./src/screens/consentFormPage/ConsentFormDeclinePage";
import { Survey } from "./src/screens/survey/Survey";
import { TransitionPage } from "./src/screens/transitionPage/TransitionPage";
import { SurveyFinal } from "./src/screens/surveyFinal/SurveyFinal";
import { ThankYou } from "./src/screens/thankYou/ThankYou";
/* ANALYTICS SCENES */
import { AnalysisPage } from "./src/screens/analysis/AnalysisPage";
import { AgeAnalysisPage } from "./src/screens/analysis/age/AgeAnalysisPage"
/* UTILITY PAGEs */
import { NotFound } from "./src/screens/notFound/NotFound";

function App() {
    return (
        <main className="content">
        <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/consent" element={<ConsentFormPage/>}/>
        <Route path="/consent/accept" element={<ConsentFormAcceptPage/>}/>
        <Route path="/consent/decline" element={<ConsentFormDeclinePage/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/survey/transition" element={<TransitionPage/>}/>
        <Route path="/survey/thank-you" element={<ThankYou/>}/>
        <Route path="/survey/final" element={<SurveyFinal/>}/>
        <Route path="/analysis/" element={<AnalysisPage/>}/>
        <Route path="/analysis/age" element={<AgeAnalysisPage/>}/>
        {/* Other routes */}
        <Route path="/404" element={<NotFound/>}/>

        {/* WILDCARD PATH FOR 404 */}
        <Route path="*" element={<Navigate to="/404"/>}/>
        </Routes>
        </main>
        );
        
    } export default App;
    