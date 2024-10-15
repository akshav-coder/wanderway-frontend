import React from "react";
import { CssBaseline } from "@mui/material";
import AppRouter from "./routes";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline /> {/* This ensures consistent styling with MUI */}
      <AppRouter />
    </>
  );
};

export default App;
