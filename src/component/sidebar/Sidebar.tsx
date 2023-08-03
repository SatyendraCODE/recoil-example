import { Box, Typography } from "@mui/material";
import ListComponent from "./component/ListComponent";

const sideWidth = 300;

export type SideProp = {
  title: string;
  routesArray: Array<any>;
  theme?: any;
};

function Sidebar({ title, theme, routesArray }: SideProp) {
  return (
    <Box width={sideWidth} component={"aside"}>
      <Typography component={"h6"} variant="h6" px={2} gutterBottom={false}>
        {title}
      </Typography>
      <ListComponent theme={theme} routes={routesArray} />
    </Box>
  );
}

export default Sidebar;
