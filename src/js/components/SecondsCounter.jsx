import React from "react";
import ReactDOM from "react-dom/client";

const SecondsCounter = ({ seconds }) => {
    const formattedSeconds = seconds.toString().padStart(6, "0").split("");

    return (
        <div className="container d-flex justify-content-center bg-black py-4">
            <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                <div className="border border-1 rounded p-3 bg-dark text-white d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-clock fs-1"></i>
                </div>
                {formattedSeconds.map((digit, index) => (
                    <Digit key={index} value={digit} />
                ))}
            </div>
        </div>
    );
};

const Digit = ({ value }) => (
    <div
        className="border border-1 rounded p-3 bg-dark text-white d-flex align-items-center justify-content-center"
        style={{ minWidth: "50px", minHeight: "80px" }}
    >
        <h5 className="fs-1">{value}</h5>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

let seconds = 0;
const updateCounter = () => {
    root.render(<SecondsCounter seconds={seconds} />);
    seconds++;
};

setInterval(updateCounter, 1000);

export default SecondsCounter;





