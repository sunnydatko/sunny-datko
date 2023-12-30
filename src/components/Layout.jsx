import Box from "@mui/material/Box";
import Footer from "./Footer";
import ResponsiveMenu from "./ResponsiveMenu";
import Chat from './Chat'

const Layout = ({ children }) => {
  return (
    <>

      <ResponsiveMenu />
      <Box className="content" sx={{ marginTop: { xs: 0, md: 8 } }}>
        {children}
      </Box>
      <Footer />
      <Chat />
    </>
  );
};

export default Layout;
