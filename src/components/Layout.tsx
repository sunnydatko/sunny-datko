import Box from "@mui/material/Box";
import Footer from "./Footer";
import ResponsiveMenu from "./ResponsiveMenu";
import Ambient from "./Ambient";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Ambient />
    <ResponsiveMenu />
    <Box className="content" sx={{ marginTop: { xs: 0, md: 8 } }}>
      {children}
    </Box>
    <Footer />
  </>
);

export default Layout;
