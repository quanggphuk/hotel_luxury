import Box from '@material-ui/core/Box'
import MainBanner from '../img/mainBanner.jpg'
import { Card, CardMedia, Typography } from '@material-ui/core';



export default function Banner() {
    return (
            <Card>
                <Box sx={{ position: 'relative' , height: 900}}>
                    <CardMedia
                        component="img"
                        image={MainBanner}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: "30%",
                            left: "5%",
                            width: '100%',
                            color: 'white',
                            padding: '10px',
                            textAlign: 'left'
                        }}
                    >
                        <Typography variant="h3">ROOMS</Typography>
                        <Typography variant="h1">Hotel Rooms</Typography>
                    </Box>
                </Box>
            </Card>

    );
}