import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import ProjectPreview from "pages/projectPreview"
import About from "pages/about"
import Faq from "pages/faq"
import Home from "pages/home"
import Navigation from "./navigation"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectPreview} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />

        </div>
      </BrowserRouter>
    )
  }

}

export default App
