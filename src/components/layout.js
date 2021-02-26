import React from "react"
import "./layout.css"
import { Helmet } from 'react-helmet'
import { Container } from '@material-ui/core'

import {useStyle} from "../components/styles.js"

export default function Layout({ children }) {
  const classes = useStyle();

  return (
    <div className={"root c3-ligth"}>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        {children}
      </Container>
    </div>
  )
}