import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid } from "@material-ui/core";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AttachFileIcon from '@material-ui/icons/AttachFile';

export default function Home({ data }) {
  const content = data.allContentYaml.edges[0].node;

  return ( 
  <Layout>
    <div className="home">
      <Grid container spacing={3} className="header">
        <Grid item xs={12}>
          <h2>{content.title}</h2>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0} className="links">
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
      </Grid>
      <Grid container spacing={3} className="about ">
        <Grid item xs={12}>
          <h2>About Me</h2>
          <p>{content.about}</p>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="work ">
        <Grid item xs={12}>
          <h2>Work</h2>
          {content.work.map((job, index) => (
            <div>
            <h3>{job.name}</h3>
            <h4><i>{job.sub}</i> • {job.date}</h4>
            <p>{job.content}</p>
            </div>
          ))}
        </Grid>
      </Grid>
      <Grid container spacing={3} className="education">
        <Grid item xs={12}>
          <h2>Education</h2>
          {content.education.map((school, index) => (
            <div>
            <h3>{school.name}</h3>
            <h4><i>{school.sub}</i> • {school.date}</h4>
            <p>{school.content}</p>
            </div>
          ))}
        </Grid>

        <Grid item xs={12}>
          <h2>Skills</h2>
          {content.skills.map((skill, index) => (
            <div>
            <li>{skill.name}</li>
            </div>
          ))}
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
          contact
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