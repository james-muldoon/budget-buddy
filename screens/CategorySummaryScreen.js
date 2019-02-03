import React from 'react';
import {
    Button,
    StyleSheet,
    View,
} from 'react-native';
import { getExpensesForCategory } from '../constants/api';
import { ExpenseSummaryTile } from '../components/ExpenseSummaryTile';
import { ScrollView } from 'react-native-gesture-handler';

export default class CategorySummaryScreen extends React.Component {

    constructor(props) {
        super(props);

        const { navigation } = this.props;
        const catId = navigation.getParam('categoryId', null);
        const expenses = getExpensesForCategory(catId);

        this.state = {
            selectedCategory: catId,
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
                    {this.state.expenses.map(function (item, i) {
                        return <ExpenseSummaryTile
                            key={item.id}
                            name={item.name}
                            amount={item.amount}
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
