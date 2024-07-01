import Box from "@mui/material/Box";

import loader from "../assets/loader.gif";

const Loader = () => (
  <Box
    sx={{
      position: "fixed",
      left: "0px",
      top: "0px",
      width: "100%",
      height: "100%",
      zIndex: "9999",
      background: `url(${loader}) center no-repeat #fff`,
    }}
  />
);

export default Loader;
