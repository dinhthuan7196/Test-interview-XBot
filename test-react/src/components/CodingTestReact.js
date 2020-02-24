import React, { Component } from 'react';
import Log from './testReact/log';
import Summary from './testReact/summary';

class CodingTestReact extends Component {
    constructor(props) {
        super(props);

        // Lấy thời gian theo hệ thống
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;

        this.state = {
            data: [],
            date_time: dateTime
        };
    }

    async componentWillMount() {
        await fetch('https://join.reckon.com/stock-pricing').then(response => response.json())
            .then((jsonData) => {
                this.setState({
                    data: jsonData
                })
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }

    render() {
        const { date_time } = this.state;
        const { data } = this.props;
        return (
            <div className="row padding-tb-15">
                {/* ========= LOG ========= */}
                <Log data={data} date_time={date_time} />
                {/* ========= SUMMARY ========= */}
                <Summary data={data} />
            </div>
        );
    }
}

export default CodingTestReact;
