import { Router } from 'express';
import { readJSON } from '../const.js';

const heroes = readJSON('./json/heroes.json');

export const heroRouter = Router();

heroRouter.get('/', (req, res) => {
    res.json(heroes);
})

heroRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    const hero = heroes.find(h => h.id == id);

    if(hero == null){
        res.status(404).json({ message: 'Hero Not Found' });
        return;
    }

    res.status(200).json(hero);
})