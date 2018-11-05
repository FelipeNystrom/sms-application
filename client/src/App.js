import React, { Component, Fragment } from 'react';
import YouTube from 'react-youtube';
import './App.css';

class App extends Component {
  state = {
    phonenumberInput: '',
    loading: false,
    errorMsg: '',
    successMsg: ''
  };

  _onReady = e => {
    e.target.playVideo();
    // make video loop before ending
    setInterval(() => {
      e.target.seekTo(0);
      console.log('looped');
    }, 58 * 1000);
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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phoneNumber: phonenumberInput })
    };
    fetch('/api/new/number', opts)
      .then(res => {
        if (res.ok) {
          this.setState({
            phonenumberInput: '',
            successMsg:
              'Tack för din anmälan! Du kommer få ett sms av oss när det är dags!'
          });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ errorMsg: 'Ojdå! Något har gått fel. Prova igen!' });
      });
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

            <form className="apply" onSubmit={this.handleSubmit}>
              <div className="row">
                <label>Telefonnummer:</label>
                <input
                  type="text"
                  name="phonenumberInput"
                  value={phonenumberInput}
                  onChange={this.handleChange}
                  pattern="\d{10,11}"
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
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
