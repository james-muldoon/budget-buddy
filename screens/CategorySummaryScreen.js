import React from 'react';
import {
    Button,
    Picker,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import { getExpensesForCategory, getCategories } from '../constants/api';

export default class CategorySummaryScreen extends React.Component {

    constructor(props) {
        super(props);

        const { navigation } = this.props;
        const catId = navigation.getParam('categoryId', null);

        const expenses = getExpensesForCategory(catId);
        const categories = getCategories();

        this.state = {
            selectedCategory: catId,
            expenses: expenses,
            categories: categories
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button 
                title='New Expense'
                onPress={() => navigate('NewExpense', { categoryId: this.state.selectedCategory })} >

                </Button>
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
