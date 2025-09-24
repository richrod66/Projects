// Create a class to do the calculations
class ExpensesCalculator{
       
    constructor(expenses){
        this.expenses = expenses;
        this.totalExpense = 0;
        this.largestExpense = expenses[0];
        this.lowestExpense = expenses[0];
    }

    calculateTotalExpenses(expenses) {
        this.expenses.forEach(expense => { 
                this.totalExpense += expense

            //check for largest and lowest expenses
            if (expense > this.largestExpense){
                this.largestExpense = expense;
            } else if (expense < this.lowestExpense){
                this.lowestExpense = expense;
            }

            let temp = 0 

        });

        return this.totalExpense;
    }
}

let expenses = Array.from([67.53, 32.50, 78.82,120.73,73.29])
const expenseCalculation = new ExpensesCalculator(expenses)

console.log("Total Expenses: " , expenses)
console.log("Total Expense: " , expenseCalculation.calculateTotalExpenses())
console.log("Largest Expenses: " , expenseCalculation.largestExpense)
console.log("Lowest Expenses: " , expenseCalculation.lowestExpense)



