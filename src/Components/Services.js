import React from 'react';
import { Box, Typography } from '@mui/material';
import ServiceComponent from './ServiceComponent';
export default function Services() {
  return (
    <Box margin={'80px 80px'} border={'2px solid green'}>
      <Box border={"2px solid brown"}>
        <Typography variant='h2'>What Can We Do For You</Typography>
        <Typography variant='subtitle1'>A Web and Mobile application Development Company specializing in Digital Automation for small and medium businesses.</Typography>
      </Box>
      <Box border={"2px solid  darkblue"} display={"flex"} justifyContent={"space-between"}>
        <ServiceComponent  title='CRM Application Serevices' description="We help you develop custom CRM for your business to automate your business processes, email integration, invoicing and payment integrations, and complete end to end automation for your busines"/>
        <ServiceComponent/>
        <ServiceComponent/>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <ServiceComponent/>
        <ServiceComponent/>
        <ServiceComponent/>
      </Box>
    </Box>
  );
}

