// React libraries and other dependencies
import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
// MUI and Components
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";

// Essential utilities
import { generateAgeChartData, generateAgeChartOptions } from "../../../utils/ageChartUtil";
import BarChartComponent from "../../../components/charts/BarChart";

export const AgeAnalysisPage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    /* IMPORTANT -- URL ENDPOINT */
    /* SET AS NECESSARY */
    const analysisDataAddress = process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_AGE_ANALYSIS_ENDPOINT;
    
    const [analysisData, setAnalysisData] = useState(null);
    
    const fetchAnalysisData = useCallback(async () => {
        try {
            const response = await axios.get(analysisDataAddress);
            setAnalysisData(response.data); // puts the data into the state hook.
        } catch (error) {
            console.error('Error fetching analysis data:', error);
        }
    }, [analysisDataAddress]);
    
    useEffect(() => {
        fetchAnalysisData();
    }, [fetchAnalysisData]);
    
    let chartData = null;
    /* CHART GENERATION */
    /* ANALYTIC SPECIFIC -- IMPORTANT -- TAKE CARE */
    /* REMEMBER TO EDIT */
    /* REMEMBER TO EDIT */
    /* REMEMBER TO EDIT */
    if (analysisData) {
        chartData = generateAgeChartData(analysisData); // Generate chart data based on analysisData
    }
    const chartOptions = generateAgeChartOptions(); // Generate chart options
    
    return (
        <Box p={2}>
        <Typography variant="h2" color={colors.primary[500]} fontWeight="bold">
        Hello, this is the Age Analysis page!
        </Typography>
        <Typography variant="p" color={colors.primary[700]}>
        Hello, this is the subtitle to the age analysis page title!
        </Typography>
        
        {analysisData && (
            <Box mt={2}>
            <Typography variant="h3" color={theme.palette.secondary.main} fontWeight="bold">
            Age Analysis Data
            </Typography>
            <pre>{JSON.stringify(analysisData, null, 2)}</pre>
            {chartData ? (
                <BarChartComponent data={chartData} options={chartOptions} />
                ) : (
                    <Box mt={2}>
                    <Typography variant="body1" color={colors.primary[700]}>
                    No data available for chart.
                    </Typography>
                    </Box>
                    )}
                    </Box>
                    )}
                    </Box>
                    );
                }

                