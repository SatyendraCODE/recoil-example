import { Box } from "@mui/material";
import Sidebar from "../../component/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useTheme } from "styled-components";
import { PAGES_SECOND, ROUTES_PAGES_SECOND } from "../../consts/routes";

function PagesSecond() {
  const theme = useTheme();

  return (
    <Box display={"flex"}>
      <Sidebar
        title={PAGES_SECOND}
        theme={theme}
        routesArray={ROUTES_PAGES_SECOND}
      />
      <Box px={1} component={"main"} sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default PagesSecond;
