import React, {Component} from 'react'


export default class Avatar extends React.Component {
  render () {
      return (
        <div>
            <div className="blobs">
                <img src="../../images/avatars/dev1.png" className="blob"/>
                <img src="../../images/avatars/dev2.png" className="blob"/>
                <img src="../../images/avatars/dev3.jpg" className="blob"/>
                <img src="../../images/avatars/dev4.jpg" className="blob"/>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
         </div>
      )
  }
}
