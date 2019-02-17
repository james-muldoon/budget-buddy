import { Period } from './Enums';

export class Category {
    CategoryId: number;
    Name: string;
    Budgeted: number;
    BudgetPeriod: Period;
    DefaultToNeed: boolean;
    // StartDate: Date; // for temporal values 
    // EndDate: Date;
}

export class CategorySummary extends Category {
    Spent: number;
}

export class Expense {
    ExpenseId: number;
    CategoryId: number;
    Description: string;
    Cost: number;
    Date: Date;
    IsNeed: boolean;
}

export class PeriodSummaryView {
    Name: string;
    Title: string;
    Subtitle: string;
    // Date: Date;
}
