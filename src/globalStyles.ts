import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  smartphone: '480px'
}

export const colors = {
  white: '#eee',
  black: '#111',
  grey: '#333',
  lightGrey: '#A3A3A3',
  green: '#10AC84',
  darkGreen: '#0b7d60'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  font-family: Roboto , sans-serif;
  list-style: none;
  }

  body {
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 40px;
  }

  .container{
  max-width: 980px;
  width: 100%;
  margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%;
    }

  }
`
