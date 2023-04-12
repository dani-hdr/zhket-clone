import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import DesktopNav from "./DesktopNav";
import { categories } from "@/data";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import HideOnScroll from "./HideOnScroll";

const Header = () => {
  const [isMobileNavOpen,setMobile] = useState(false)

  const toggleMobileNav = () =>{
    setMobile(prev=>!prev)
  }

  return (
    <HideOnScroll >
      <AppBar
      
        position="sticky"
        elevation={1}
        sx={{
         
          borderTop: "3px solid",
          borderColor: "primary.main",
          backgroundColor:'white'
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack sx={{display:{lg:"none"}}} direction="row" alignItems="center">
              <IconButton onClick={()=> toggleMobileNav()} disableRipple={true} sx={{ fontSize: "2.5rem" }}>
                <FiMenu />
              </IconButton>
              <IconButton LinkComponent={Link} href="/" disableRipple={true}>
                <Image
                  width={35}
                  height={35}
                  alt="logo"
                  src="/zheket_logo_sm.svg"
                />
              </IconButton>
            </Stack>
            <DesktopNav categories={categories} />
            <MobileNav  categories={categories} isOpen={isMobileNavOpen} toggle={toggleMobileNav}/>
            <Stack direction="row" gap={0} alignItems="center">
              <Box>
                <IconButton
                  size="medium"
                  sx={{ "&:hover": { bgcolor: "transparent" } }}
                >
                  <BiSearch />
                </IconButton>
                <IconButton
                  size="medium"
                  sx={{ "&:hover": { bgcolor: "transparent" } }}
                >
                  <BiShoppingBag />
                </IconButton>
              </Box>
              <Divider
                flexItem
                orientation="vertical"
                sx={{
                  borderWidth: "1px",
                  height: "25px",
                  alignSelf: "center",
                  borderColor: (theme) => theme.palette.grey[400],
                }}
              />
              <Button
                variant="text"
                size="medium"
                sx={{
                  color: "text.secondary",
                  "&:hover": { bgcolor: (theme) => theme.palette.grey[200] },
                }}
              >
                ورود
              </Button>
              <Button variant="contained" size="medium">
                ثبت نام
              </Button>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
