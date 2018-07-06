import { Employee } from '../model';
import { employeeService } from '../services';

/*
 * Add a new employee
 * @param req
 * @param res
 * @return void
 */
const addEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body.employee);
    try {
        res.status(201).json(await newEmployee.save());
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Add bulk employees
 * @param req
 * @param res
 * @return void
 */
const addBulkEmployees = async (req, res) => {
    const bulkEmployees = req.body.employees;
    try {
        res.status(201).json(await Employee.insertMany(bulkEmployees));
    } catch (err) {
        res.status(500).send(err);
    }
};


const totalCount = (req, res) => {
    Employee.mapReduce(employeeService.salaryMROptions)
        .then((data) => {
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).send(err);
        });
};

const name = (req, res) => {
    Employee.mapReduce(employeeService.nameMROptions)
        .then((data) => {
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).send(err);
        });
};

const EmployeeController = {
    addEmployee,
    addBulkEmployees,
    totalCount,
    name,
};

export default EmployeeController;
