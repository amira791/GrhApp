import { Grid, GridItem } from "@chakra-ui/react";
import {Outlet }from 'react-router-dom'
import TopNavBar from '../ui/TopNavBar'
import SideBar from '../ui/SideBar'

export default function MainLayout() {
  return (
    <Grid  templateColumns="repeat(7,1fr)" bg="whiteAlpha.200">
      <GridItem as="aside"
        colSpan="1"
        w="270px"
        maxH="100vw"
        overflowY="hidden"
        overflowX="auto"
        position="sticky"
      >
        <SideBar/>
      </GridItem>
      <GridItem
        as="main"
        colSpan="6"
      >
        <TopNavBar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}