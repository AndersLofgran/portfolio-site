import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import flyFPV_preview from '../../assets/flyFPV_preview.png'
import './Portfolio.css'

const useStyles = makeStyles({
  root: {
    height: 550,
    maxWidth: 350,
    margin: 20
  },
  media: {
    height: 350,
  },
});

export default function Portfolio() {
  const classes = useStyles();
  const projects = [
    {title: 'flyFPV - eCommerce Website', desc: 'An site for FPV/Drone hobbyists to browse and buy parts or share their builds with the FPV community.', img: flyFPV_preview},
    {title: 'group thing here', desc: 'such an amazing group project', img: ''},
    {title: 'myBG - Save Your Favorite Board Games', desc: '', img: ''}
  ]

  let projectCards = projects.map(project => {
    return  <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={project.img}
                  title="Site preview and description."
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2"> {project.title} </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"> {project.desc} </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href='https://github.com/AndersLofgran/portfolio-site' target='_blank'> Source Code </Button>
                <Button size="small" color="primary" href='http://167.172.119.254:4499/#/' target='_blank'> Site </Button>
                <Button size="small" color="primary" > Preview </Button>
              </CardActions>
            </Card>
  })
  
  return (
    <div className='cards' >
      {projectCards}
    </div>
  )
}
