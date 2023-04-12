import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import Link from "next/link";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { MdExpandMore } from "react-icons/md";

const MobileNav = ({ categories, isOpen, toggle }) => {
  console.log(categories);
  return (
    <Drawer
      sx={{ width: "100%", display: { lg: "none" } }}
      anchor={"right"}
      open={isOpen}
    >
      <Box sx={{ display: "flex", width: "100vw", alignItems: "start" }}>
        <Box
          sx={{
            width: "100px",
            position: "sticky",
            top: 0,
            height: "80px",
            border: "1px solid #eee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => toggle()} size="large">
            <GrFormClose />
          </IconButton>
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            height: "100vh",
          }}
        >
          {/* search */}
          <TextField
            inputProps={{}}
            fullWidth
            sx={{
              height: "80px",
              color: "white",
              position: "sticky",
              backgroundColor: "primary.main",
              top: 0,
              zIndex: 2,
              "& .MuiInputBase-root": { borderRadius: "0" },
              "& input": {
                color: "white",
                height: "48px",
                borderBottom: "1px solid #fff",
              },
            }}
            placeholder="جستجو..."
          />
          {/* menu items */}
          <Box sx={{ "& .Mui-expanded": { margin: 0 }, overflowY: "auto" }}>
            {categories.map((cat) => (
              <Accordion
                key={cat.id}
                sx={{ backgroundColor: "primary.main", boxShadow: "none" }}
              >
                <AccordionSummary
                  expandIcon={
                    <MdExpandMore
                      style={{ color: "white", fontSize: "35px" }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ color: "white", py: 4 }}
                >
                  <Link href={cat.link}>
                    <Typography fontSize="large" fontWeight="bold">
                      {cat.name}
                    </Typography>
                  </Link>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#666", py: 4 }}>
                  <Stack gap={2}>
                    {cat.subCategories.map((subCat) => (
                      <Link key={subCat.id} href={subCat.link}>
                        <Typography color="text.secondary">
                          {subCat.name}
                        </Typography>
                      </Link>
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

MobileNav.propTypes = {
  categories: PropTypes.array,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};
export default MobileNav;
