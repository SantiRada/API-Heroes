import { Router } from 'express';

export const comicRouter = Router();

comicRouter.get('/', (req, res) => {
    res.json({ message: "Listado de Comics" });
})

comicRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    res.json({ message: `Encontré el ID ${id} en los Comics` });
})