import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  
  card: {
    paddingBottom:0,
    margin: '0px 2px',
    textAlign:"left"
  },  
  title: {
    fontSize: 14,
    color:'#0366d6',
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 16,
    marginTop:10,
    fontSize: 12,
  },
  language:{
    paddingBottom:'0px',
    marginBottom:'-6px',
    verticalAlign:'middle',
    fontSize:12
  },
  cardContent:{
    paddingBottom:'0px'
  },
  bullet: {
    height: '12px',
    width: '12px',
    backgroundColor: '#e16737',
    borderRadius: '50%',
    display: 'inline-block'
  },
  
});

export default function CardRepository(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} >
         {props.titulo}
        </Typography>       
        <Typography className={classes.pos} color="textSecondary">
        {props.conteudo}
        </Typography>
        <Typography className={classes.language}  color="textSecondary">
        <span className={classes.bullet}></span> {props.linguagem}
        </Typography>
      </CardContent>
    </Card>
  );
}
