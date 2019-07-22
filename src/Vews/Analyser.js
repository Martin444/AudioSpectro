import React, { Component } from 'react'
import AudioAnalyser from "react-audio-analyser"

export default class Analyser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: ""
        }
    }

    controlAudio(status) {
        this.setState({
            status
        })
    }


    render() {
        const {status, audioSrc} = this.state;
        const audioProps = {
            audioType: "audio/wav", // Temporarily only supported audio/wav, default audio/webm
            status, // Triggering component updates by changing status
            audioSrc,
            backgroundColor: "rgb(0, 0, 0, 0.3)",
            width: 1355,
            startCallback: (e) => {
                console.log("succ start", e)
            },
            pauseCallback: (e) => {
                console.log("succ pause", e)
            },
            stopCallback: (e) => {
                this.setState({
                    audioSrc: window.URL.createObjectURL(e)
                })
                console.log("succ stop", e)
            }
        }
        return (
            <AudioAnalyser {...audioProps} className="App-header">
                <div className="btn-box">
                    {status !== "recording" &&
                    <input type="button" className="btn-start" value="Comenzar"
                       onClick={() => this.controlAudio("recording")}/>}
                    {status === "recording" &&
                    <i className="iconfont icon-pause" title="暂停"
                       onClick={() => this.controlAudio("paused")}></i>}
                    <i className="iconfont icon-stop" title="停止"
                       onClick={() => this.controlAudio("inactive")}></i>
                </div>
            </AudioAnalyser>
        )
    }
}
