import React from 'react';
import {
    Button,
    StyleSheet,
    View,
} from 'react-native';
import API from '../constants/ServiceLayer';
import { ExpenseSummaryTile } from '../components/ExpenseSummaryTile';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationScreenProp } from 'react-navigation';
import { Expense } from '../constants/Model';

export interface ICategorySummaryScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class CategorySummaryScreen extends React.Component<ICategorySummaryScreenProps, any> {

    constructor(props) {
        super(props);

        const { navigation } = this.props;
        const categoryId = navigation.getParam('categoryId', null);
        const expenses = API.getExpensesForCategory(categoryId);

        this.state = {
            selectedCategory: categoryId,
            expenses: expenses
        }
    }

    editExpense(item) {
        this.props.navigation.navigate('Expense', {
            id: item.id,
            name: item.name,
            cost: item.amount,
            categoryId: this.state.selectedCategory,
            date: item.date
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    {this.state.expenses.map(function (item: Expense, i) {
                        return <ExpenseSummaryTile
                            key={item.ExpenseId}
                            Description={item.Description}
                            Spent={item.Cost}
                            onPress={() => this.editExpense(item)}>
                        </ExpenseSummaryTile>
                    }, this)}

                    <Button
                        title='New Expense'
                        onPress={() => navigate('Expense', { categoryId: this.state.selectedCategory })} >

                    </Button>
                </ScrollView>


            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
