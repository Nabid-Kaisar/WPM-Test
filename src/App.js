import React, { Component } from "react";
import Stopwatch from "react-stopwatch";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.startTime = this.startTime.bind(this);
    this.userWpm = this.userWpm.bind(this);

    var fixedText =
      "On July 11, 2013 the United States government recognised professional players of the video game League of Legends as professional athletes. In a practical sense this has no effect beyond the bureaucratic (League players now have an easier time with passports), but it reflects that the world of eSports is being taken seriously. That being said, this sounds like very much a first world phenomenon: there could not be any scope for eSports developing in Bangladesh, surely? As it turns out, the answers to that question are much more complex than one might expect. According to Soufin Rahimeen aka FlameDra, a League of Legends player, the prospects of eSports in Bangladesh has never been higher.  He cites the rise of devoted communities and strong teams in a number of competitive games (Counter-strike, LoL and DotA 2 to name a few) and a growing number of sponsored organisations such as Infernal Gaming that try to get teams together to compete in international tournaments. Beside the DPC point system based direct-invites, the rest of the tournament is organized in 4 different stages. Open Qualifier, Regional Qualifier, Group Stage and Main event. For a tournament this big you need a huge time to organize the qualifier. Different Regions and a huge pool of teams attending the qualifier makes it tough for most of the team that has not invited directly.";

    var ftArray = fixedText.split(/(\s+)/);
    this.state = {
      array1: ftArray,
      currentIndex: 0,
      correctedWord: 0
    };
  }

  handleChange(e) {
    var currentChar = e.target.value.slice(-1);
    if (currentChar === " ") {
      this.checker(e.target.value);
    }
  }

  checker(typedText) {
    var word = 0;
    var typedTextArray = typedText.split(/(\s+)/);

    console.log(typedTextArray);
    console.log(this.state.array1);
    for (var z = 0; z < typedTextArray.length; z++) {
      if (typedTextArray[z] !== " ") {
        if (typedTextArray[z] === this.state.array1[z]) {
          word++;
        }
      }
    }
    console.log(word);

    this.setState({ correctedWord: word });
  }

  startTime() {
    ReactDOM.render(
      <Stopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit={"00:00:59"}
        withLoop={true}
        onCallback={() => this.userWpm()}
      />,
      document.getElementById("timer")
    );
  }

  userWpm() {
    alert("Congrats, Your Wpm is " + this.state.correctedWord);
  }

  render() {
    return (
      <div className="container">
        <h3>
          Type in the box:
        </h3>
        <p className="text-content">
          On July 11, 2013 the United States government recognised
          professional players of the video game League of Legends as
          professional athletes. In a practical sense this has no effect
          beyond the bureaucratic (League players now have an easier time with
          passports), but it reflects that the world of eSports is being taken
          seriously.That being said, this sounds like very much a first world
          phenomenon: there could not be any scope for eSports developing in
          Bangladesh, surely? As it turns out, the answers to that question
          are much more complex than one might expect. According to Soufin
          Rahimeen aka FlameDra, a League of Legends player, the prospects of
          eSports in Bangladesh has never been higher. He cites the rise of
          devoted communities and strong teams in a number of competitive
          games (Counter-strike, LoL and DotA 2 to name a few) and a growing
          number of sponsored organisations such as Infernal Gaming that try
          to get teams together to compete in international tournaments.
          Beside the DPC point system based direct-invites, the rest of the
          tournament is organized in 4 different stages. Open Qualifier,
          Regional Qualifier, Group Stage and Main event. For a tournament
          this big you need a huge time to organize the qualifier. Different
          Regions and a huge pool of teams attending the qualifier makes it
          tough for most of the team that has not invited directly.
        </p>
        <h3>
          The number of words u corrected:
          {this.state.correctedWord}
        </h3>
        <p>Start typing from here</p>
        <input
          type="text"
          className="content-input"
          name="input-box"
          onChange={this.handleChange}
        />
        <button onClick={this.startTime} className="submit-button">
          Start Test
        </button>
      </div>
    );
  }
}

export default App;
