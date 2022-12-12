import Typography from "@material-ui/core/Typography";
import { generateColorMode } from "../style/enable-dark-mode";
import Box from "@material-ui/core/Box";
import React from "react";
import { useThemeContext } from "../../context/theme-context";

export const FooterComponent = () => {
  const { theme } = useThemeContext();

  return (
    <Box mt={5}>
      <Typography variant="body2" color="inherit" align="center">
        {" KPI Chat - "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};
