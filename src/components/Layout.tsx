import Box from "@mui/material/Box";
import Footer from "./Footer";
import ResponsiveMenu from "./ResponsiveMenu";
import Chat from "./Chat";
import ChatProvider from "./ChatProvider";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <ResponsiveMenu />
    <Box className="content" sx={{ marginTop: { xs: 0, md: 8 } }}>
      {children}
    </Box>
    <Footer />
    <ChatProvider>
      <Chat />
    </ChatProvider>
  </>
);

export default Layout;
