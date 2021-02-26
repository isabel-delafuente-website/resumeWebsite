import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid } from "@material-ui/core";
import PaperWrapper from "../components/paperWrapper";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import {useStyle} from "../components/styles.js"

export default function Home({ data }) {
  const content = data.allContentYaml.edges[0].node;
  const classes = useStyle();

  return ( 
  <Layout>
    <div className="home">
      <img src={content.photo} alt="profile" width="120" height="120"/>
      <Grid container justify="center">
      <Grid item container spacing={0} className={classes.header} justify="center"> 
        <Grid item xs={12} justify="center">
          <h1>{content.title}</h1>
        </Grid>
        <Grid item container xs={12} className="links" justify="center">
          <Grid item xs={2}>
          <a href={content.linkedin}>
              <LinkedInIcon className="icon"/>
            </a>
          </Grid>
          <Grid item xs={2}>
            <a href={content.github}>
              <GitHubIcon className="icon"/>
            </a>
          </Grid>
          <Grid item xs={2}>
            <a href={content.resume}>
              <AttachFileIcon className="icon"/>
            </a>
          </Grid> 
        </Grid>
      </Grid>
      <Grid container item className={classes.resumeBody} justify="center">
        <Grid container item xs={12} className={classes.row} spacing={1} justify="center">
          <Grid container item  xs={12} md={8} classname={classes.item} spacing={1}>
            <Grid item  xs={12} >
                <PaperWrapper>
                  <div>
                  <h2>About Me</h2>
                  <p>{content.about}</p>
                  </div>
                </PaperWrapper>
            </Grid>
            <Grid item xs={12} classname={classes.item}>
              <PaperWrapper>
                <h2>Work</h2>
                {content.work.map((job, index) => (
                  <div>
                  <h3>{job.name}</h3>
                  <h4><i>{job.sub}</i> • {job.date}</h4>
                  <p>{job.content}</p>
                  </div>
                ))}
              </PaperWrapper>
            </Grid>
          </Grid>
          <Grid container item  xs={12} md={4} spacing={1} classname={classes.item} alignItems="stretch">
            <Grid item xs={12} className="education" alignItems="stretch">
              <PaperWrapper>
                <h2>Education</h2>
                {content.education.map((school, index) => (
                  <div>
                  <h3>{school.name}</h3>
                  <h4><i>{school.sub}</i> • {school.date}</h4>
                  <p>{school.content}</p>
                  </div>
                ))}
              </PaperWrapper>
            </Grid>
            <Grid item  xs={12} >              
              <PaperWrapper>
                <h2>Skills</h2>
                {content.skills.map((skill, index) => (
                  <div>
                  <li>{skill.name}</li>
                  </div>
                ))}
              </PaperWrapper>
            </Grid>
            <Grid item className={classes.item}>
              <PaperWrapper>
                <h2>Contact</h2>
                <p>{content.email}</p>
                <p>{content.phone}</p>
                <p>{content.address}</p>
              </PaperWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </div>
  </Layout>
  )
}

export const query = graphql`
  query {
    allContentYaml {
      edges {
        node {
          about
          email
          phone
          address
          facebook
          id
          linkedin
          github
          resume
          photo
          skills {
            name
            rank
          }
          twitter
          title
          work {
            content
            date
            name
            sub
            ...ContentYamlWorkFragment
          }
          education {
            ...ContentYamlEducationFragment
            date
            content
            name
            sub
          }
        }
      }
    }
  }
  
  fragment ContentYamlWorkFragment on ContentYamlWork {
    content
    date
    name
    sub
  }
  
  fragment ContentYamlEducationFragment on ContentYamlEducation {
    content
  }

`