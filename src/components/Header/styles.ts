import styled from 'styled-components'
import { breakpoints, colors } from '../../globalStyles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.grey};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 40px;
  }

  img {
    height: 30px;
    border-radius: 6px;
  }

  a,
  span {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }

  h1 {
    line-height: 0;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  a:hover {
    &:hover {
      opacity: 0.5;
      transition: all ease-in-out 0.2s;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.5;
    transition: all ease-in-out 0.2s;
  }

  img {
    margin-left: 16px;
    height: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const Hamburguer = styled.div`
  width: 32px;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
  span {
    width: 100%;
    height: 2px;
    display: block;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }
`
