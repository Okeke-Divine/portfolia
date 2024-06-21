"use client"
import { useEffect } from 'react';
import { analysisTracker } from "@/utils/main";

const AnalyticTracker = ({ username, actionType }) => {
    useEffect(() => {
        analysisTracker(username, actionType);
    }, [username, actionType]); // Ensure the effect runs only when username or actionType changes

    return null; // Return null instead of an empty fragment
}

export default AnalyticTracker;
