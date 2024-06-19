"use client"
import { useEffect } from "react"

const AnalyticWatcher = ({ parent }) => {

    useEffect(function () {

        // Function to handle click events
        const handleClick = (event) => {
            console.log(parent, "clicked");
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