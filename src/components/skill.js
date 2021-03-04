import React from "react"
import {useStyle} from "./styles.js"

export default function Skill({ skill, rank, props }) {
  const classes = useStyle(props);
  const percent = rank*(10).toString() + "%";
  console.log("percent")
  console.log(percent)

  return (
    <div className={classes.skill}>
        <p style={{marginBottom: "5px"}}><b>{skill}</b></p>
        <div style={{backgroundColor: "#E1E2E1", marginRight: "10px"}}>
            <div className={classes.progress} style={{width: percent, height: "3px"}}>
            </div>
        </div>
    </div>
  )
}