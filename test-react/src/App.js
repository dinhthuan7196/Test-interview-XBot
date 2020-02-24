import React, { Component } from 'react';
import './App.css';
import CodingTestReact from './components/CodingTestReact';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_j: [],
            data: []
        };
    }

    async componentWillMount() {
        this.dataJsonTestReact();
    }

    dataJsonTestReact = async () => {
        await fetch('https://join.reckon.com/stock-pricing').then(response => response.json())
            .then((jsonData) => {
                this.setState({
                    data_j: jsonData
                })
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }

    render() {
        return (
            <div className="main">
                {/* ================================ Test React ================================ */}
                <div className="container">
                    <CodingTestReact data={this.state.data_j} />
                </div>
            </div>
        );
    }
}

export default App;
