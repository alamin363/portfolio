import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Pages/Shared/Router";
import { Box, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./Actions/User";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  return (
    <Box
      sx={{
        my: "auto",
      }}
    >
      {/* <CssBaseline /> */}
      <RouterProvider router={router}></RouterProvider>
    </Box>
  );
}

export default App;
