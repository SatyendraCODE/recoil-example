import { Link } from "react-router-dom";
import styled from "styled-components";

// ({ fontSize }: { fontSize: number | string }) => `
export const LinkSC = styled(Link)`
  color: inherit;
  opacity: 0.5;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const SpanStyled = styled.span`
  color: inherit;
  transition: 1s;
`;
