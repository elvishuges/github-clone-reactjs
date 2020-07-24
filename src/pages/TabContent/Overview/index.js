import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



import CardRepository from './components/CardRepository'
import CardContributions from './components/CardContributions'

const useStyles = makeStyles({

  card: {
    paddingBottom:0,
    margin: '0px 2px',
    textAlign:"center",
  },
  cardContribution:{

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


export default function Overview({ children }) {

  const classes = useStyles();
  const repositoryContent =
    [{
      titulo: "React native", conteudo: "Este projeto tem como objetivo aprimorar conceitos do react native tais como style component e react redux", linguagem: "React native"
    }, { titulo: "React js", conteudo: "Projeto feito com o react cli para aprendizado", linguagem: 'react js' },
    { titulo: "Vuesj", conteudo: "Projeto feito com o vuejs", linguagem: 'vuejs' }]

  return (
    <Container >
      <Grid container spacing={1}>
        <Grid item xs={12} >
          <div style={{ float: 'left' ,fontSize:16 }}>Popular repositories</div>
          <div style={{ float: 'right',fontSize:13 }}>Customize your pins</div>
        </Grid>
        {repositoryContent
          .map((element) => (
            <Grid item xs={12} sm={6} md={6}>
              <CardRepository key={element.titulo} titulo={element.titulo} conteudo={element.conteudo} linguagem={element.linguagem} />
            </Grid>
          ))
        }
        <Grid item xs={12} style={{paddingTop:30}} >
          <div style={{ float: 'left' ,fontSize:16 }}>106 contributions in the last year</div>
          <div style={{ float: 'right',fontSize:13 }}>Contribution settings</div>
        </Grid>

        <Grid item xs={12}>
        <Card  className={classes.cardContribution} variant="outlined">
          <CardContributions/>
        </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
