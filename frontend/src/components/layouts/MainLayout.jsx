import { Grid, GridItem } from "@chakra-ui/react";
import {Outlet }from 'react-router-dom'
import TopNavBar from '../ui/TopNavBar'
import SideBar from '../ui/SideBar'

export default function MainLayout() {
  return (
    <Grid w="100%" templateColumns="repeat(6,1fr)" bg="gray.50">
      <GridItem as="aside"
        colSpan="1"
        rowSpan="auto"
      
      >
        <SideBar/>
      </GridItem>
      <GridItem
        as="main"
        colSpan="5"
      >
        <TopNavBar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}