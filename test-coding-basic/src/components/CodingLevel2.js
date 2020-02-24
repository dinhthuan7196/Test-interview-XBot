import React, { Component } from 'react';
import '../css/common.css';

class CodingLevel2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtSearch: '',
            resultSearch: [],
            resultAllIndices: []
        };
    }

    onChangeValue = (event) => {
        this.setState({
            txtSearch: event.target.value
        });
    }

    submitSearch = (value) => {
        let { arrData } = this.props;
        let listCriteria = [];
        arrData.forEach(element => {
            listCriteria = listCriteria.concat(element.criteria);
        });

        let result = [];
        listCriteria.forEach(element => {
            let name = element.name;
            if (name.indexOf(value) !== -1) {
                result = result.concat(element);
            }
        });

        this.setState({
            resultSearch: result
        });
    }

    showAllIndices = () => {

        let { arrData } = this.props;

        let listCriteria = [];
        arrData.forEach(element => {
            listCriteria = listCriteria.concat(element.criteria);
        });

        let listIndices = [];
        listCriteria.forEach(element => {
            listIndices = listIndices.concat(element.indices);
        });

        // let arrLevel = [];
        // listIndices.forEach(element => {
        //     if (arrLevel.indexOf(element.level) === -1) {
        //         arrLevel.push(element.level);
        //     }
        // });

        // let result = [];
        // arrLevel.forEach(element => {
        //     let data = listIndices.filter(indices => indices.level === element);
        //     result.push(data);
        // });

        this.setState({
            resultAllIndices: listIndices
        });

    }

    render() {
        var elmSearch = this.state.resultSearch.map((item, index) => {
            return <p key={index}>{item.name}</p>
        });

        var indices = this.state.resultAllIndices.map(item => {
            return item.map((element, index) => {
                return <p key={index}>Name: {element.name} --- Level: {element.level}</p>
            });
        });
        return (
            <div className="ml-15">
                <input
                    type="text"
                    name="txtSearch"
                    value={this.state.txtSearch}
                    onChange={this.onChangeValue}
                />
                <button onClick={() => this.submitSearch(this.state.txtSearch)}>
                    Search
                </button>
                <div>
                    <p>Result Search : </p>
                    {elmSearch}
                </div>
                <div>
                    <button type="button" onClick={this.showAllIndices}>
                        show all indices
                    </button>
                    <div>
                        {indices}
                    </div>
                </div>
            </div>
        );
    }
}

export default CodingLevel2;
