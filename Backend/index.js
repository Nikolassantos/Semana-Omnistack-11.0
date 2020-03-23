const express = require('express')

const app = express();

app.get('/', (request , response) =>{
  return response.json({
    evento:'Semana Omnitack 11.0',
    aluno:'Nikolas Santos'
  })
});


app.listen(3333);