import React from "react"
import ProjectPage from "pages/projectPage"
import { Link } from "react-router-dom"
import "./projectPreview.css"

class ProjectPreview extends React.Component {

  render() {
    return (
      <Link to={`/projects/${this.props.url}`} className="ProjectPreview">
        <div className="container">
          <h1>{this.props.name}</h1>

          <div className="description">
            <h1>{this.props.description}</h1>
          </div>
        </div>
      </Link>
    )
  }

}

export default ProjectPreview
