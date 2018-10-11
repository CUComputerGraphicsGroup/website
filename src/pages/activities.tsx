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
        <h4>October 9, 2018: Josh talks on sprite sheets</h4>
        <a href="https://git.io/fxZuH">Slides and codes</a>

        <h4>October 2, 2018: Lesley Lai talks about Ray Tracing</h4>
        <a href="http://lesleylai.info/slides/ray-tracing">slides</a>
      </Container>
    </Page>
  </IndexLayout>
)

export default Activities
