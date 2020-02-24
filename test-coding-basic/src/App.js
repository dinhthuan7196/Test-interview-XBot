import React, { Component } from 'react';
import './App.css';
import CodingLevel2 from './components/CodingLevel2';
import CodingLevel3 from './components/CodingLevel3';
import CodingLevel1 from './components/CodingLevel1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_j: [],
      data: []
    };
  }

  async componentWillMount() {
    this.codingLevelQuestion1();
  }

  codingLevelQuestion1 = async () => {
    await fetch('https://xbot.com.vn/test/standards.json').then(response => response.json())
      .then((jsonData) => {
        this.setState({
          data: jsonData
        });
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
  }

  render() {
    return (
      <div className="main">
        {/* ================================ Test Coding Basic ================================ */}
        <div className="container">
          <div style={{ padding: 15 }}>
            **************** Coding 1 ******************
                    </div>
          <div>
            <CodingLevel1 />
          </div>
          <div style={{ padding: 30 }}>
            **************** Coding 2 ******************
                    </div>
          <div>
            <CodingLevel2 arrData={this.state.data} />
          </div>
          <div style={{ padding: 30 }}>
            **************** Coding 3 ******************
                    </div>
          <div>
            <CodingLevel3 />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
