import * as React from "react"

export const EmailTemplate = ({ name, email, message }) => (
  <div>
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
)

export default EmailTemplate
