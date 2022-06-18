const express=require('express');
const app=express();
const port=process.env.PORT || 8000;
const cors=require('cors');
app.use(cors());

app.get('/',(req,res)=>{
    const data=require('./src/data.json');
    var min=1;
    var max=Object.keys(data).length;
    var diff=max-min;
    var rand=Math.random();
    rand=Math.floor(rand*diff);
    rand=rand+min;
    var x=""+rand;
    var link=data[x];
    res.send(
        {
            "img":link
        }
    )
});

app.listen(port);