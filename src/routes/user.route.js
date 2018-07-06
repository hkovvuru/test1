import { Router } from 'express';
import { UserController } from '../controllers';

const userRouter = new Router();

// Get all Users
userRouter.get('/users', UserController.getUsers);

// Get one user by cuid
userRouter.get('/users/:cuid', UserController.getUser);

// Add a new user
userRouter.post('/users', UserController.addUser);

// Update a user by cuid
userRouter.put('/users/:cuid', UserController.updateUser);

// Delete a user by cuid
userRouter.delete('/users/:cuid', UserController.removeUser);

export default userRouter;
