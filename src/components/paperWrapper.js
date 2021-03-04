import React from "react"
import { Paper } from "@material-ui/core";

import {useStyle} from "./styles.js"

export default function PaperWrapper({ children , props}) {
  const classes = useStyle(props);

  return (
    <Paper className={classes.paper}>
      <div className={classes.innerPaper}>
            {children}
      </div>
    </Paper>
  )
}