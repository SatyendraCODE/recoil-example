import { Box } from "@mui/material";
import { styled } from "styled-components";

export const DivFlex = styled(Box)`
  display: flex;
`;
export const DivFlexX = styled(Box)`
  display: flex;
  justify-content: center;
`;
export const DivFlexY = styled(Box)`
  display: flex;
  align-items: center;
`;
export const DivFlexXY = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**flex-Directions column*/
export const DivFlexColumn = styled(Box)`
  display: flex;
  flex-direction: column;
`;
export const DivFlexColumnX = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const DivFlexColumnY = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DivFlexColumnXY = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
