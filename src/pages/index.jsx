import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple`, fontSize: `72px` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}