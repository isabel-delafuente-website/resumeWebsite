import React from "react"
import "./layout.css"
import { Helmet } from 'react-helmet'
import { Container } from '@material-ui/core'

export default function Layout({ children }) {
  return (
    <div className={"root c3-dark"}>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <Container maxWidth="md" className="c3-light">
        {children}
      </Container>
    </div>
  )
}