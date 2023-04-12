
import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import Image from "next/image";
import React from "react";
import {AiOutlineInstagram,AiOutlineTwitter,AiOutlineLinkedin,AiFillFacebook,} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'


const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#4D4D4D", marginTop: "auto", py: 4 }}
    >
      <Container maxWidth="lg">
        <Stack direction={{xs:'column',md:'row'}} alignItems='center' justifyContent='space-between'>
          <Stack direction={{xs:'column',sm:'row'}} alignItems='center' gap={2}>
            <Link fontSize='medium' href='/'  underline="none" sx={{color:'text.primary','&:hover':{color:'white'}}}>قوانین ژاکت</Link>
            <Link href='/' underline="none" sx={{color:'text.primary','&:hover':{color:'white'}}}>بروز رسان هوشمند</Link>
            <Link href='/' underline="none" sx={{color:'text.primary','&:hover':{color:'white'}}}> لوگو</Link>
            <Link href='/' underline="none" sx={{color:'text.primary','&:hover':{color:'white'}}}>همکاری با ما</Link>
          </Stack>
          <Image src='/zheket_logo2.svg' height={100} width={100} alt="logo" style={{margin: '20px 0'}}/>
          <Stack direction={{xs:'column',sm:'row'}} alignItems='center' gap={2}>
            <Link href='/'  underline="none" sx={{color:'text.primary','&:hover':{color:'white'}}}>فروشنده شوید</Link>
            <Link href='/' underline="none" sx={{color:'text.primary','&:hover':{color:'white'}}}> مشتریان وفادار</Link>
            <Link href='/' underline="none" sx={{color:'text.primary','&:hover':{color:'white'}}}> درباره ما</Link>
            <Link href='/' underline="none" sx={{color:'text.primary','&:hover':{color:'white'}}}> تماس با ما</Link>
          </Stack>
        </Stack>
        <Divider sx={{ borderColor: "text.primary",my:2 }} />
        <Stack  direction={{xs:'column',sm:'row'}} gap={2} alignItems='center' justifyContent='space-between'>
            <Stack>
            <Typography fontSize='small'>ژاکت در شبکه های اجتماعی</Typography>
            <Stack direction='row' gap={0.5}>
              <AiOutlineInstagram fontSize='25px'/>
              <AiFillFacebook fontSize='25px'/>
              <AiOutlineTwitter fontSize='25px'/>
              <AiOutlineLinkedin fontSize='25px'/>
              <FaTelegramPlane fontSize='25px'/>
            </Stack>
            </Stack>
            <Image src='/assets/images/enamad.png' height={100} width={100} alt="enamad"/>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
