import { Box, Button, ButtonGroup, Container, Divider, Stack } from "@mui/material";
import React from "react";
import TabList from "./TabList";

const Tabs = () => {
  return (
   <Container component='section' maxWidth='xl'>
    
      <Stack alignItems="center" >
        <ButtonGroup
          sx={{
           
            "& .MuiButtonBase-root": { py: 1.5, px: 3 },
          }}
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button  sx={{color:'text.primary',borderColor:theme=>theme.palette.grey[300],borderWidth:'2px','&:hover':{borderColor:theme=>theme.palette.grey[300],borderWidth:'2px',backgroundColor:theme=>theme.palette.grey[100]}}}>پرفروش ترین </Button>

          <Button sx={{color:'text.primary',borderColor:theme=>theme.palette.grey[300],borderWidth:'2px','&:hover':{borderColor:theme=>theme.palette.grey[300],borderWidth:'2px',backgroundColor:theme=>theme.palette.grey[100]}}}>جدیدترین</Button>
          <Button sx={{color:'text.primary',borderColor:theme=>theme.palette.grey[300],borderWidth:'2px','&:hover':{borderColor:theme=>theme.palette.grey[300],borderWidth:'2px',backgroundColor:theme=>theme.palette.grey[100]}}}>آخرین بروزرسانی ها</Button>
          <Button sx={{color:'text.primary',borderColor:theme=>theme.palette.grey[300],borderWidth:'2px','&:hover':{borderColor:theme=>theme.palette.grey[300],borderWidth:'2px',backgroundColor:theme=>theme.palette.grey[100]}}}>تخفیف</Button>
        </ButtonGroup>
        <TabList/>
      </Stack>
   </Container>
  );
};

export default Tabs;
