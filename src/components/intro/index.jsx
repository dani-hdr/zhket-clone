import { Box, Container, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {CiSearch} from 'react-icons/ci'
const Intro = () => {
  return (
   <Box component='section'>
    <Container maxWidth='sm'>
     <Stack alignItems='center' gap={5}>
        <Image src='/zheket_logo.svg' height={100} width={100} alt='logo'/>
        <Box component='form' width='100%'>
        <TextField InputProps={{
          endAdornment: (
            <InputAdornment sx={{color:'text.secondary',fontSize:'35px'}} position="start">
              <CiSearch  />
            </InputAdornment>
          ),
        }} fullWidth placeholder='برای مثال : انفود'  sx={{borderRadius: "50px", '& input':{height:'30px'},  "& .MuiInputBase-root": { borderRadius: "50px" },boxShadow:theme=>theme.shadows[1]}}/>
        </Box>
        <Box textAlign='center'>
            <Typography component='h1' variant='h5' fontWeight='bold' mb={2}>معتبرترین مارکت تخصصی قالب و افزونه وردپرس</Typography>
            <Typography>هر محصول را با ۶ ماه گارانتی بازگشت وجه، پشتیبانی تضمین شده و بروزرسانی خودکار از پیشخوان وردپرس از ژاکت دریافت کنید</Typography>
        </Box>
    </Stack>
   </Container>
   </Box>
  )
}

export default Intro