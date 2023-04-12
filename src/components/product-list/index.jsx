import { Box, Button, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <Box component='section' sx={{width:'100%'}}>
      <Container maxWidth='xl'>
      <Stack >
        <Box display="flex" flexDirection={{xs:'column',sm:'row'}} alignItems='start' justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={2}>
            <Image
              src="/images/product-icons/elementor.webp"
              width={50}
              height={50}
              alt=""
            />
            <Stack>
              <Typography fontWeight="bold" variant={{xs:'h6',md:'h5'}} component="h3">
                برترین افزودنی های المنتور
              </Typography>
              <Typography
                variant={{xs:'h6',md:'h5'}}
                fontWeight='regular'
                color="text.secondary"
                component="h3"
              >
                The Best Elementor Plugins
              </Typography>
            </Stack>
          </Box>
          <Box display='flex' alignItems='center'gap={0.5} >
            <Button sx={{color:'text.secondary'}} size="small" variant="text">پرفروش ترین</Button>
             <Divider flexItem orientation="vertical" sx={{height:'25px'}}/>
            <Button sx={{color:'text.secondary'}} size="small" variant="text"> آخرین بروزرسانی ها</Button>
          </Box>
        </Box>
        <Grid container mt={3} spacing={5}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductItem/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductItem/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductItem/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductItem/>
          </Grid>
        </Grid>
        <Button sx={{marginInline:'auto',marginTop:5,backgroundColor:theme=>theme.palette.grey[300],'&:hover':{backgroundColor:theme=>theme.palette.grey[400]},color:'text.primary'}} variant="contained" size="large">مشاهده همه</Button>
      </Stack>
      </Container>
    </Box>
  );
};

export default ProductList;
