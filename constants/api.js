


const getCategories = () => {
    return Categories;
}

const getExpensesForCategory = (categoryId) => {
    return Expenses.filter(function (e) {
        return e.categoryId === categoryId;
    })
}








module.exports = {
    getCategories,
    getExpensesForCategory
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
        spent: 70
    },
    {
        id: 2,
        name: 'Entertainment',
        budgeted: 50,
        spent: 23
    },
    {
        id: 3,
        name: 'Rent',
        budgeted: 250,
        spent: 250
    },
    {
        id: 4,
        name: 'Fuel',
        budgeted: 50,
        spent: 24
    },
    {
        id: 5,
        name: 'Internet',
        budgeted: 23,
        spent: 46
    },
    {
        id: 6,
        name: 'Electricity',
        budgeted: 50,
        spent: 67
    }
]