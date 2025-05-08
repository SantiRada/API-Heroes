import { Router } from 'express';

export const actorRouter = Router();

actorRouter.get('/', (req, res) => {
    res.json({ message: "Listado de Actores" });
})

actorRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    res.json({ message: `Encontré el ID ${id} en Actores` });
})