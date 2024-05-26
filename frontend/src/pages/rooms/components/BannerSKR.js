import Box from '@material-ui/core/Box'
import { Card, CardMedia, Typography } from '@material-ui/core';
import ImageBanner from '../imagesSKR/king.jpg'

export default function Banner() {
    return (
            <Card>
                <Box sx={{ position: 'relative' , height: 900}}>
                    <CardMedia
                        component="img"
                        image={ImageBanner}
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
                        <Typography variant="h3">Rooms</Typography>
                        <Typography variant="h1">Superior King Rooms</Typography>
                    </Box>
                </Box>
            </Card>

    );
}