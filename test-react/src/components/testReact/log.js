import React, { Component } from 'react';

class Log extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: false
        };
    }

    eventPause = () => {
        this.setState({
            mode: true
        })
    }

    eventResume = () => {
        this.setState({
            mode: false
        })
    }

    render() {
        const { data, date_time } = this.props;
        const { mode } = this.state;
        return (
            <div className="col-50 log">
                <div className="row">
                    <label>LOG</label>
                    {mode
                        ? <div onClick={() => this.eventResume()} className="btn-resume">Resume log</div>
                        : <div onClick={() => this.eventPause()} className="btn-pause">Pause log</div>
                    }
                </div>
                <div className="content">
                    <div className="row padding-tb-10">
                        <div>
                            Update for {date_time}
                        </div>
                        {data.map((value, idx) => (
                            <div key={idx}>
                                {value.code} : ${value.price}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Log;
