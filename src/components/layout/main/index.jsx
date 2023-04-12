import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Header from "./header";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  return (
    <Stack minHeight="100vh">
      <Header />
        <Box
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
          }}
          my={5}
        >
          {children}
        </Box>     
      <Footer />
    </Stack>
  );
};

export default MainLayout;
