import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { communityOutreach, education, experience } from "../config";

const Experience = () => {
  return (
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
          <Typography variant="h3">Professional Experience</Typography>
          <Typography align="center" gutterBottom>
            Get to know where I've proven my skills
          </Typography>
          {experience.map((role) => (
            <React.Fragment key={role.company}>
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
            </React.Fragment>
          ))}
          <Typography gutterBottom variant="h4">
            Community Outreach
          </Typography>
          {communityOutreach.map((role) => (
            <React.Fragment key={role.company}>
              <Typography sx={{ fontWeight: 700 }}>
                {role.title}
                {" @ "}
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
            </React.Fragment>
          ))}

          <Typography gutterBottom variant="h4">
            Education
          </Typography>
          {education.map((role) => (
            <React.Fragment key={role.company}>
              <Typography sx={{ fontWeight: 700 }}>
                {role.title}
                {role.url ? (
                  <>
                    {" - "}
                    <Link href={role.url} target="_blank">
                      {role.company}
                    </Link>
                  </>
                ) : (
                  role.company
                )}
              </Typography>
              <Typography>{role.dates}</Typography>
              <List sx={{ listStyleType: "disc", pl: 4 }}>
                {role.experience.map((point) => (
                  <ListItemText key={point} sx={{ display: "list-item" }}>
                    {point}
                  </ListItemText>
                ))}
              </List>
            </React.Fragment>
          ))}
        </Container>
      </div>
    </Box>
  );
};

export default Experience;
