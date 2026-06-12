import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
import { Bot } from "lucide-react";

const headerThemes = {
  manual: {
    accent: "#fbbf24",
    accentSoft: "#f59e0b",
    alt: "#3b82f6",
    appBar:
      "linear-gradient(90deg, rgba(2,6,23,0.94), rgba(15,23,42,0.92))",
    border: "rgba(251,191,36,0.16)",
    logoBg: "linear-gradient(135deg,#fbbf24,#f59e0b)",
    logoShadow: "0 0 20px rgba(251,191,36,0.34)",
    label: "Jeevan Maher",
    subLabel: "Manual QA",
  },
  automation: {
    accent: "#67e8f9",
    accentSoft: "#818cf8",
    alt: "#34d399",
    appBar:
      "linear-gradient(90deg, rgba(2,6,23,0.96), rgba(7,17,31,0.94), rgba(2,6,23,0.96))",
    border: "rgba(103,232,249,0.22)",
    logoBg: "linear-gradient(135deg,#06b6d4,#2563eb)",
    logoShadow: "0 0 24px rgba(103,232,249,0.38)",
    label: "Automation AI QA",
    subLabel: "Robotic Testing",
  },
};

function Header({ activeTab, setActiveTab }) {
  const isAutomation = activeTab === "automation";
  const theme = isAutomation ? headerThemes.automation : headerThemes.manual;

  const getButtonStyles = (tabName) => {
    const active = activeTab === tabName;

    return {
      px: { xs: 1.25, sm: 2.4, md: 3 },
      py: 1,
      minHeight: 40,
      borderRadius: "10px",
      color: active ? "#020617" : theme.accent,
      background: active
        ? `linear-gradient(135deg,${theme.accent},${theme.accentSoft})`
        : "transparent",
      border: active ? "1px solid transparent" : `1px solid transparent`,
      fontWeight: 800,
      fontSize: { xs: "0.78rem", sm: "0.9rem" },
      textTransform: "none",
      transition:
        "transform 0.25s ease, background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
      "&:hover": {
        background: active
          ? `linear-gradient(135deg,${theme.accent},${theme.accentSoft})`
          : `color-mix(in srgb, ${theme.accent} 12%, transparent)`,
        borderColor: `color-mix(in srgb, ${theme.accent} 28%, transparent)`,
        transform: "translateY(-2px)",
      },
    };
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`site-header ${isAutomation ? "automation-header" : "manual-header"}`}
      sx={{
        background: theme.appBar,
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${theme.border}`,
        overflow: "hidden",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          py: 1,
          px: { xs: 1.4, sm: 3 },
        }}
      >
        <Box
          className="header-brand-container"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 1.4 },
            minWidth: 0,
          }}
        >
          <Box
            className={isAutomation ? "robotic-logo" : ""}
            sx={{
              width: { xs: 40, sm: 45 },
              height: { xs: 40, sm: 45 },
              borderRadius: isAutomation ? "12px" : "14px",
              background: theme.logoBg,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: theme.logoShadow,
              border: `1px solid color-mix(in srgb, ${theme.accent} 36%, transparent)`,
              flex: "0 0 auto",
            }}
          >
            {isAutomation ? (
              <Bot size={24} color="#020617" strokeWidth={2.5} />
            ) : (
              <BugReportIcon sx={{ color: "#020617" }} />
            )}
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography
              className="header-brand-text"
              sx={{
                color: theme.accent,
                fontWeight: 900,
                fontSize: { xs: "0.95rem", sm: "1.15rem" },
                lineHeight: 1.1,
                whiteSpace: "nowrap",
              }}
            >
              {theme.label}
            </Typography>
            <Typography
              sx={{
                display: { xs: "none", sm: "block" },
                color: "rgba(203,213,225,0.72)",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                mt: 0.35,
              }}
            >
              {theme.subLabel}
            </Typography>
          </Box>
        </Box>

        <Box
          className="header-nav-container"
          sx={{
            display: "flex",
            gap: { xs: 0.7, sm: 1.1 },
            background: "rgba(255,255,255,0.035)",
            p: 0.55,
            borderRadius: "14px",
            border: `1px solid ${theme.border}`,
            boxShadow: isAutomation
              ? "inset 0 0 18px rgba(103,232,249,0.08)"
              : "inset 0 0 18px rgba(251,191,36,0.06)",
          }}
        >
          <Button onClick={() => setActiveTab("manual")} sx={getButtonStyles("manual")}>
            Manual Testing
          </Button>

          <Button
            onClick={() => setActiveTab("automation")}
            sx={getButtonStyles("automation")}
          >
            Automation Testing
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
