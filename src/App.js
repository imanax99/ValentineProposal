import React, { useState } from "react";
import "./App.css";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleReject = () => {
    setRejected(true);

    const rejectionTexts = [
      "Are you sure?",
      "Think again!",
      "Pleaseee 😭",
      "You can’t say no 😤",
    ];

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rejectionTexts.length);
    } while (randomIndex === lastRejectedIndex);

    setLastRejectedIndex(randomIndex);
    setNoButtonText(rejectionTexts[randomIndex]);
  };

  return (
    <div className="App">
      <div className="App-body">
        {!accepted ? (
          <>
            <h1 style={{ marginBottom: "20px" }}>
              Tedu, will you be my Valentine? ❤️
            </h1>

            <img
              src={rejected ? madBear : flowerBear}
              alt="Valentine Bear"
              style={{ width: "250px", marginBottom: "20px" }}
            />

            <div>
              <button onClick={handleAccept} className="yes-button">
                Yes 💖
              </button>

              <button onClick={handleReject} className="no-button">
                {noButtonText}
              </button>
            </div>
          </>
        ) : (
          <h1>Yayyyy!! ❤️💍</h1>
        )}
      </div>
    </div>
  );
};

export default App;
