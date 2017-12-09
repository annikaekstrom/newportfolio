import React from "react"
import "./faq.css"

class Faq extends React.Component {

  render() {
    return (
      <div>

        <div className="images">
          <div className="faq">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="allProjects">
            <div className="project">
              <h4 id="headline">Yearbook</h4>
              <img id="yearbook" src="./yearbook.png" alt="Yearbook" />
              <p id="description">This is a yearbook</p>
            </div>
            <div className="project">
              <h4 id="headline">Yearbook</h4>
              <img id="yearbook" src="./yearbook.png" alt="Yearbook" />
              <p id="description">This is a yearbook</p>
            </div>
            <div className="project">
              <h4 id="headline">Yearbook</h4>
              <img id="yearbook" src="./yearbook.png" alt="Yearbook" />
              <p id="description">This is a yearbook</p>
            </div>
            <div className="project">
              <h4 id="headline">Yearbook</h4>
              <img id="yearbook" src="./yearbook.png" alt="Yearbook" />
              <p id="description">This is a yearbook</p>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default Faq
