import React, { Component, Fragment } from 'react';
import YouTube from 'react-youtube';
import './App.css';

class App extends Component {
  state = {
    phonenumberInput: ''
  };

  _onReady = e => {
    e.target.playVideo();
  };

  // make video loop before ending
  _beforeEnding = e => {
    if (e.played >= 0.99) {
      this.player.seekTo(0);
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { phonenumberInput } = this.state;
    const opts = {
      method: 'POST',
      body: JSON.stringify(phonenumberInput)
    };
    fetch('/api/new/number', opts);
  };

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
            <div className="title">Välkommen till den hemliga festen</div>

            <form className="apply" onSubmit>
              <div className="row">
                <label>Telefonnummer:</label>
                <input
                  type="text"
                  name="phonenumberInput"
                  value={phonenumberInput}
                  onChange={this.handleChange}
                  pattern="^[0-9]+$"
                />
              </div>
              <input type="submit" value="anmäl mig" />
            </form>
          </div>
          <div className="video-background">
            <div className="video-foreground">
              <YouTube
                videoId="TpeYPw-04lk"
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onProgress={this._beforeEnding}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
