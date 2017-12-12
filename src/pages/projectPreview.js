import React from "react"
// import { Link } from "react-router-dom"
import projects from "./../data/projects"
import "./projectPreview.css"
import Details from "./details"

class ProjectPreview extends React.Component {

  render() {
    return (
      // <Link to={`/projects/${this.props.url}`} className="projects">
      <div className="projectcontainer">
        <div className="mainproducts">
          <div className="productdetails">
            {projects.map((item) => {
              return <Details
                key={item.id}
                name={item.name}
                description={item.description} />
            })}
          </div>
        </div>
      </div>
    )
  }

}

export default ProjectPreview
