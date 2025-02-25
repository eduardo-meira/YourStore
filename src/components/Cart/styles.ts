import styled from 'styled-components'
import { colors } from '../../globalStyles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/icon/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartCotnainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${colors.grey};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  padding-right: 16px;

  .closer {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-size: cover;
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    top: 8px;
  }

  ul button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-size: cover;
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;

    ${ButtonContainer} {
      max-width: 100%;
      width: 100%;
    }
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};

  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGrey};
    margin-bottom: 24px;
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
    border-radius: 4px;
  }
  I h3 {
    color: ${colors.white};
    font-weight: bold;
    font-size: 16px;
  }
  span {
    display: block;
    color: ${colors.white};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }
`
