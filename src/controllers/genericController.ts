import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from 'src/database/data-source';

export const getAll =
  <T>(entity: { new (): T }) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const repo = AppDataSource.getRepository(entity);
      const data = await repo.find();
      res.json(data);
    } catch (error) {
      next(error);
    }
  };

export const getOne =
  <T>(entity: { new (): T }) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const repo = AppDataSource.getRepository(entity);
      const item = await repo.findOneBy({ id: Number(req.params.id) });
      res.json(item);
    } catch (error) {
      next(error);
    }
  };

export const createOne =
  <T>(entity: { new (): T }) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const repo = AppDataSource.getRepository(entity);
      const newItem = repo.create(req.body);
      const result = await repo.save(newItem);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

export const updateOne =
  <T>(entity: { new (): T }) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const repo = AppDataSource.getRepository(entity);
      await repo.update(req.params.id, req.body);
      const updated = await repo.findOneBy({ id: Number(req.params.id) });
      res.json(updated);
    } catch (error) {
      next(error);
    }
  };

export const deleteOne =
  <T>(entity: { new (): T }) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const repo = AppDataSource.getRepository(entity);
      await repo.delete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };
