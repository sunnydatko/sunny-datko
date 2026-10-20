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
const sectionIds = navItems.map((item) => item.url.split("#")[1]);

type ResponsiveMenuProps = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
};

const ResponsiveMenu = (props: ResponsiveMenuProps) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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

  // Highlights the nav item for the section currently in view. Home is
  // lazy-loaded, so a MutationObserver keeps watch for sections that mount
  // after this component does (mirrors the .reveal scan in Ambient.tsx).
  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }
    if (typeof IntersectionObserver === "undefined") return;

    const intersecting = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersecting.set(entry.target.id, entry.isIntersecting);
        });
        const current = sectionIds.find((id) => intersecting.get(id));
        if (current) setActiveSection(current);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    const seen = new Set<Element>();
    const scan = () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && !seen.has(el)) {
          seen.add(el);
          io.observe(el);
        }
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
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
      <Box component="nav" aria-label="Mobile">
        <List>
          {navItems.map((item) => {
            const id = item.url.split("#")[1];
            const isActive = activeSection === id;
            return (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  href={item.url}
                  aria-current={isActive ? "true" : undefined}
                  sx={{
                    textAlign: "center",
                    color: isActive ? "primary.light" : undefined,
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        aria-label="Main"
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
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
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
            {navItems.map(({ name, url }) => {
              const id = url.split("#")[1];
              const isActive = activeSection === id;
              return (
                <Button
                  href={url}
                  key={name}
                  aria-current={isActive ? "true" : undefined}
                  sx={{
                    textTransform: "uppercase",
                    color: isActive ? "primary.light" : undefined,
                    fontWeight: isActive ? 700 : 400,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "50%",
                      bottom: 6,
                      transform: isActive
                        ? "translateX(-50%) scaleX(1)"
                        : "translateX(-50%) scaleX(0)",
                      transformOrigin: "center",
                      width: "16px",
                      height: "2px",
                      borderRadius: "2px",
                      backgroundColor: "primary.light",
                      transition: "transform 0.25s ease",
                    },
                  }}
                >
                  {name}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer
          id="mobile-navigation"
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
