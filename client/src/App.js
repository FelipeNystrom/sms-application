import React, { Component, Fragment } from 'react';
import YouTube from 'react-youtube';
import './App.css';

class App extends Component {
  state = {
    phonenumberInput: ''
  };

  _onReady(event) {
    event.target.playVideo();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {
    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };

    const { phonenumberInput } = this.state;

    return (
      <Fragment>
        <div className="wrapper">
          <div className="content">
            <div className="title" />
            <form onSubmit>
              <input />
            </form>
          </div>
          <div className="video-background">
            <div className="video-foreground">
              <YouTube
                videoId="TpeYPw-04lk"
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onEnd={this._onEnd}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
