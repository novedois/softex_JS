import express from 'express';
// import routes from './routes';

const app = express();
app.listen(3333, () => {
    console.log('Estou funcionando!');
});

app.get('/src', (request, response) => {
    return response.send('Hello world');
});
