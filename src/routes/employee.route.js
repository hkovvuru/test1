import { Router } from 'express';
import { EmployeeController } from '../controllers';

const employeeRouter = new Router();

// Add a new employee
employeeRouter.post('/employees', EmployeeController.addEmployee);

// Add bulk employees
employeeRouter.post('/employees/bulk', EmployeeController.addBulkEmployees);

// count of salary of employee
employeeRouter.get('/employees/totalCount', EmployeeController.totalCount);

// count of name of employee
employeeRouter.get('/employees/name', EmployeeController.name);


export default employeeRouter;
