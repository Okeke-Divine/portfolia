"use client"
import { analysisTracker } from "@/utils/main";
import { useEffect } from "react"

const AnalyticWatcher = ({ username, parent }) => {

    useEffect(function () {

        // Function to handle click events
        const handleClick = () => {
            if (parent == "portfolio") {
                analysisTracker(username, 'portfolioClick')
            } else if (parent == "resume") {
                analysisTracker(username, 'resumeClick');
            }
        };

        const handleDownload = () => {
         if (parent == "resume") {
                analysisTracker(username, 'resumeDownload');
            }
        };

        // Get all elements with the .clickMeCounter class
        const elements = document.querySelectorAll(".dmdomo");

        const elements2 = document.querySelectorAll(".downsifn");


        // Add event listeners to all elements
        elements.forEach(element => {
            element.addEventListener("click", handleClick);
        });

        elements2.forEach(element => {
            element.addEventListener("click", handleDownload);
        });

        return () => {
            elements.forEach(element => {
                element.removeEventListener("click", handleClick);
            });
            elements2.forEach(element => {
                element.removeEventListener("click", handleDownload);
            });
        }
    })

    return (
        <></>)

}

export default AnalyticWatcher