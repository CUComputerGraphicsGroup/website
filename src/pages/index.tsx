import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Welcome to the official website for the CU Computer Graphics Group</h1>
        <p>
          The CU Computer Graphics Group is a student orgnization formed and maintained by students of <a href="https://www.colorado.edu/">University of Colorado</a>.
        </p>

        <p>
          Our group was founded at Sebtember, 2018; Its predecessor is a club called "CU Computer Science Discussion Group".
        </p>
        <h2>Contact</h2>
        <ul>
          <li>Join the group at <a href="https://orgsync.com/156978/chapter">University portal</a> </li>
          <li>Please also join the <a href="https://join.slack.com/t/cucomputergraphics/shared_invite/enQtMzgyMzgzNDY5ODg5LTAzMWNkZDY1MDY2YWE5MzY4OTkyNWI5ZmNkMmQ4ZTUzZWNmN2JjN2UxOGZiM2Y2YWI5YmE0OTBmNTAyY2NjNDU">slack channel</a> to chat</li>
          <li>Email: graphics@colorado.edu</li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
