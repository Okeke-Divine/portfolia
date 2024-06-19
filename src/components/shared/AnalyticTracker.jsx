"use client"
import { analysisTracker } from "@/utils/main"

const AnalyticTracker = ({ username, actionType }) => {
    analysisTracker(username, actionType);
    return (
        <></>
    )
}

export default AnalyticTracker