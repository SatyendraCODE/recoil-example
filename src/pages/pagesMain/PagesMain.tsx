import { Box } from "@mui/material";
import Sidebar from "../../component/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useTheme } from "styled-components";
import { PAGES_MAIN, ROUTES_PAGES_MAIN } from "../../consts/routes";

function PagesMain() {
  const theme = useTheme();

  return (
    <Box display={"flex"}>
      <Sidebar
        title={PAGES_MAIN}
        theme={theme}
        routesArray={ROUTES_PAGES_MAIN}
      />
      <Box px={1} component={"main"} sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default PagesMain;
