import React, { Component } from 'react';

class CondingLevel1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
			array: '',
            total: '',
            txtNumber: '',
            result: ''
        };
    }

    componentWillMount() {
        this.sumArray();
    }

    sumArray() {
        const arr = [1, 9, 15, 20, 37];
        let result = 0;
		for(let value of arr) {
            result = result + value;
		}
        this.setState({
            total: result,
			array: arr + ''
        });
    }

    fibonacci(num) {
		console.log(" -------------------- ")
		console.log("num : ", num)
        let result;
        if (num === 1 || num === 2) {
            return result = 1;
        }
        result = this.fibonacci(num - 1) + this.fibonacci(num - 2);
		console.log("result : ", result)
        return result;
    }

    calculateFibo() {
        if (!isNaN(this.state.txtNumber) && this.state.txtNumber > 0) {
            const num = this.state.txtNumber;
			let result_ = this.fibonacci(num);
			this.setState({
				result: result_
			});
        } else {
            alert('must not be empty and must be a number greater than 0');
        }
    }

    onChange = (event) => {
        this.setState({
            txtNumber: event.target.value
        });
    }
    render() {
        return (
            <div className="ml-15">
                <p>coding 1: calculate the sum of array of integers.</p>
                <p>input array : {this.state.array}</p>
                <p>sum = {this.state.total}</p>
                <hr />
                <p>coding 1 - question 2: calculate the Nth number of the Fibonacci series.</p>
                <input
                    type="text"
                    name="txtNumber"
                    value={this.state.txtNumber}
                    onChange={this.onChange}
                />
                <p>result : {this.state.result}</p>
                <button onClick={() => this.calculateFibo(this.state.txtNumber)}>calculate</button>
            </div>
        );
    }
}

export default CondingLevel1;
