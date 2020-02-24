import React, { Component } from 'react';

class Summary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };
    }
    render() {
        const { data } = this.props;
        return (
            <div className="col-50 summary">
                <div className="row">
                    <label>SUMMARY</label>
                </div>
                <div className="content" style={{ marginTop: 18 }}>
                    <div className="row">
                        <div className="thead">
                            <div>Stock</div>
                            <div>Starting</div>
                            <div>Lowest</div>
                            <div>Highest</div>
                            <div>Current</div>
                        </div>
                    </div>
                    <div className="row">
                        {data.map((value, idx) => (
                            <div key={idx} className="tbody">
                                <div>{value.code}</div>
                                <div>{value.price}</div>
                                <div>{value.price}</div>
                                <div>{value.price}</div>
                                <div>{value.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;
