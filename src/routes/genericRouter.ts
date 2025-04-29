import { Router } from 'express';
import {
  getAll,
  createOne,
  deleteOne,
  updateOne,
  getOne,
} from 'src/controllers/genericController';

const genericRouter = <T>(entity: { new (): T }) => {
  const router = Router();

  router.get('/', getAll(entity));
  router.get('/:id', getOne(entity));
  router.post('/', createOne(entity));
  router.put('/:id', updateOne(entity));
  router.delete('/:id', deleteOne(entity));

  return router;
};

export default genericRouter;