import { Box, Button, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const DesktopNav = ({ categories }) => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [subCategories, setSubCategories] = useState([]);

  const handleShowDropDown = () => {
    setShowDropDown(true);
  };
  const handleHideDropDown = () => {
    setShowDropDown(false);
    document.querySelectorAll("#nav-menu").forEach((item) => {
      item.style.boxShadow = "none";
      item.style.backgroundColor = "transparent";
    });
  };
  const handleMenuItemEnter = (subCategories, event) => {
    setSubCategories(subCategories);

    document.querySelectorAll("#nav-menu").forEach((item) => {
      item.style.boxShadow = "none";
      item.style.backgroundColor = "transparent";
    });
    if(event.target.tagName == "A"){
      event.target.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px -8px 8px 0px";
      event.target.style.backgroundColor = "#fff";
    }
  };
  
  return (
      <Stack sx={{display:{xs:"none" , lg:"block"}}} component="nav" direction="row">
        <Box
          onMouseEnter={handleShowDropDown}
          onMouseLeave={handleHideDropDown}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              id="nav-menu"
              LinkComponent={Link}
              onMouseEnter={handleMenuItemEnter.bind(
                null,
                category.subCategories
              )}
              href={category.link}
              disableRipple={true}
              endIcon={<IoIosArrowDown style={{boxShadow:'none'}}  size="12px" />}
              sx={{
                color: "text.secondary",
                borderRadius: "0",
                zIndex: 5,
                "&:hover": { bgcolor: "white" },
                py: 3,
                px: 2,
              }}
            >
              {category.name}
            </Button>
          ))}
          <Paper
            sx={{
              p: 2,
              position: "absolute",
              top: 70,
              left:0,
              right:0,
             
              transition: "all ease-in 0.1s",
              visibility: showDropdown ? "visible" : "hidden",
              opacity: "100",
            }}
          >
            <Stack direction="row" gap={2}  flexWrap="wrap">
              {subCategories.map((subCategory) => (
                <Button  sx={{width:270,py:1.5,justifyContent:'flex-start',gap:2,color:'text.secondary','&:hover':{bgcolor:theme=>theme.palette.grey[100]}}} key={subCategory.id} variant="text">
                  <Image width={30} height={30} alt="" src={`/images/categories/${subCategory.imageName}`}/>
                  {subCategory.name}
                </Button>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Stack>

  );
};

DesktopNav.propTypes = {
  categories: PropTypes.array,
};

export default DesktopNav;
