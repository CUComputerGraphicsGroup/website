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
        <h3>October 9, 2018: Josh talks on sprite sheets</h3>
        <a href="https://git.io/fxZuH">Slides and codes</a>

        <h3>October 2, 2018: Lesley Lai talks about Ray Tracing</h3>
        <a href="http://lesleylai.info/slides/ray-tracing">slides</a>

        <h2>Graphics Hack Night</h2>
        <h3>Whitted Ray Tracer</h3>
        Repository: <a href="https://github.com/CUComputerGraphicsGroup/Graphics-Hack-Night">https://github.com/CUComputerGraphicsGroup/Graphics-Hack-Night</a>

      </Container>
    </Page>
  </IndexLayout>
)

export default Activities
