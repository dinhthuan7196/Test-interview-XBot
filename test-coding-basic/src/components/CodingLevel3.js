import React, { Component } from 'react';
import '../css/common.css';
import ShowList from '../components/coding3/ShowList';
import Main from '../components/coding3/Main';
import Search from '../components/coding3/Search';

class CodingLevel3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listVideo: '',
            videoId: '',
            resultSearch: []
        };
    }

    componentWillMount() {
        this.getListVideo();
    }

    getListVideo = () => {
        this.setState({
            listVideo: listVideo
        });
    }

    getVideoId = (data) => {
        this.setState({
            videoId: data
        })
    }

    searchVideo = (data) => {
        this.setState({
            resultSearch: data
        });
    }

    render() {
        return (
            <div className="body">
                <div align="center">
                    <Search item={this.state.listVideo} resultSearch={this.searchVideo} />
                </div>
                <div className="videoMain">
                    <div className="videoPlay">
                        <Main videoId={this.state.videoId} resultSearch={this.state.resultSearch} getVideoId={this.getVideoId} />
                    </div>
                    <ShowList data={this.state.listVideo} getVideoId={this.getVideoId} />
                </div>

            </div>


        );
    }
}

const listVideo = [
    {
        id: 1,
        name: 'BLASPHEMOUS | Con đường diệt thần',
        videoId: '9bsR7LQgAzA',
    },
    {
        id: 2,
        name: 'THE BEAST INSIDE | Phá giải lời nguyền truyền kiếp',
        videoId: '6m7QXhIKmy4',
    },
    {
        id: 3,
        name: 'CALL OF DUTY: MODERN WARFARE [2019] | Chiến Trường Nga - Mỹ',
        videoId: 'pkQLn057RaA',
    },
    {
        id: 4,
        name: `ASSASSIN'S CREED III: Tóm Tắt Cốt Truyện`,
        videoId: 'RvRrgY8V5ok',
    }
]

export default CodingLevel3;
