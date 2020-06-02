import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.json([
        'Leonardo',
        'Raquel',
        'Ivson',
        'jorge',
        'Lucas'
    ]);
});

app.listen(8000);

