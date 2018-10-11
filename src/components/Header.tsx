import * as React from 'react'
import styled from 'react-emotion'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  color: ${transparentize(0.5, colors.white)};
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.black};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Menu = styled.div`
  float: right;
`

const MenuLink = styled(Link)`
  color: ${colors.white};
  font-size: 0.8em;
  font-weight: 600;

  padding: 1em 1.5em;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8em;
  color: #2B3F48;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${colors.black};
  }
`

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>

      <Menu>
        <MenuLink to="/">Homepage</MenuLink>
        <MenuLink to="/leadership">Leadership</MenuLink>
        <MenuLink to="/activities">Activities</MenuLink>
      </Menu>


    </HeaderInner>
  </StyledHeader>
)

export default Header
