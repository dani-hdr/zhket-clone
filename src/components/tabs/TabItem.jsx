import { Box, Divider, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const TabItem = () => {

   const [showInfo,setShowInfo] = useState(false)
   const [isMouseLeft ,setIsMouseLeft] = useState(false)

   const  getMousePosition = useCallback((event)=>{
        if(event.clientX < 480){
            setIsMouseLeft(true)
        }
        
   },[])
   const handleShowInfo = useCallback(()=>{
    document.addEventListener('mousemove',getMousePosition);
    setShowInfo(true)
    
   },[getMousePosition])
   const handleHideInfo =useCallback(()=>{
        setShowInfo(false)
        document.removeEventListener('mousemove',getMousePosition)
   },[getMousePosition])
   
   const infoPosition =isMouseLeft ? { right:100} : { left:100};
  return (
    <Paper sx={{px:1.5,py:1,position:'relative'}} >
        <Link href='/' onMouseEnter={handleShowInfo} onMouseLeave={handleHideInfo} >
            <Image src='/images/product-icons/elementor.webp' height={70} width={70} alt='elementor' />
        </Link>
        <Paper  sx={{position:'absolute',bottom:0,zIndex:10,...infoPosition,display: showInfo ? 'block' : 'none'}}>
            <Box>
                <Image src='/images/products/elementor.webp' width={350} height={350} style={{objectFit:'contain'}} alt=''/>
            </Box>
            <Box sx={{p:2}}>
                <Typography variant='subtitle1' component='h2' mb={1}>افزونه صفحه ساز المنتور پرو | پلاگین Elementor Pro</Typography>
                <Typography variant='caption'>صفحه ساز Elementor حرفه ای ترین صفحه ساز وردپرس و یکی از بهترین راه ها برای طراحی و ساختن سایت وردپرس با طراحی جذاب است.</Typography>
            </Box>
            <Divider sx={{mt:1}}/>
            <Stack direction='row' justifyContent='space-between' sx={{p:2}}>
                 <Box display='flex' alignItems='center' gap={0.5}>
                     <Typography>21002 </Typography>
                     <Typography fontSize='small' color='text.secondary'>فروش</Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={0.5}>
                     <Typography>4.65 </Typography>
                     <AiFillStar style={{color:'orange'}}/>
                </Box>
                <Box display='flex' alignItems='center' gap={0.5}>
                     <Typography>299.000 </Typography>
                     <Typography fontSize='small' color='text.secondary'>تومان </Typography>
                </Box>
            </Stack>
        </Paper>
    </Paper>
  )
}

export default TabItem