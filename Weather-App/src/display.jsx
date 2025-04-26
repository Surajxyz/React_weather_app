import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



export default function Display({rep}){

    const URL="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   
    return (

        <div>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={URL}
            alt="Weather Parameters"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <div>{rep.city}</div>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <div>Temperature: {rep.temp}&deg;C</div>
              <div>Humidity: {rep.humidity}</div>
              <div>Maximum Temperature: {rep.temp_max}&deg;C</div>
              <div>Minimum Temperature: {rep.temp_min}&deg;C</div>
              <div>Description: Weather is {rep.discription}</div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    );
}