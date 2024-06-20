"use client"
import { analysisTracker } from "@/utils/main";
import { useEffect } from "react"

const AnalyticWatcher = ({ username, parent }) => {

    useEffect(function () {

        // Function to handle click events
        const handleClick = () => {
            if (parent == "portfolio") {
                analysisTracker(username, 'portfolioClick')
                console.log("sent")
            } else if (parent == "resumeClick") {
                console.log("sent")
                analysisTracker(username, 'resumeClick');
            }
            console.log(parent, "click");
        };

        // Get all elements with the .clickMeCounter class
        const elements = document.querySelectorAll(".dmdomo");

        // Add event listeners to all elements
        elements.forEach(element => {
            element.addEventListener("click", handleClick);
        });

        return () => {
            elements.forEach(element => {
                element.removeEventListener("click", handleClick);
            });
        }
    })

    return (
        <></>)

}

export default AnalyticWatcher