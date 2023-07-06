/* REACT COMPONENTS */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

/* SCENES */
import { FrontPage } from "./src/screens/frontPage/FrontPage";
import { Survey } from "./src/screens/survey/Survey";

function App() {
    return (
        <div className="app">
        <main className="content">
        <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/survey" element={<Survey/>}/>
        </Routes>
        </main>
        </div>
        );
        
    } export default App;
    