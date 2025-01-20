import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${colors.grey};
  padding: 24px;
  margin-bottom: 40px;

  .payments {
    margin-top: 24px;
    font-size: 16px;
  }

  h3 {
    margin-top: 24px;
  }

  h2,
  h3 {
    font-size: 22px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }
`
