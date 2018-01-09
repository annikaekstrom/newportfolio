import React from "react"
import "./form.css"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }

handleName = (event) => {
  this.setState({
    name: event.target.value
  })
}

handleEmail = (event) => {
  this.setState({
    email: event.target.value
  })
}

handleMessage = (event) => {
  this.setState({
    message: event.target.value
  })
}
handleSubmit = (event) => {
  this.setState({
    submit: event.target.value
  })
}

// const nodemailer = require("nodemailer")
// const xoauth2 = require("xoauth2")
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     xoauth2: xoauth2.createXOAuth2Generator({
//       user: "mariejohannanilsson@gmail.com",
//       clientId: "826591993979-a0tttnf12r7jvu05p4735mt8hik9tv6d.apps.googleusercontent.com",
//       clientSecret: "hzuejdMZeofz2cbCGBd14H4p",
//       refreshToken: ""
//     })
//   }
// })
//
// let mailOptions = {
//   from: "Marie <mariejohannanilsson@gmail.com>",
//   to: "Annika <ekstromannikamaria@gmail.com>",
//   subject: "Mail from web page.",
//   text: "Hej!"
// }
//
// transporter.sendMail(mailOptions, function(err, res) {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log("Email sent");
//   }
// })
render() {
  return (

    <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          <h4>Name:</h4>
          <input type="text" id="name" value={this.state.name} onChange={this.handleName} />
        </label>

        <label htmlFor="email">
          <h4>Email:</h4>
          <input type="email" id="email" value={this.state.email} onChange={this.handleEmail} />
        </label>

        <label htmlFor="message">
          <h4>Message:</h4>
          <textarea name="" id="message" cols="30" rows="10" value={this.state.message} onChange={this.handleMessage} />

        </label>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>

  )
}
}

export default Form
