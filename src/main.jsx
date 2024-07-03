import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Section from './Section.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Section title="General Information" labels= {["First Name", "Last Name", "Email", "Phone Number"]}/>
    <Section title="Educational Experience" labels= {["Start Date", "End Date", "School Name", "Title of Study"]}/>
    <Section title="Practical Experience" labels= {["Start Date", "End Date", "Company Name", "Position Title"]}/>
  </React.StrictMode>,
)
