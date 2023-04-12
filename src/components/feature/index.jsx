import { Box, Button, Container, Divider, Rating, Stack, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from "react-icons/bi";
const Feature = () => {
  return (
    <Box component='section' sx={{width:'100%',backgroundColor:'#4D4D4D',height:{xs:'100%',md:500},overflow:'hidden'}}>
        <Container maxWidth='lg'>
           
            <Box display='flex' gap={2} flexDirection={{xs:'column-reverse',md:'row'}} justifyContent='space-between' alignItems={{xs:'center',md:'flex-start'}}>
               <Box pt={{xs:0,md:8}}>
                <Image src='/images/products/padorin.webp' height={500} width={500} alt=''/>
               </Box>
               <Stack gap={2} py={8}>
                 <Link href='/'>
                    <Typography variant='h5' color='white'>افزونه حمل‌ونقل پادروپین | Shipping Plugin Podropin</Typography>
                 </Link>
                 <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography>امتیاز خریداران:3.29از7رای</Typography>
                    <Rating size='large' name="read-only" value={4} readOnly />
                 </Box>
                 <Box display='flex' justifyContent='space-between' alignItems='center' sx={{border:'3px solid',borderColor:theme=>theme.palette.grey[500],py:3,px:6}}>
                    <Box display='flex' alignItems='center' gap={2}>
                     <BiShoppingBag size="50px"/>
                     <Stack alignItems='center'>
                        <Typography component='span' variant='h4'>1338</Typography>
                        <Typography component='span'>دانلود</Typography>
                     </Stack>
                    </Box>
                    <Divider orientation='vertical' flexItem sx={{borderWidth:'3px',border:'3px dashed',borderColor:theme=>theme.palette.grey[500]}}/>
                    <Typography variant='h4' color='white'>رایگان</Typography>
                 </Box>
                 <Button variant='contained' color='primary' fullWidth sx={{height:50}}>مشاهده محصول</Button>
               </Stack>
            </Box>
        </Container>
    </Box>
  )
}

export default Feature