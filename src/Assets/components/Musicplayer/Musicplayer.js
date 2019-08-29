import React from "react";
import ReactDOM from "react-dom";
import "./Musicplayer.css";

import Outset from "../../media/sounds/outsetislandremix.mp3";
import Earthbound from "../../media/sounds/earthbound-lofi.mp3";
const campfireStory = "../media/sounds/";
const bootingUp = "../../media/sounds/tf_nemesis,mp3";

function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

class Musicplayer extends React.Component {
  state = {
    selectedTrack: null,
    player: "stopped",
    currentTime: null,
    duration: null
  };

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case "Campfire Story":
          track = campfireStory;
          break;
        case "Booting Up":
          track = bootingUp;
          break;
        case "Outset Island":
          track = Outset;
          break;
        case "Earthbound":
          track = Earthbound;
          break;
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: "playing", duration: <a class="waves-effect waves-light btn">this.player.duration</a> });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
  }

  render() {

    

    const list = [
      { id: 1, title: "Campfire Story" },
      { id: 2, title: "Booting Up" },
      { id: 3, title: "Outset Island"},
      { id: 4, title: "Earthbound"},
      { id: 5, title: "2"},
      { id: 6, title: "3"},
    ].map(item => {
      return (
          
          <div className = "musicplayer-buttons">
            <a class ="btn-small pink lighten-4 playlist">
              <li 
          key={item.id}s
          onClick={() => this.setState({ selectedTrack: item.title })}>
          {item.title}
              </li>
              </a>
          </div>
        
      );
    });

    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    return (
      <>
        <div className ="container" id = "musicplayer">
        <h1 id ="musicplayer-title">Music Player</h1>
        <div class = "musicplayer-controls">
            
          {this.state.player === "paused" && (
            <button class="yeet waves-effect waves-light btn blue lighten-1" onClick={() => this.setState({ player: "playing" })}>
              <i class="fas fa-play-circle"></i>
            </button>
          )}
          {this.state.player === "playing" && (
            <button class="yeet waves-effect waves-light btn blue lighten-1" onClick={() => this.setState({ player: "paused" })}>
              <i class="fas fa-pause-circle"></i>
            </button>
          )}
          {this.state.player === "playing" || this.state.player === "paused" ? (
            <button class="yeet waves-effect waves-light btn blue lighten-1" onClick={() => this.setState({ player: "stopped" })}>
              <i class="fas fa-stop-circle"></i>
            </button>
          ) : (
            ""
          )}
        </div>
        <ul>{list}</ul>
        </div>
        
        {this.state.player === "playing" || this.state.player === "paused" ? (
          <div>
            {currentTime} / {duration}
          </div>
        ) : (
          ""
        )}
        <audio ref={ref => (this.player = ref)} />
      </>
    );
  }
}

export default Musicplayer;