import React from "react";
import YouTube from "react-youtube";

import playButton from "../img/playbutton.svg";
import pauseButton from "../img/pauseButton.svg";
import "../AudioPlayer.css";

const UNSTARTED = -1;
const ENDED = 0;
const PLAYING = 1;
const PAUSED = 2;
const BUFFERING = 3;
const VIDEO_CUED = 5;
const ORIGIN_URL = "http://localhost:3000";
const YOUTUBE_HOST_URL = "https://www.youtube.com";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state.options = {
        height: "0",
        width: "0",
        playerVars: {
            autoplay: this.state.autoplay,
            loop: this.state.loop,
            start: this.state.startSecond,
            end: this.state.endSecond,
            wmode: "opaque",
            origin: ORIGIN_URL,
        },
    };
    this.state.controlButton = playButton;
    this.state.videoID = this.props.videoID;
    this.state.startSecond = this.props.start;
    this.state.endSecond = this.props.end;

    this.audioPlayer = React.createRef();
  }

  state = {
    videoID: "t7X8qhESIfs",
    autoplay: "0",
    loop: "1",
    player: null,
  };


  toggleControlButton(isPlaying) {;
    this.setState({ controlButton: isPlaying ? pauseButton : playButton });
  }

  onPlayerStateChange(e) {
    if (e.data === 0) {
      this.toggleControlButton(false);
    }
  }

  onPlayerReady(e) {
    this.toggleControlButton(e.target.getPlayerState() !== VIDEO_CUED);
    this.setState({ player: e.target });

    this.audioPlayer.current.addEventListener("click", () => {
        if (
          this.state.player.getPlayerState() === PLAYING ||
          this.state.player.getPlayerState() === BUFFERING
        ) {
          this.state.player.pauseVideo();
          this.toggleControlButton(false);
        } else {
          this.state.player.playVideo();
          this.toggleControlButton(true);
        }
      });
  }

  render() {
    return (
      <div className="audio-player" ref={this.audioPlayer}>
        <img
          src={this.state.controlButton}
          alt="control-button"
          className="audio-player__control-button"
        />
        <YouTube
          videoId={this.state.videoID}
          host={YOUTUBE_HOST_URL}
          opts={this.state.options}
          onReady={this.onPlayerReady.bind(this)}
          onStateChange={this.onPlayerStateChange.bind(this)}
        />
      </div>
    );
  }
}

export default AudioPlayer;
