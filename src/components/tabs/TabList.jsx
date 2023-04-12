import { Stack } from '@mui/material'
import React from 'react'
import TabItem from './TabItem'

const TabList = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' flexWrap='wrap' gap={2} mt={5} >
        <TabItem/>
        <TabItem/>
        <TabItem/>
        <TabItem/>
        <TabItem/>
        <TabItem/>
        <TabItem/>
        <TabItem/>
        <TabItem/>
        <TabItem/>
        <TabItem/>
        <TabItem/>
       
    </Stack>
  )
}

export default TabList