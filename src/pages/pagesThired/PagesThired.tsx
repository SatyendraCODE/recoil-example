import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import Sidebar from "../../component/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { PAGES_THIRED, ROUTES_PAGES_THIRED } from "../../consts/routes";

function PagesThired() {
  const theme = useTheme();

  return (
    <Box display={"flex"}>
      <Sidebar
        title={PAGES_THIRED}
        theme={theme}
        routesArray={ROUTES_PAGES_THIRED}
      />
      <Box px={1} component={"main"} sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default PagesThired;
