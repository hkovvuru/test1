import { Router } from 'express';
import { UserExpenseController } from '../controllers';

const userexpenseRouter = new Router();

// Adding single user Expenses data
userexpenseRouter.post('/userExpenses/singleData', UserExpenseController.singleUserExpenses);

// Adding bulk users Expenses data
userexpenseRouter.post('/userExpenses/bulkData', UserExpenseController.bulkUserExpenses);

// getting all users total expenses details
userexpenseRouter.get('/userExpenses', UserExpenseController.totalUserExpense);

// users expenses on different items
userexpenseRouter.get('/userExpenses/items/:userId', UserExpenseController.totalItems);

export default userexpenseRouter;
