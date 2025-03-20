import React, { useEffect, useState } from "react";

const SecondsCounter = ({ seconds }) => {
    const formattedSeconds = String(seconds).padStart(6, "0").split("");

    return (
        <div className="container d-flex justify-content-center bg-black w-50">
            <div className="d-flex flex-row justify-content-center align-items-center row-cols-1 row-cols-md-7 g-5 p-5 w-50">
                <div className="col w-25 border border-1 rounded m-3 h-75">
                    <div className="card h-10 w-auto bg-black">
                        <div className="card1">
                            <h5 className="card-title fs-1 text-white d-flex justify-content-center mt-3">
                                <i className="fa-solid fa-clock"></i>
                            </h5>
                        </div>
                    </div>
                </div>
                
                {formattedSeconds.map((digit, index) => (
                    <div key={index} className="col w-25 border border-1 rounded m-3 h-75">
                        <div className="card h-10 w-auto bg-black">
                            <div className={`card${index + 2}`}>
                                <h5 className="card-title fs-1 text-white d-flex justify-content-center mt-3">
                                    {digit}
                                </h5>
                            </div>
                        </div>
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
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(interval); 
    }, []);
    
    return <SecondsCounter seconds={seconds} />;
};

export default App;

