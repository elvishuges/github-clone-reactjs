import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  
  card: {
    paddingBottom:1
  },
  cardContent:{
    paddingBottom:0
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
  
});

export default function CardRepository() {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} ogutterBottom>
        React js
        </Typography>       
        <Typography className={classes.pos} color="textSecondary">
        sualizar e comentar sobre determinado produto.
        </Typography>
        <Typography className={classes.language} color="textSecondary">
          oii
        </Typography>
      </CardContent>
    </Card>
  );
}
