import { forwardRef } from "react";
import { CustomContentProps, useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseIcon from "@mui/icons-material/Close";

const ACCENT: Record<string, string> = {
  success: "#98A287",
  error: "#C8682A",
};

const ICON: Record<string, React.ElementType> = {
  success: CheckCircleOutlineIcon,
  error: ErrorOutlineIcon,
};

const CustomSnackbar = forwardRef<HTMLDivElement, CustomContentProps>(
  ({ id, message, variant }, ref) => {
    const { closeSnackbar } = useSnackbar();
    const accent = ACCENT[variant] ?? "#A78AB2";
    const Icon = ICON[variant] ?? CheckCircleOutlineIcon;

    return (
      <Box
        ref={ref}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          minWidth: 280,
          maxWidth: 420,
          px: 2,
          py: 1.5,
          borderRadius: "10px",
          backgroundColor: "#1C1A18",
          border: "1px solid rgba(245,241,236,0.10)",
          borderLeft: `3px solid ${accent}`,
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
        }}
      >
        <Icon sx={{ color: accent, fontSize: 20, flexShrink: 0 }} />
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#F5F1EC",
            flex: 1,
            lineHeight: 1.4,
          }}
        >
          {message}
        </Typography>
        <IconButton
          size="small"
          onClick={() => closeSnackbar(id)}
          sx={{
            color: "rgba(245,241,236,0.4)",
            p: 0.25,
            "&:hover": { color: "#F5F1EC" },
          }}
        >
          <CloseIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
    );
  },
);

CustomSnackbar.displayName = "CustomSnackbar";

export default CustomSnackbar;
