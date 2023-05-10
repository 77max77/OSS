import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function ReviewCard(props) {
  return (
    <Card sx={{ ml: 5, mr: 5, mb: 5, mt: 5 }}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid  item>
          <Avatar alt={props.usname} src="/static/images/avatar/1.jpg" />
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={0}>
            <Grid item>
              <Typography variant="body1">{props.usname}</Typography>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={0}>
                <Grid item>
                  <Rating
                    name="text-feedback"
                    value={props.rscore}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body2">{labels[props.rscore]}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body2">{props.text}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}