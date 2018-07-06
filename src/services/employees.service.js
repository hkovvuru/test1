
/**
 * Map salary
 */

const salaryMap = `function () {
    emit(this.salary,1);
}`;

/**
 * Reduce based on salary
 * @param keyMobileNo
 * @param valueSalary
 */
const salaryReduce = `function (salary, values) { 
    value = 0;
   for( i=0 ; i < values.length ; i++){
       value += values[i];
   }
       return value; 
}`;

// salary map reduce options
const salaryMROptions = {
    map: salaryMap,
    reduce: salaryReduce,
};


// Second mapReduce method

const nameMap = `function () {
    emit(this.firstName + " " + this.lastName, this.experience);
}`;

const nameReduce = `function (key, values) {
    
    if((values > 2) && (values < 6)){
   return values;
}
}`;

const nameMROptions = {
    map: nameMap,
    reduce: nameReduce,
};

const employeeService = {
    salaryMROptions,
    nameMROptions,
};

export default employeeService;
