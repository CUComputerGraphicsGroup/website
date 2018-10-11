import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface PositionProps {
  readonly name: string,
  readonly position: string,
  readonly email?: string,
  readonly image?: any
}

const Position = (props: PositionProps) => (
  <article>
    <h2>{props.position}</h2>
    <p>{props.name}</p>
    {props.email && <p>Email: <a href={"mailto:" + props.email}>{props.email}</a></p>}
  </article>
)



const Leadership = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Current Leadership</h1>
        <Position name="Lesley Lai" position="President"
          email="lesleylai@lesleylai.info" />

        <Position name="Tiffany Phan" position="Vice President" />

        <Position name="Joshua Franklin" position="Co Vice President" />

        <Position name="Elizabeth Qiu" position="Secretary" />

        <Position name="Empty" position="Treasurer" />

      </Container>
    </Page>
  </IndexLayout >
)

export default Leadership
