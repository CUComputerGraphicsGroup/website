import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const Activities = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Activities</h1>
        <h2>Talks</h2>
      </Container>
    </Page>
  </IndexLayout>
)

export default Activities
