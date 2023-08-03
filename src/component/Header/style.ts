import { css, styled } from "styled-components";
import { DARK, defaultMode } from "../../consts/mode";

type PropsNav = {
  mode?: string;
};

const lightNavBar = css`
  box-shadow: 0px 0px 8px 0px #0000004a;
`;
const darkNavBar = css`
  border-bottom: 1px solid #ffffff4a;
`;

export const NavBarStyled = styled.nav<PropsNav>`
  position: static;
  display: flex;
  justify-content: center;

  ${(props) => {
    switch (props.mode) {
      case defaultMode:
        return lightNavBar;
      case DARK:
        return darkNavBar;
      default:
        return;
    }
  }}
`;
