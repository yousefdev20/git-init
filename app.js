const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log(`Application up in running on this port ${3000}`);
})

app.use('/', (req, res) => {
    console.log(req);
    res.status(200).send({name: "yousef"});
})
