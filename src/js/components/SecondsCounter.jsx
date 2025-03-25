import React, { useState, useEffect } from "react";

const SecondsCounter = ({ seconds }) => {
    const formattedSeconds = seconds.toString().padStart(6, "0");

    return (
        <div className="container d-flex justify-content-center bg-black py-4">
            <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                
                <div className="border border-1 rounded p-3 bg-dark text-white d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-clock fs-1"></i>
                </div>

                {formattedSeconds.split("").map((digit, index) => (
                    <div
                        key={index}
                        className="border border-1 rounded p-3 bg-dark text-white d-flex align-items-center justify-content-center"
                        style={{ minWidth: "50px", minHeight: "80px" }}
                    >
                        <h5 className="fs-1">{digit}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

const App = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <SecondsCounter seconds={seconds} />;
};

export default App;

