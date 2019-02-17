import { Category, Expense } from "./Model";
import { Period } from './Enums';

export const Categories: Category[] = [
    {
        CategoryId: 1,
        Name: 'Groceries',
        Budgeted: 100,
        BudgetPeriod: Period.Week,
        DefaultToNeed: true
    },
    {
        CategoryId: 2,
        Name: 'Entertainment',
        Budgeted: 50,
        BudgetPeriod: Period.Week,
        DefaultToNeed: false
    },
    {
        CategoryId: 3,
        Name: 'Rent',
        Budgeted: 250,
        BudgetPeriod: Period.Week,
        DefaultToNeed: true
    },
    {
        CategoryId: 4,
        Name: 'Fuel',
        Budgeted: 50,
        BudgetPeriod: Period.Month,
        DefaultToNeed: true
    },
    {
        CategoryId: 5,
        Name: 'Internet',
        Budgeted: 40,
        BudgetPeriod: Period.Month,
        DefaultToNeed: true
    },
    {
        CategoryId: 6,
        Name: 'Electricity',
        Budgeted: 150,
        BudgetPeriod: Period.Month,
        DefaultToNeed: true
    }
];

export const Expenses: Expense[] = [
    {
        ExpenseId: 1,
        CategoryId: 1,
        Description: 'Groceries',
        Cost: 22.32,
        Date: new Date(2019, 1, 15),
        IsNeed: true
    },
    {
        ExpenseId: 2,
        CategoryId: 1,
        Description: 'not beer ;) ;)',
        Cost: 45,
        Date: new Date(2019, 1, 23),
        IsNeed: false
    },
    {
        ExpenseId: 3,
        CategoryId: 3,
        Description: 'Rent',
        Cost: 1003.23,
        Date: new Date(2019, 1, 24),
        IsNeed: true
    },
    {
        ExpenseId: 4,
        CategoryId: 2,
        Description: 'drinks w/ Bri + Reilly',
        Cost: 25.44,
        Date: new Date(2019, 2, 1),
        IsNeed: false
    }
]