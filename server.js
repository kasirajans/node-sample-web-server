const express=require('express');

var app=express();
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
// res.send("<h1>Ramya Rajan<h1><br>");
res.send({
name: 'kasi',
like:[
    'cricket',
    'travell'
]
});
});

app.get('/about',(req,res)=>{
res.send('About kasi')
});
app.listen(3000,()=>
{
    console.log('Server is up on port 3000');
});