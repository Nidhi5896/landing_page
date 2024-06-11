
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Card, CardContent, Typography , Box } from '@mui/material';

export default function(){
    return(

      <Grid container justifyContent = 'center' spacing={4} >
        <Grid item lg = {3}>
            <Box>

            </Box>

        </Grid>

        <Grid item lg = {3}>
        <p>hey</p>
        </Grid>
        <Grid item lg = {3}>
        <p>hey</p>
        </Grid>
      </Grid>

     
        
    //     <Grid container spacing={6}  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',paddingTop:'120px',paddingLeft:'200px',paddingRight:'200px' }}>
    //   <Grid item xs={3.5} >
    //     <Card sx={{ width: '100%', height: '400px',backgroundColor:'lightgrey',borderRadius:'20px' }}>
    //       <CardContent>
    //         <Typography variant="h6">Card 1</Typography>
    //         <Typography>This is the content of Card 1.</Typography>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    //   <Grid item xs={3.5}>
    //     <Card sx={{ width: '100%', height: '400px' ,backgroundColor:'lightgrey',borderRadius:'20px' }}>
    //       <CardContent>
    //         <Typography variant="h6">Card 2</Typography>
    //         <Typography>This is the content of Card 2.</Typography>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    //   <Grid item xs={3.5}>
    //     <Card sx={{ width: '100%', height: '400px' ,backgroundColor:'lightgrey',borderRadius:'20px' }}>
    //       <CardContent>
    //         <Typography variant="h6">Card 3</Typography>
    //         <Typography>This is the content of Card 3.</Typography>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </Grid>
        
    )
}