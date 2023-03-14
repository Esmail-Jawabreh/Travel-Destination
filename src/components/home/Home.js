import React from 'react'
import Tours from '../tours/Tours'
import './Home.css'
const data = require("../../data/db.json")


function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <Tours />
    </div>
  )
}
export default Home;