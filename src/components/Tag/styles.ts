import styled from 'styled-components'
import { colors } from '../../globalStyles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
  margin-right: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkGreen};
    transition: all ease-in-out 0.2s;
  }
`
