import React, {Component} from 'react';
import Typist from 'react-typist';
import styles from '../scss/main.scss'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Typist>
          <span className="my-custom-class"> First Sentence sdsdsdsd</span>
          <br />
          <div className="container">
            <p> This will be animated after first sentence is complete </p>
          </div>
          Final sentence
        </Typist>
      </div>

    );
  }
}
