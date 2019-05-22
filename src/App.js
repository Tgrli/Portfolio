import React, { Component } from 'react';
import tiger from './tiger.JPG';
import fixer from './fixer.png';
import './App.css';

class App extends Component {
  // gotolink =()=>{
  //   return <a href="https://vast-beach-81174.herokuapp.com/"></a>
  // }
  render() {

    return (
      <div className="App">
        <div className="maindiv">
          <div className='heading'>

            <span class="portfoliotxt">PORTFOLIO</span>
          </div>


          <div className="personal">
            <h1>PERSONAL STATEMENT</h1>
            <div id="picntxt">
              <div id='personalpic'>
                <img src={tiger}></img>
              </div>
              <div id="textblock">
                <h2>TIGER LI</h2>
                <p>Undergraduate student studying Interactive Media Arts and Business at New York University Shanghai. Born in Shandong China and moved to Vancouver Canada at the age of three. Since then moved back and forth between China and Canada. Currently living in Shanghai China Has passion for photography. In my sophomore year, I had the opportunity to take application lab and learned how to make web applications and create interesting projects that have some practical use.  </p>
              </div>

            </div>
          </div>

          <div className="projectsummary">
            <h1>PROJECT SUMMARY</h1>
            <p>Fixer is more than a Digital Middleman that connects labor services to people in need. We host transactions and streamline the process.
      </p>
          </div>

          <div className="research">
            <h1>RESEARCH</h1>
            <p>
              We see an opportunity to create an application that serves as a medium to connect labor services with buyers/average people in need of them by leveraging the current delivery infrastructure already in place.Our App benefits service providers by giving them a platform to reach a larger consumer base and build their credibility. Our App benefits the buyer by giving them quality service from trustworthy individuals.Through our research we found out that safety and qualification are major consumer concerns. We plan to resolve this issue by making the workers provide their criminal record and health record along with skill certification. </p>
          </div>

          <div className="prototype">
            <h1>PROTOTYPE</h1>
            <div class='imgnlink'>
              <img id='fixer' src={fixer}></img>
              <a id="link" href="https://vast-beach-81174.herokuapp.com/">Go to our prototype</a>
            </div>

          </div>

          <div className="futurework">
            <h1>FUTURE WORK</h1>
            <p>In the future, the most viable option would be creating a WeChat mini program for Fixer. Also there is a long way to go interns of differentiating with our numerous competitors.  </p>
          </div>

        </div>
      </div>
    )
  }
}

export default App;
