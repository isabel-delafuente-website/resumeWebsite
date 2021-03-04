import React from "react"
import { Grid } from "@material-ui/core";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import {useStyle} from "../components/styles.js"

export default function Icons({content, props}) {
    const classes = useStyle(props);

    const iconMapping = [
        {
            'name': "facebook",
            'component': <FacebookIcon className={classes.icon}/>,
            'link': content.facebook
        },
        {
            'name': "github",
            'component': <GitHubIcon className={classes.icon}/>,
            'link': content.github

        },
        {
            'name': "linkedin",
            'component': <LinkedInIcon className={classes.icon}/>,
            'link': content.linkedin

        },
        {
            'name': "twitter",
            'component': <TwitterIcon className={classes.icon}/>,
            'link': content.twitter

        },
        {
            'name': "instagram",
            'component': <InstagramIcon className={classes.icon}/>,
            'link': content.instagram
        },
    ]

    return (
        <Grid item container direction="row" xs={12} className="links" justify="center">
            {iconMapping.map((icon, index) => (
                 icon.link !== "" ?
                    (
                    <Grid item xs={2}>
                        <a href={icon.link} target="blank">
                            {icon.component}
                        </a>
                    </Grid>
                    ) : (
                    <div></div>
                    )
            ))}
        </Grid>
  )
}