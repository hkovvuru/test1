import { UserExpenseData } from '../model';
import { UserExpenseService } from '../services';

/**
 * Adding single user Expenses
 * @param req
 * @param res
 * @return void
*/
const singleUserExpenses = async (req, res) => {
    try {
        res.status(200).json(await UserExpenseData.create(req.body));
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Adding bulk user expenses
 * @param  req
 * @param  res
 * @return void
 */
const bulkUserExpenses = async (req, res) => {
    try {
        res.status(200).json(await UserExpenseData.insertMany(req.body));
    } catch (err) {
        res.status(500).send(err);
    }
};


/**
 * getting the all expenses data
 * @param req
 * @param res
 * @return void
 */
const totalUserExpense = async (req, res) => {
    try {
        res.status(200).json(await UserExpenseData.find(req.body));
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * getting particular user expenses
 * @param req
 * @param res
 * @return void
 */
const totalItems = (req, res) => {
    UserExpenseService.userExpenseMROptions.query = `{ "userId": ${req.params.userId} }`;
    UserExpenseData.mapReduce(UserExpenseService.userExpenseMROptions).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).send(err);
    });
};

const UserExpenseController = {
    singleUserExpenses,
    bulkUserExpenses,
    totalUserExpense,
    totalItems,
};

export default UserExpenseController;
