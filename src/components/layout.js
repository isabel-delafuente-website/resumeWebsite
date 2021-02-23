import React from "react"
import "./layout.css"
import { Helmet } from 'react-helmet'

export default function Layout({ children }) {
  return (
    <div className={"root"}>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      {children}
    </div>
  )
}