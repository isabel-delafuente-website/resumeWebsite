import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid, Button } from "@material-ui/core";
import PaperWrapper from "../components/paperWrapper";
import Skill from "../components/skill.js";
import Icons from "../components/icons.js"

import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import ComputerIcon from '@material-ui/icons/Computer';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

import {useStyle} from "../components/styles.js"

export default function Home({ data }) {
  const content = data.allContentYaml.edges[0].node;
  const props = data.allContentYaml.edges[1].node;
  console.log(props)
  const classes = useStyle(props);

  return (
  <Layout props={props}>
    <div className="home">
      <img src={content.photo} alt="profile" width="120" height="120"/>
      <Grid container justify="center">
      <Grid item container spacing={1} className={classes.header} justify="center"> 
        <Grid item xs={12} justify="center">
          <h1>{content.title}</h1>
        </Grid>
          <Icons content={content} props={props}/>
      </Grid>
      <Grid container item className={classes.resumeBody} justify="center">
        <Grid container item xs={12} className={classes.row} spacing={1} justify="center" style={{margin: 0}}>
          <Grid container item  xs={12} md={8} classname={classes.item} spacing={1}>
            <Grid item  xs={12}>
                <PaperWrapper  props={props}>
                  <div>
                    <Grid container  justify="left" alignItems="center">
                      <Grid item xs={2} md={1}>
                        <PersonIcon className={classes.iconBody}/> 
                      </Grid>
                      <Grid item xs={10} md={11}>
                      <h2>About Me</h2>
                      </Grid>
                    </Grid>
                    <p>{content.about}</p>
                  </div>
                </PaperWrapper>
            </Grid>
            <Grid item xs={12} classname={classes.item}>
              <PaperWrapper  props={props}>
                <Grid container justify="left" alignItems="center">
                  <Grid item xs={2} md={1}>
                      <WorkIcon className={classes.iconBody}/> 
                  </Grid>
                  <Grid item xs={10} md={11}>
                    <h2>Work</h2>
                  </Grid>
                </Grid>
                {content.work.map((job, index) => (
                  <div>
                  <h3>{job.name}</h3>
                  <h4><i>{job.sub}</i> • {job.date}</h4>
                  <p>{job.content}</p>
                  <br/>
                  </div>
                ))}
              </PaperWrapper>
            </Grid>
          </Grid>
          <Grid container item  xs={12} md={4} spacing={1} classname={classes.item} alignItems="stretch">
            <Grid item xs={12} className="education" alignItems="stretch">
              <PaperWrapper  props={props}>
                <Grid container justify="left" alignItems="center">
                  <Grid item xs={2} md={2}>
                      <SchoolIcon className={classes.iconBody} style={{marginRight: "10px"}}/> 
                  </Grid>
                  <Grid item xs={10} md={8}>
                    <h2>Education</h2>
                  </Grid>
                </Grid>
                {content.education.map((school, index) => (
                  <div>
                  <h3>{school.name}</h3>
                  <h4><i>{school.sub}</i> • {school.date}</h4>
                  <p>{school.content}</p>
                  <br/>
                  </div>
                ))}
              </PaperWrapper>
            </Grid>
            <Grid item  xs={12} >              
              <PaperWrapper props={props}>
                <Grid container justify="left" alignItems="center">
                  <Grid item xs={2} md={2}>
                      <ComputerIcon className={classes.iconBody} style={{marginRight: "10px"}}/> 
                  </Grid>
                  <Grid item xs={10} md={8}>
                    <h2>Skills</h2>
                  </Grid>
                </Grid>
                {content.skills.map((skill, index) => (
                  <Skill skill={skill.name} rank={skill.rank} props={props}/>
                ))}
                <br/>
              </PaperWrapper>
            </Grid>
            <Grid item className={classes.item}>
              <PaperWrapper  props={props}>
                <Grid container justify="left" alignItems="center">
                  <Grid item xs={2} md={2}>
                      <RecentActorsIcon className={classes.iconBody} style={{marginRight: "10px"}}/> 
                  </Grid>
                  <Grid item xs={10} md={8}>
                    <h2>Contact</h2>
                  </Grid>
                </Grid>
                <div className={classes.contact}>
                  <p>{content.email}</p>
                  <p>{content.phone}</p>
                  <p>{content.address}</p>
                  <Button href={content.resume} target="blank" variant="contained" className={classes.button}>
                    Download Resume
                  </Button>
                </div>
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
          header4_color
          header3_color
          header2_color
          header1_color
          background
          content_background
          page_background
          primary

          about
          email
          phone
          address
          facebook
          instagram
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