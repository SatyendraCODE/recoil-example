import { Box, Container, Divider } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./component/Header/Header";
import { useTheme } from "styled-components";

function Layout() {
  const location = useLocation();
  const theme = useTheme();

  return (
    <>
      <Header location={location} theme={theme} />
      <Divider />
      <Container component={"section"} maxWidth={"xl"}>
        <Box py={10}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default Layout;
