import React from "react"
import "./layout.css"
import { Helmet } from 'react-helmet'
import { Container } from '@material-ui/core'

import {useStyle} from "../components/styles.js"

export default function Layout({ children, props }) {
  const classes = useStyle(props);

  return (
    <div className={classes.root}>
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