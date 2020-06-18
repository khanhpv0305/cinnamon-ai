import styled from 'styled-components'

import { btnRadius } from '../../constants/style.constant'

const Button = styled.button`
  border-radius: ${btnRadius}px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  color: white;
  padding: 7px 16px;
  transition: all 0.2s;

  &:hover, &:focus {
    background: white;
    color: black;
  }
`

export default Button
