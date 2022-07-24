
const express = require('express');
const {PrismaClient}= require('@prisma/client')
const app   = express();
const prisma=new PrismaClient()
async function main(){
  console.log(1)
  console.log(2)
  const data= await prisma.FINDMANY()  
}
main()


/*app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/id', (req, res) => {
    res.send('1');
  });
app.listen(3000, () => console.log('server is running in port 3000'));*/