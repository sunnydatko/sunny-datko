import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const skills = [
  {
    icon: "bi bi-heart",
    header: "Lifelong Learner",
    text: "Dedicated to learning and improving my knowledge and skills",
  },
  {
    icon: "bi bi-robot",
    header: "Lifelong Learner",
    text: "Specialized in web-based applications and mobile development",
  },
  {
    icon: "bi bi-lightbulb",
    header: "Entrepreneur",
    text: "Inspired by empowering others to succeed",
  },
];

const Icons = () => {
  return (
    <Box
      component="section"
      className="el-icons"
      sx={{ backgroundColor: "grey.100", position: "relative" }}
    >
      <Box className="wrap">
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              textAlign: "center",
              i: {
                fontSize: "3.5rem",
              },
              ".MuiTypography-h4": {
                fontSize: "24px",
                paddingBottom: 1,
              },
              ".MuiTypography-body1": {
                fontSize: "16px",
                lineHeight: 1.2,
              },
            }}
          >
            {skills.map((skill) => (
              <Box className="col-sm">
                <i className={skill.icon} />
                <Typography variant="h4">{skill.header}</Typography>
                <Typography>{skill.text}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Icons;
