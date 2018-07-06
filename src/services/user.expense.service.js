
const map = `function () {
    for (var index = 0; index < this.expense.length; index++) {
        emit(this.expense[index].type, this.expense[index].amount);
    }
}`;

const reduce = `function (type, amounts) {
    var value = { totalSpent: 0 };
    for (var index = 0; index < amounts.length; index++) {
        value.totalSpent += amounts[index];
    }
    return value;
}`;

const userExpenseMROptions = {
    map,
    reduce,
};

const UserExpenseService = {
    userExpenseMROptions,
};

export default UserExpenseService;
