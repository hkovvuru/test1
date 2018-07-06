import { Router } from 'express';
import userRouter from './user.route';
import employeeRouter from './employee.route';
import userexpenseRouter from './user.expense.route';

const router = new Router();

// merging all routers and exporting
router.use(userRouter);
router.use(employeeRouter);
router.use(userexpenseRouter);

export default router;
