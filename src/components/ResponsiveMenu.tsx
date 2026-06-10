import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import BrandMark from "./BrandMark";

const drawerWidth = 320;
const navItems = [
  { name: "ABOUT", url: "/#about" },
  { name: "EXPERIENCE", url: "/#experience" },
  { name: "WORK", url: "/#work" },
  { name: "CONTACT", url: "/#contact" },
];

type ResponsiveMenuProps = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: any;
};

const ResponsiveMenu = (props: ResponsiveMenuProps) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(globalThis.scrollY > 20);
    onScroll();
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // mobile drawer
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", paddingTop: 1 }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <BrandMark starSize={20} fontSize={15} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton href={item.url} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: transparent ? "transparent" : "rgba(20,18,17,0.65)",
          backdropFilter: transparent ? "none" : "blur(14px)",
          WebkitBackdropFilter: transparent ? "none" : "blur(14px)",
          borderBottom: transparent
            ? "1px solid transparent"
            : "1px solid rgba(245,241,236,0.08)",
          transition: "background-color 0.4s ease, border-color 0.4s ease",
          zIndex: 1100,
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "common.white", mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ marginRight: 2 }}>
            <Link href="/" aria-label="Sunny Datko — home">
              <BrandMark starSize={22} fontSize={16} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}>
            {navItems.map(({ name, url }) => (
              <Button
                href={url}
                key={name}
                sx={{ textTransform: "capitalize" }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default ResponsiveMenu;
