import React, {Component} from 'react';
import Typist from 'react-typist';

export default class Terminal extends React.Component {
  render() {
    return (
      <div>
        <span>tanmainaik@home:~$
            <Typist>
              <div className="container">
                <p> This will be animated after first sentence is complete </p>
              </div>
              Final sentence
            </Typist>
        </span>
      </div>

    );
  }
}
