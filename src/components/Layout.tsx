import Box from "@mui/material/Box";
import Footer from "./Footer";
import ResponsiveMenu from "./ResponsiveMenu";
import Ambient from "./Ambient";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Ambient />
    <Box component="a" href="#main-content" className="skip-link">
      Skip to main content
    </Box>
    <ResponsiveMenu />
    <Box
      component="main"
      id="main-content"
      tabIndex={-1}
      className="content"
      sx={{ marginTop: { xs: 0, md: 8 }, outline: "none" }}
    >
      {children}
    </Box>
    <Footer />
  </>
);

export default Layout;
