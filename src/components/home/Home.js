import React from 'react'
import Footer from '../footer/Footer'
import Tours from '../tours/Tours'
import './Home.css'
const data = require("../../data/db.json")


function Home() {
  return (
    <div>
      <Tours />
      <Footer />
    </div>
  )
}
export default Home;