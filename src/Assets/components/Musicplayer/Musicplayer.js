import React from "react";
import ReactDOM from "react-dom";
import "./Musicplayer.css";

import Murloc from "../../media/sounds/murloc.mp3";
import Sad from "../../media/sounds/sad-violin.mp3";
const campfireStory = "../media/sounds/murloc.mp3";
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
        case "Chillin-with-Murloc":
          track = Murloc;
          break;
        case "Yeet the deeds":
          track = Sad;
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
      { id: 3, title: "Chillin-with-Murloc"},
      { id: 4, title: "Yeet the deeds"}
    ].map(item => {
      return (
          
          <div>
              <li
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}>
          {item.title}
              </li>
          </div>
        
      );
    });

    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    return (
      <>
        <div className ="container" id = "musicplayer">
        <h1>Music Player</h1>
        <div>
            
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