let salaries = {
    'Mike':1500,
    'Bob': 1800,
    'Nikola': 1700,
};

function maxSalary(salaries) {
   const arraySalary = Object.entries(salaries);
   let maxSalar = arraySalary.reduce((max, [employee, salary]) => salary > max.salary ? { employee, salary } : max, { employee: '', salary: 0 }).employee;
   return maxSalar
}

console.log(maxSalary(salaries));