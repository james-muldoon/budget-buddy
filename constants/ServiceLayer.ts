import { AsyncStorage } from 'react-native';
import { Category, PeriodSummaryView, Expense, CategorySummary } from './Model';
import { Month, Period } from './Enums';
import { Categories, Expenses } from './TestData';

export default class API {

    static async storeData(item) {
        try {
            await AsyncStorage.setItem('TESTKEY', item);
        } catch (error) {
            console.log(error);
        }
    }

    static async retrieveData() {
        try {
            const value = await AsyncStorage.getItem('TESTKEY');
            if (value !== null) {
                console.log(value);
            }
        } catch (error) {
            console.log(error);
        }
    };


    static getPeriodSummaryViews(): PeriodSummaryView[] {
        let views: PeriodSummaryView[] = [
            {
                Name: 'week',
                Title: 'Week',
                Subtitle: 'TODO - week date range',
                Period: Period.Week
                // new Date(year, month, dayOfMonth - dayOfWeek).toString() + new Date(year, month, start.getDate() + 7).toString()
            },
            {
                Name: 'month',
                Title: 'Month',
                Subtitle: Month[new Date().getMonth()],
                Period: Period.Month
            },
            {
                Name: 'year',
                Title: 'Year',
                Subtitle: new Date().getFullYear().toString(),
                Period: Period.Year
            }
        ];

        return views;
    }

    static getCategories(): Category[] {
        return Categories;
    }

    static getExpensesForCategory(categoryId: number, filterPeriod?: Period, filterDate?: Date): Expense[] {
        return Expenses.filter(function (e) {
            let inDateRange: boolean = filterDate ? this.isDateInPeriod(filterPeriod, filterDate, e.CategoryId) : true;
            return inDateRange && e.CategoryId === categoryId;
        })
    }

    static isDateInPeriod(filterPeriod: Period, filterDate: Date, expenseDate: Date): boolean {
        let year: number = filterDate.getFullYear();
        let month: number = filterDate.getMonth();
        let dayOfMonth: number = filterDate.getDate();
        let dayOfWeek: number = filterDate.getDay();

        let start: Date, end: Date;

        switch (filterPeriod) {
            case Period.Day:
                start = new Date(year, month, dayOfMonth);
                end = new Date(year, month, dayOfMonth + 1);
                break;
            case Period.Week:
                start = new Date(year, month, dayOfMonth - dayOfWeek);
                end = new Date(year, month, start.getDate() + 7);
                break;
            // TODO: implement logic for fortnight. Need a "start week" 
            // case 'fortnight':
            //     start = new Date(year, month, dayOfMonth - dayOfWeek);
            //     end = new Date(year, month, start.getDate() + 14);
            case Period.Month:
                start = new Date(year, month, 1);
                end = new Date(year, month + 1, 1);
                break;
            case Period.Year:
                start = new Date(filterDate.getFullYear(), 0, 1);
                end = new Date(filterDate.getFullYear() + 1, 0, 1);
                break;
        }
        return start <= expenseDate && expenseDate < end;
    }

    static getCategorySummariesByPeriod(filterPeriod: Period, filterDate: Date): CategorySummary[] {
        var self = this;

        let categories: Category[] = Categories.slice();
        let categorySummaries: CategorySummary[] = [];

        categories.forEach((category: Category) => {
            let summary: CategorySummary = new CategorySummary();
            summary.CategoryId = category.CategoryId;
            summary.Name = category.Name;
            summary.Budgeted = category.Budgeted;
            summary.BudgetPeriod = category.BudgetPeriod;
            summary.DefaultToNeed = category.DefaultToNeed;

            summary.Spent = Expenses.filter(function (e) {
                return e.CategoryId == category.CategoryId
                    && self.isDateInPeriod(filterPeriod, filterDate, e.Date)
            }).reduce(function (acc, e) {
                return acc + e.Cost;
            }, 0);

            categorySummaries.push(summary);
        });

        return categorySummaries;
    }
}
