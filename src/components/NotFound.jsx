import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet";

import monster from "../assets/404-monster.png";

const NotFound = () => {
  return (
    <Container>
      <Helmet title="Page Not Found" />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          height: "max-content",
          paddingY: 4,
          gap: 4,
        }}
      >
        <img src={monster} style={{ maxHeight: "30em", maxWidth: "90%" }} />
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography gutterBottom variant="h4">
            Uh oh...
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
            The page you are looking for was moved, deleted, or possibly eaten
            by a monster.
          </Typography>
          <Button variant="contained" sx={{ marginTop: 3 }}>
            Go Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
