import React, { Component } from "react";

class SecondsCounter extends Component {
    render() {
        const { seconds } = this.props;
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
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <SecondsCounter seconds={this.state.seconds} />;
    }
}

export default App;

