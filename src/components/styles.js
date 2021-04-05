import React from 'react';
import styled from "styled-components/macro";
import purple from '@material-ui/core/colors/purple'
import { 
  Button as MuiButton,
  Container as MuiContainer,
  colors,
  Typography
} from '@material-ui/core'
import { spacing } from "@material-ui/system";
const purpleColor = "#BA3BFF"
// ------------ Styled Elements ------------ //
export const StyledH3 = styled.h3`
  padding-left: 25px;
`
export const StyledUl = styled.ul`
  
`
export const StyledLi = styled.li`
  margin-bottom: 20px;
`

// ----------- Styled Components ----------- //

export const StyledButton = styled(MuiButton)`
  background-color: ${purpleColor};
  color: #fff;
  font-weight: bold;
  font-size: smaller;
  border-radius: 50px;
  width: 150px;
  text-transform: none;
  margin-left: 25px;
  padding: 3px;
  &:hover {
    background-color: #8e24aa
  }

  @media (max-width: 959.95px) {
    transform: translate(-50%, 0);
    left: 50%;
    margin: auto;
  }
`;

export const DefaultButton = styled(MuiButton)`
  color: #E040FB;
  font-size: small;
  border-radius: 50px;
  width: 100px;
  text-transform: none;
  margin-left: 25px;
  &:hover {
    background-color: transparent;
  }
  @media (max-width: 959.95px) {
    margin: auto;
    display: block;
  }
`;

export const StyledTypography = styled(Typography)`
  font-size: smaller;
  padding: 25px;
  color: gray;
`

// --------------- Container --------------- //
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SelectContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  p {
    margin-top: 10px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StylesImg = styled.img`
  margin: 5px 20px;
  display: flex;
  height: 20px;
`;

export const ContentContainer = styled(MuiContainer)`
  max-width: 500px;
  position: relative;
`;
