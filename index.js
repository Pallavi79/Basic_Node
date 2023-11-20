const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send('About Us Page');
  });

app.listen(3002, ()=>{
    console.log(`Successfully started the server`);
    //Logger.info("Successfully started the server",{});

});