import React, { useEffect, useState } from "react";

const DisplayResponseText = ({ userInput, responseText }) => {
  // State to hold the response text
  const [displayedResponseText, setDisplayedResponseText] = useState("");

  // Assuming you have some logic to fetch and process the response here
  useEffect(() => {
    // Fetch and process response here
    // For demonstration, we'll just set a dummy response
    const response = "This is the response from the API.";
    setDisplayedResponseText(response);
  }, [userInput]); // Trigger the effect whenever the userInput changes

  return <div>{displayedResponseText}</div>;
};

export default DisplayResponseText;
