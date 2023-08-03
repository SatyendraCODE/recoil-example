import { useMemo } from "react";
import { LinkSC } from "../style";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation } from "react-router-dom";

type ListProps = {
  routes: Array<any>;
  theme: any;
};

function ListComponent({ theme, routes }: ListProps) {
  const location = useLocation();

  const getPath = useMemo(() => {
    const path = location.pathname.split("/");
    return path[path.length - 1];
  }, [location]);

  return (
    <List>
      {routes.map((route, index) => (
        <LinkSC
          to={index === 0 ? "/" + route.path : route.path}
          key={route.path}
          style={{
            color: getPath === route.path ? theme.palette.primary.main : "",
            opacity: getPath === route.path ? 1 : "",
          }}
        >
          <ListItem>
            <ListItemText primary={route.title} />
            <Box fontSize={12}>
              <ArrowForwardIosIcon fontSize="inherit" />
            </Box>
          </ListItem>
        </LinkSC>
      ))}
    </List>
  );
}

export default ListComponent;
