import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Icon } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#DD1176',
  ...theme.typography.body2,
  justifyContent: 'center',
  color: 'white',
  marginTop: '30px',
  padding: '50px 30px 50px 30px',
  width: '50%',
  margin: '30px auto 30px auto'
}));

export default function Dashboard() {
  return (

    <Grid container sx={{ alignItems: 'center', textAlign: 'center' }}>
      <Grid item md={6} xs={12} >
        <Item> <Typography variant="p" gutterBottom sx={{ fontSize: '50px' }}> 5
          <Icon sx={{ fontSize: '40px' }}><RequestQuoteIcon sx={{ fill: '#fff' }} fontSize='inherit' /></Icon></Typography></Item>
      </Grid>
      <Grid item md={6} xs={4}>
        <Item><Typography variant="p" gutterBottom sx={{ fontSize: '50px' }}> 2<Icon sx={{ fontSize: '40px' }} ><PendingIcon sx={{ fill: '#fff' }} /></Icon></Typography></Item>
      </Grid>
      <Grid item xs={4} md={6}>
        <Item><Typography variant="p" gutterBottom sx={{ fontSize: '50px' }}> 3<Icon sx={{ fontSize: '40px' }} ><CheckCircleIcon sx={{ fill: '#fff' }} /></Icon></Typography></Item>
      </Grid>
      <Grid item xs={4} md={6}>
        <Item><Typography variant="p" gutterBottom sx={{ fontSize: '50px' }}>1<Icon sx={{ fontSize: '40px' }} ><CheckCircleIcon sx={{ fill: '#fff' }} /></Icon></Typography></Item>
      </Grid>
    </Grid>

  )
}
