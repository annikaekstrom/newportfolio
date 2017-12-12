import React from "react"
import "./projectPage.css"

class Details extends React.Component {

  render() {
    return (

      <div className="ProjectDetail">
        <h2>{this.props.name}</h2>
        <div className="description">
          <p>{this.props.description}</p>
        </div>
      </div>

    )
  }
}

export default Details
