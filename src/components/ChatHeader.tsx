import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Close from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

import sunny from "../assets/sunny.jpg";

type ChatHeaderProps = {
  onClose: () => void;
};

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        padding: theme.spacing(1.2, 2),
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${theme.palette.primary.dark}`,
        backgroundColor: "primary.main",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        color: "common.white",
        zIndex: 1500,
      }}
    >
      <Avatar alt="Sunny" src={sunny} sx={{ marginRight: 2 }} />
      <Typography sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}>
        SunnyBot
      </Typography>
      <Close
        onClick={onClose}
        sx={{
          padding: 0.5,
          borderRadius: "50%",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      />
    </Box>
  );
};

export default ChatHeader;
