import express from 'express';

const app = express();

const PORT = process.env.PORT ?? 3005;

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.get('/heroes', (req, res) => {
    res.json({ message: "Listado de Heroes" });
})

app.listen(PORT, () => {
    console.log(`Server en http://localhost:${PORT}`);
});