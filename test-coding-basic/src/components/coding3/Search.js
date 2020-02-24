import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: ''
        };
    }

    onChange = (event) => {
        this.setState({
            txtSearch: event.target.value
        });
    }

    // chuyển đổi chuỗi thành ký tự không dấu
    convertResult = (value) => {
        if (value === undefined)
            return "";
        value += "";
        value = value.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        value = value.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        value = value.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        value = value.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        value = value.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        value = value.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        value = value.replace(/đ/g, "d");
        value = value.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        value = value.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        value = value.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        value = value.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        value = value.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        value = value.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        value = value.replace(/Đ/g, "D");
        return value.toLowerCase();
    }

    searchVideo = (data) => {
        let { item } = this.props;
        let result = [];
        if (this.state.txtSearch !== '') {
            for (let element of item) {
                let value_check = this.convertResult(element.name);
                let search_ = this.convertResult(this.state.txtSearch);
                if (value_check.indexOf(search_) !== -1) {
                    result.push(element)
                }
            }
        }
        this.props.resultSearch(result);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="search by name!"
                    className="videoSearch"
                    name="txtSearch"
                    value={this.state.txtSearch}
                    onChange={this.onChange}
                />
                <button className="buttonSearch" onClick={() => this.searchVideo(this.state.txtSearch)}>
                    Search
                </button>
            </div>
        );
    }
}

export default Search;
