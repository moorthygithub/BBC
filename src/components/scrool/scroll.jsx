import React from "react";
import { Fab, Tooltip } from "@mui/material";
import { ArrowUpward as ArrowUpwardIcon } from "@mui/icons-material";
import { styled } from "@mui/system";

const ScrollToTopButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: "#A41460",
  color: "#fff",
  border: "2px solid #A41460",
  "&:hover": {
    backgroundColor: "#A41460",
    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    width: 30,
    height: 30,
    lineHeight: "25px",
  },
}));

const Scrollbar = () => {
  return (
    <Tooltip title="Scroll to Top" aria-label="scroll to top">
      <ScrollToTopButton
        aria-label="scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpwardIcon />
      </ScrollToTopButton>
    </Tooltip>
  );
};

export default Scrollbar;
