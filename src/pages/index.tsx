import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>
          As of February 2020, this club is merged with the CU Game Dev club. Please visit our new website at <a href="https://cugdc.github.io/">cugdc.github.io/</a>
        </h1>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
