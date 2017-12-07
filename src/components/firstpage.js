import React from "react"
import "./firstpage.css"

class Firstpage extends React.Component {

  render() {
    return (

      <div>
        <div className="body">
          <div className="menu">
            <ul>
              <li>Projects</li>
              <li>FAQ</li>
              <li>About</li>
            </ul>
          </div>
          <div className="container">
            <div className="main">
              <div className="image">
                <img src="" alt="Annika" />
              </div>
              <div className="text">
                <p id="text">Text about meText about meText about meText about meText about me</p>
              </div>
            </div>
            <hr />
            <div className="info">
              <h1>My Background</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet saepe harum assumenda consectetur? Beatae id asperiores voluptatum. Molestiae aliquam assumenda accusantium ipsam laboriosam, nam doloribus maxime dicta at cum.</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Firstpage
