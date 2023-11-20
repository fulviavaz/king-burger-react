import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ifood from "assets/ifood.svg";
import instagram from "assets/instagram.svg";
import whatsapp from "assets/whatsapp.svg";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ReactComponent as Logo } from "assets/logo.svg";

const pages = ["Home", "Ofertas", "Cardapio", "Comentarios", "Contato"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const appBarStyle = {
    backgroundColor: "rgba(59, 32, 11, 0.05)",
    backDropFilter: "blur(55px)",
  };

  const buttonStyle = {
    backgroundColor: "#F59A1B",
    border: "none",
    cursor: "pointer",
    marginLeft: "15px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    padding: "4px 16px",
    borderRadius: "5px",
    fontFamily: "Lato",
  };

  return (
    <AppBar position="absolute" style={appBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* <Logo /> */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "rgba(29, 6, 5, 0.90)" }}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    component="span"
                    textAlign="center"
                    sx={{
                      fontFamily: "Lato",
                      fontWeight: 400,
                      fontSize: "18px",
                      textDecoration: "none",
                      textTransform: "none",
                      color: "#635352",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              marginRight: "100px",
            }}
          >
            <Logo />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component="a"
                href={`#${page.toLowerCase().replace(/\s/g, "-")}`} // Gerando o ID da seção a partir do nome da página
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: "none",
                  textTransform: "none",
                  color: "#635352",
                  "&:hover": {
                    fontWeight: 700,
                    color: "#34201F",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <IconButton sx={{ p: 0, gap: "20px" }}>
              <img src={ifood} alt="Ifood" />
              <img src={instagram} alt="Instagram" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="48"
                viewBox="0 0 2 48"
                fill="none"
              >
                <path d="M1 0.107422V47.7662" stroke="#B50B04" />
              </svg>
              <button style={buttonStyle}>
                <img src={whatsapp} alt="whatsapp" /> Contato
              </button>
            </IconButton>

            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
