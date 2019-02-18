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

export interface ICategorySummaryScreenProps {
    Navigation: NavigationScreenProp<any, any>;
}

export default class CategorySummaryScreen extends React.Component<ICategorySummaryScreenProps, any> {

    constructor(props) {
        super(props);

        const { Navigation } = this.props;
        const categoryId = Navigation.getParam('categoryId', null);
        const expenses = API.getExpensesForCategory(categoryId);

        this.state = {
            selectedCategory: categoryId,
            expenses: expenses
        }
    }

    editExpense(item) {
        this.props.Navigation.navigate('Expense', {
            id: item.id,
            name: item.name,
            cost: item.amount,
            categoryId: this.state.selectedCategory,
            date: item.date
        });
    }

    render() {
        const { navigate } = this.props.Navigation;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    {this.state.expenses.map(function (item, i) {
                        return <ExpenseSummaryTile
                            key={item.id}
                            Description={item.name}
                            Spent={item.amount}
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
