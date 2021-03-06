import React, { Component } from 'react'
import { Button, Slider, Icon, Badge } from 'antd';
import { observer, inject } from 'mobx-react';
import ReactAudioPlayer from 'react-audio-player';
import { toJS } from 'mobx';
import { millisecondToMin } from '../../utils/tools';

@inject('mediaStore')
@observer
export default class MediaPlayer extends Component {
    audio = React.createRef();
    state = {
        currentPlayCount: 0,
        currentPlayTime: millisecondToMin(0)
    }
    componentDidMount() {
        this.props.mediaStore.getSongDetail();
        this.props.mediaStore.getSongUrl();
    }
    hanlderPause = () => {
        this.props.mediaStore.togglePlay();
        this.audio.current.audioEl.pause();
    }
    hanlderPlay = () => {
        this.props.mediaStore.togglePlay();
        this.audio.current.audioEl.play();
        let count = this.state.currentPlayCount;
        setInterval(()=>{
            count++;
            if(count<this.props.mediaStore.currentSongDuration){
                this.setState({
                    currentPlayCount: count*1000,
                    currentPlayTime: millisecondToMin(count*1000)
                })
            }
        },1000)
    }
    handlePlaying = () => {
        console.log('time', this.audio.current.audioEl.currentTime); 
    }
    canplay = ()=> {
       console.log('time', this.audio.current.audioEl.currentTime); 
    }
    render() {
        let { currentSongUrl, playing, currentSongDetail, currentSongDuration } = this.props.mediaStore;
        return (
            <div>
                <div className="media-control">
                    <Button type="primary" shape="circle" icon="step-backward" size='default' />
                    {
                        playing ?
                            <Button type="primary" shape="circle" icon="pause" size='large' style={{ margin: '0 20px' }} onClick={this.hanlderPause} /> :
                            <Button type="primary" shape="circle" icon="caret-right" size='large' style={{ margin: '0 20px' }} onClick={this.hanlderPlay} />
                    }
                    <Button type="primary" shape="circle" icon="step-forward" size='default' />
                </div>
                <div className="media-slider" style={{ width: 'calc(100vw - 590px)' }}>
                    <Slider style={{ marginTop: 29 }} 
                        max={currentSongDuration}
                        value={this.state.currentPlayCount}
                    />
                </div>
                <div className="media-time">
                    <span>{this.state.currentPlayTime}</span>
                    <span>/</span>
                    <span>{currentSongDuration && millisecondToMin(currentSongDuration)}</span>
                </div>
                <div className="media-voice">
                    <Icon type="sound" theme="filled" style={{ fontSize: 16 }} className="media-pointer" />
                    <Slider style={{ margin: '0 0 0 15px', width: 100, display: 'inline-block' }} defaultValue={30} />
                </div>
                <div className="media-end">
                    <Icon type="retweet" theme="outlined" style={{ fontSize: 18, marginRight: 20 }} className="media-pointer" />
                    <div style={{ display: 'inline-block' }} className="media-pointer">
                        <Icon type="menu-unfold" theme="outlined" style={{ fontSize: 18 }} />
                        <Badge count={4} style={{ backgroundColor: '#c0c0c0', color: '#fff', marginBottom: 5 }} />
                    </div>
                </div>
                <ReactAudioPlayer
                    onCanPlay={this.canplay}
                    onPlay={this.handlePlaying}
                    src={currentSongUrl}
                    ref={this.audio}
                />
            </div>)
    }
}