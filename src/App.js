import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Pages/Shared/Router";
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <Box sx={{
      my:"auto"
    }}>
    {/* <CssBaseline /> */}
    <RouterProvider router={router}></RouterProvider>
    </Box>
  );
}

export default App;
