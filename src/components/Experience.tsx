import { Fragment } from "react";
import Link from "@mui/material/Link";
import {
  Box,
  Button,
  Container,
  List,
  ListItemText,
  Typography,
} from "@mui/material";

import { experience } from "../helpers/config";

const Experience = () => (
  <Box
    component="section"
    className="el-title"
    id="experience"
    sx={{ position: "relative" }}
  >
    <div className="wrap">
      <Container sx={{ maxWidth: "880px !important" }}>
        <Box sx={{ textAlign: "center", mb: 6 }} className="reveal">
          <Typography
            component="span"
            sx={{
              color: "secondary.main",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: { xs: 12.5, md: 14 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Career
          </Typography>
          <Typography variant="h3" sx={{ mt: 2 }}>
            Experience
          </Typography>
        </Box>

        {experience.slice(0, 4).map((company) => (
          <Box
            key={company.company}
            className="reveal"
            sx={{
              position: "relative",
              pl: { xs: 2.5, md: 4 },
              py: 1,
              mb: 4,
              borderLeft: "2px solid",
              borderColor: "rgba(167,138,178,0.35)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "24px", md: "30px" },
              }}
            >
              <Link href={company.url} target="_blank">
                {company.company}
              </Link>
              {"note" in company && company.note && (
                <Typography
                  component="span"
                  sx={{
                    color: "secondary.main",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: { xs: 13, md: 15 },
                    ml: 1.5,
                  }}
                >
                  {company.note}
                </Typography>
              )}
            </Typography>

            {company.roles.map((role) => (
              <Fragment key={role.title}>
                <Typography
                  sx={{
                    color: "grey.100",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: 16, md: 18 },
                    mt: 2,
                  }}
                >
                  {role.title}
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: { xs: 13, md: 14 },
                    letterSpacing: "0.04em",
                  }}
                >
                  {role.dates}
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 3,
                    py: 0.5,
                    "& .MuiTypography-root, & .MuiListItemText-primary": {
                      color: "grey.300",
                    },
                  }}
                >
                  {role.points.map((point) => (
                    <ListItemText key={point} sx={{ display: "list-item" }}>
                      {point}
                    </ListItemText>
                  ))}
                </List>
              </Fragment>
            ))}
          </Box>
        ))}

        {/* <Box className="reveal" sx={{ textAlign: "center", mt: 5 }}>
          <Button
            href="https://www.linkedin.com/in/sunnydatko/"
            target="_blank"
            rel="noopener"
            variant="outlined"
            sx={{ px: 3.5, py: 1.1 }}
          >
            View full résumé
          </Button>
        </Box> */}
      </Container>
    </div>
  </Box>
);

export default Experience;
