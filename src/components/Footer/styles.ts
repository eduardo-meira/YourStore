import styled from 'styled-components'
import { colors } from '../../globalStyles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${colors.grey};
  padding: 32px 0px;
  font-size: 14px;
  margin-top: 40px;
`

export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  color: ${colors.lightGrey};
  text-decoration: none;
  margin-right: 8px;
  font-size: 16px;

  &:hover {
    color: ${colors.white};
  }
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
