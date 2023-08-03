import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import IconButton from "@mui/material/IconButton";
import { ColorModeContext } from "../../App";
import { NavBarStyled } from "./style";
import { LinkSC } from "../sidebar/style";
import { HOMEPAGE, PAGES } from "../../consts/routes";
import { defaultMode } from "../../consts/mode";
import { Link } from "react-router-dom";

type HeaderProps = {
  location: any;
  theme: any;
};

function Header({ location, theme }: HeaderProps) {
  const { toggleColorMode, mode } = React.useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getPathHeader = React.useMemo(() => {
    const path = location.pathname.split("/");
    return path[1];
  }, [location]);

  return (
    <NavBarStyled>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="h6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={HOMEPAGE}>RECOIL</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {PAGES.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RECOIL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {PAGES.map((route) => (
              <LinkSC
                to={route.path}
                key={route.path}
                style={{
                  padding: "10px 20px",
                  color:
                    getPathHeader === route.path
                      ? theme.palette.primary.main
                      : "",
                  opacity: getPathHeader === route.path ? 1 : "",
                }}
              >
                {route.title}
              </LinkSC>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {mode === defaultMode ? (
              <IconButton
                children={<ModeNightIcon />}
                onClick={toggleColorMode}
              />
            ) : (
              <IconButton
                children={<Brightness4Icon />}
                onClick={toggleColorMode}
              />
            )}
          </Box>
        </Toolbar>
      </Container>
    </NavBarStyled>
  );
}
export default Header;
