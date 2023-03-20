const app = require('./src/app/bootstrap')

app.listen(3000, () => {
    console.log(`Application up in running on this port ${3000}`);
})

app.get('/', (req, res) => {
    res.status(200).send({name: "yousef"});
})

app.get('/404', (req, res) => {
    console.log('404');
    res.status(200).send("<h1>404 Page not found!</h1>");
})
