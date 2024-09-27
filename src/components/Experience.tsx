import { Fragment } from "react";
import Link from "@mui/material/Link";
import { Box, Container, List, ListItemText, Typography } from "@mui/material";

import { experience } from "../helpers/config";
import { Button } from "@mui/material";

const Experience = () => (
  <Box
    component="section"
    className="el-title"
    id="experience"
    sx={{
      position: "relative",
    }}
  >
    <div className="wrap">
      <Container
        sx={{
          ".MuiTypography-body1": {
            fontSize: { xs: "16px", md: "20px" },
          },
        }}
      >
        <Typography variant="h3">Experience</Typography>
        {experience.slice(0, 4).map((role) => (
          <Fragment key={role.company}>
            <Typography sx={{ fontWeight: 700 }}>
              {role.title}
              {", "}
              <Link href={role.url} target="_blank">
                {role.company}
              </Link>
            </Typography>
            <Typography>{role.dates}</Typography>
            <List sx={{ listStyleType: "disc", pl: 4 }}>
              {role.experience.map((point) => (
                <ListItemText key={point} sx={{ display: "list-item" }}>
                  {point}
                </ListItemText>
              ))}
            </List>
          </Fragment>
        ))}
        <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
          <Button href="/experience" disableRipple>
            View full resume
          </Button>
        </Box>
      </Container>
    </div>
  </Box>
);

export default Experience;
