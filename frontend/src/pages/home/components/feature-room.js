import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { MuiThemeProvider } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import '../asset/css/service-grid.scss';

import IconCouch from '@mui/icons-material/Weekend'
import IconWifi from '@mui/icons-material/Wifi'
import IconCoffee from '@mui/icons-material/Coffee'
import IconKingBed from '@mui/icons-material/KingBed'
import IconAC from '@mui/icons-material/AcUnit'


const textcolor = "#1A1810";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


let theme =createMuiTheme();
theme = responsiveFontSizes(theme);


export default function FeatureRoom() {
    
    return (
    <div>
        
        <MuiThemeProvider theme={theme}>
        <Box sx={{ width: '90%' , position: "relative" , left: "50%", transform: "translateX(-50%)", }}>
            <div className="explore__container">
                <h1>
                    Feature Room
                </h1>
            </div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
            <Grid item xs={12} md={4} rowSpacing={1} height="100%" padding="1vh" component={Link} to='/ClubRoom' style={{textDecoration: 'none'}}>
            <Item >
                    <img width="100%" height='300vh' src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg' alt=''></img>
                    <Typography padding="2vh 0" variant="h4" component="div" textAlign="center" sx={{ flexGrow: 1 }} height="100px" color="#080808"> SUPERIOR TWIN ROOM</Typography>
                    <Typography padding="0 1vw" variant="body1" gutterBottom textAlign="left" color={textcolor} minHeight="35vh" maxHeight="70vh" paddingBottom="2vh">
                    Ideal for both business and leisure travellers, timeless luxury and functional amenities unite, all with a stunning view of the city.
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} height="40vh">
                        <Grid item xs={3}> <IconCouch style={{fontSize: "40px", color:"#080808"}} /> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >CLUB LOUNGE ACCESS</Typography>
                        </Grid>
                        <Grid item xs={3}> <IconKingBed style={{fontSize: "40px", color:"#080808"}} /> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >KING BED</Typography>
                        </Grid>
                        <Grid item xs={3}> <IconCoffee style={{fontSize: "40px", color:"#080808"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >BREAKFAST FOR 2 </Typography>
                        </Grid>
                        <Grid item xs={3}> <IconWifi style={{fontSize: "40px", color:"#080808"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >WIFI</Typography>
                        </Grid>
                        <Grid item xs={3}> <IconAC style={{fontSize: "40px", color:"#080808"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >AIR CONDITIONER</Typography>
                        </Grid>
                    </Grid>
                    <Box borderTop="1px solid #626262" sx={{ width: '100%', height:"5vh"}}>
                        <Typography color={textcolor} style={{position: "relative" , top: "50%", transform: "translateY(-50%)"}}>
                            38 SQUARE METER
                        </Typography>
                    </Box>
                    
            </Item>
            </Grid>
            <Grid item xs={12} md={4} rowSpacing={1} height="100%" padding="1vh" component={Link} to='/SuperiorRoom' style={{textDecoration: 'none'}} >
                <Item >
                    <img width="100%" height='300vh' src= 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill' alt=''></img>
                    <Typography padding="2vh 0" variant="h4" component="div" textAlign="center" sx={{ flexGrow: 1 }} height="100px" color="#080808"> SUPERIOR KING ROOM </Typography>
                    <Typography padding="0 1vw" variant="body1" gutterBottom textAlign="left" color={textcolor} minHeight="35vh" maxHeight="70vh" paddingBottom="2vh" >
                    Looking out across magnificent panoramic views of Saigon, this well-appointed 38 sqm room offers the perfect balance of privacy and luxury.
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} height="40vh" >
                        <Grid item xs={3}> <IconKingBed style={{fontSize: "40px", color:"#080808"}} /> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >KING BED</Typography>
                        </Grid>
                        
                        <Grid item xs={3}> <IconWifi style={{fontSize: "40px", color:"#080808"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >WIFI</Typography>
                        </Grid>
                        <Grid item xs={3}> <IconAC style={{fontSize: "40px", color:"#080808"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >AIR CONDITIONER</Typography>
                        </Grid>
                    </Grid>
                    <Box borderTop="1px solid #626262" sx={{ width: '100%', height:"5vh"}}>
                        <Typography color={textcolor} style={{position: "relative" , top: "50%", transform: "translateY(-50%)"}}>
                            38 SQUARE METER
                        </Typography>
                    </Box>
            </Item>
            </Grid>
            <Grid item xs={12} md={4} rowSpacing={1} height="100%" padding="1vh" component={Link} to='/DeluxeRoom' style={{textDecoration: 'none'}}>
                <Item >
                    <img width="100%" height='300vh' src= 'https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000' alt=''></img>
                    <Typography padding="2vh 0" variant="h4" component="div" textAlign="center" sx={{ flexGrow: 1 }} height="100px" color="#080808"> SUPERIOR PLUS KING ROOM</Typography>
                    <Typography padding="0 1vw" variant="body1" gutterBottom textAlign="left" color={textcolor} minHeight="35vh" maxHeight="70vh" paddingBottom="2vh" >
                    Superior Plus King rooms offer exclusive space to relax, along with stunning views of cosmopolitan Saigon.
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} height= "40vh">
                        <Grid item xs={3}> <IconKingBed style={{fontSize: "40px", color:"#080808"}} /> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >KING BED</Typography>
                        </Grid>
                        
                        <Grid item xs={3}> <IconWifi style={{fontSize: "40px", color:"#080808"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >WIFI</Typography>
                        </Grid>
                        <Grid item xs={3}> <IconAC style={{fontSize: "40px", color:"#080808"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >AIR CONDITIONER</Typography>
                        </Grid>
                    </Grid>
                    <Box borderTop="1px solid #626262" sx={{ width: '100%', height:"5vh"}}>
                        <Typography color={textcolor} style={{position: "relative" , top: "50%", transform: "translateY(-50%)"}}>
                            38 SQUARE METER
                        </Typography>
                    </Box>
                </Item>
            </Grid>
            
        </Grid>
        </Box>
        </MuiThemeProvider> 
    </div>
    
  );
}