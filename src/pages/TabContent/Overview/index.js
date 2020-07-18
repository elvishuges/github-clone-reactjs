import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CardRepository from './components/CardRepository'

export default function Overview({ children }) {
  
  const repositoryContent = 
  [{titulo:"React native", conteudo:"Projeto feito com o react cli para arendizado",linguagem: "React native"
  },{ titulo:"React js",conteudo:  "Projeto feito com o react cli para aprendizado",linguagem:'react js'},
  {titulo:"Vuesj",conteudo:"Projeto feito com o vuejs",linguagem:'vuejs' }]

  return (
    <Container >
      <Grid container spacing={1}>
        <Grid item xs={12} >        
          <div style={{ float: 'left'}}>Popular repositories</div>
          <div style={{float: 'right'}}>Customize your pins</div>                
        </Grid>
        {repositoryContent
            .map((element)=> (
              <Grid item xs={6}>
                <CardRepository titulo={element.titulo} conteudo={element.conteudo} linguagem={element.linguagem} />
              </Grid>
            ))
            }
      </Grid>
    </Container>   
  );
}
