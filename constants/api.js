import { AsyncStorage } from 'react-native';

_storeData = async (item) => {
    try {
        await AsyncStorage.setItem('TESTKEY', item);
    } catch (error) {
        console.log(error);
    }
}

_retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('TESTKEY');
        if (value !== null) {
            console.log(value);
        }
    } catch (error) {
        console.log(error);
    }
};


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


const getCategories = () => {
    return Categories;
}

getSummaryViews = () => {
    return [
        {
            period: 'week',
            title: 'Week',
            subtitle: 'TODO - week date range'//new Date(year, month, dayOfMonth - dayOfWeek).toString() + new Date(year, month, start.getDate() + 7).toString()
        },
        {
            period: 'month',
            title: 'Month',
            subtitle: monthNames[new Date().getMonth()]
        },
        {
            period: 'year',
            title: 'Year',
            subtitle: new Date().getFullYear()
        }
    ]
}

// filterPeriod and filterDate are optional
const getExpensesForCategory = (categoryId, filterPeriod, filterDate) => {
    return Expenses.filter(function (e) {
        inDateRange = filterDate ? isDateInPeriod(filterPeriod, filterDate, e.categoryId) : true;
        return inDateRange && e.categoryId === categoryId;
    })
}

const getCategorySummariesByPeriod = (filterPeriod, filterDate) => {
    var summaries = Categories.slice();

    summaries.forEach(element => {
        element.spent = Expenses.filter(function (e) {
            return e.categoryId == element.id
                && isDateInPeriod(filterPeriod, filterDate, e.date)
        }).reduce(function (acc, e) {
            return acc + e.amount;
        }, 0);
    });
    return summaries;
}

const isDateInPeriod = (filterPeriod, filterDate, expenseDate) => {
    year = filterDate.getFullYear();
    month = filterDate.getMonth();
    dayOfMonth = filterDate.getDate();
    dayOfWeek = filterDate.getDay();

    switch (filterPeriod) {  
        case 'day':
            start = new Date(year, month, dayOfMonth);
            end = new Date(year, month, dayOfMonth + 1);
            break;
        case 'week':
            start = new Date(year, month, dayOfMonth - dayOfWeek);
            end = new Date(year, month, start.getDate() + 7);
            break;
        // TODO: implement logic for fortnight. Need a "start week" 
        // case 'fortnight':
        //     start = new Date(year, month, dayOfMonth - dayOfWeek);
        //     end = new Date(year, month, start.getDate() + 14);
        case 'month':
            start = new Date(year, month, 1); 
            end = new Date(year, month + 1, 1);
            break;
        case 'year':
            start = new Date(filterDate.getFullYear(), 0, 1);
            end = new Date(filterDate.getFullYear() + 1, 0, 1);
            break;
    }
    return start <= expenseDate && expenseDate < end;
}

const getSummaryPeriods = () => {
    return [
        'week',
        'month',
        'year'
    ];
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
    getSummaryViews,
    getCategories,
    getExpensesForCategory,
    getSummaryPeriods,
    getCategorySummariesByPeriod,
    _storeData,
    _retrieveData
}




Expenses = [
    {
        id: 1,
        categoryId: 1,
        name: 'Groceries',
        amount: 22.32,
        date: new Date(2019, 1, 15)
    },
    {
        id: 2,
        categoryId: 1,
        name: 'not beer ;) ;)',
        amount: 45,
        date: new Date(2019, 1, 23)
    },
    {
        id: 3,
        categoryId: 3,
        name: 'Rent',
        amount: 1003.23,
        date: new Date(2019, 1, 24)
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