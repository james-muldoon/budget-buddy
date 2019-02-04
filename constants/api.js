


const getCategories = () => {
    return Categories;
}

const getExpensesForCategory = (categoryId) => {
    return Expenses.filter(function (e) {
        return e.categoryId === categoryId;
    })
}

const getCategorySummariesByPeriod = (period) => {
    var summaries = Categories;

    summaries.forEach(element => {
        element.spent = Expenses.filter(function (e) {
            return e.categoryId == element.id; // TODO: also filter by the period 
        }).reduce(function (acc, e) {
            return acc + e.amount;            
        }, 0);

    });
    return summaries;
}



const periods = {
    'day': 1,
    'week': 7,
    'fortnight': 14,
    'month': 30, // TODO might need a more graceful way to handle months ,
    'quarter': 90,
    'year': 365
}




module.exports = {
    getCategories,
    getExpensesForCategory,
    getCategorySummariesByPeriod
}




Expenses = [
    {
        id: 1,
        categoryId: 1,
        name: 'Groceries',
        amount: 22.32,
        date: new Date(2019, 1, 31)
    },
    {
        id: 2,
        categoryId: 1,
        name: 'not beer ;) ;)',
        amount: 2.1,
        date: new Date(2019, 1, 28)
    },
    {
        id: 3,
        categoryId: 3,
        name: 'Rent',
        amount: 1003.23,
        date: new Date(2019, 1, 27)
    },
    {
        id: 4,
        categoryId: 2,
        name: 'drinks w/ Bri + Reilly',
        amount: 25.44,
        date: new Date(2019, 2, 1)
    }
]



Categories = [
    {
        id: 1,
        name: 'Groceries',
        budgeted: 100,
        period: periods.week
    },
    {
        id: 2,
        name: 'Entertainment',
        budgeted: 50,
        period: periods.week
    },
    {
        id: 3,
        name: 'Rent',
        budgeted: 250,
        period: periods.week
    },
    {
        id: 4,
        name: 'Fuel',
        budgeted: 50,
        period: periods.month
    },
    {
        id: 5,
        name: 'Internet',
        budgeted: 40,
        period: periods.month
    },
    {
        id: 6,
        name: 'Electricity',
        budgeted: 150,
        period: periods.quarter
    }
]