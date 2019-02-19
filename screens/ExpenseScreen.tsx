import React from 'react';
import {
    Button,
    Picker,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import API from '../constants/ServiceLayer';
import { NavigationScreenProp } from 'react-navigation';
import { Category } from '../constants/Model';

export interface IExpenseScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class ExpenseScreen extends React.Component<IExpenseScreenProps, any> {
    categories = API.getCategories();

    constructor(props) {
        super(props);

        const { navigation } = this.props;
        // TODO investigate efficiency of passing all props, or only passing id and fetching info from backend 
        const ExpenseId: number = navigation.getParam('ExpenseId', null);
        const Description: string = navigation.getParam('Description', null);
        const Cost: number = navigation.getParam('Cost', null) ? navigation.getParam('Cost', null).toString() : null;
        const CategoryId: number = navigation.getParam('CategoryId', null);
        const ExpenseDate: Date = navigation.getParam('Date', null);

        this.state = {
            ExpenseId: ExpenseId,
            Name: Description,
            Cost: Cost,
            SelectedCategory: CategoryId,
            ExpenseDate: ExpenseDate
        }
    }

    saveExpense = () => {
        // TODO implement code to save expense
        this.props.navigation.navigate('Home');
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{}}
                    onChangeText={(text) => this.setState({ Name: text })}
                    value={this.state.Name}
                    placeholder='Enter expense name...'
                    autoCorrect={true}>
                </TextInput>

                <Picker
                    selectedValue={this.state.SelectedCategory} >
                    {this.categories.map(function (item: Category, i) {
                        return <Picker.Item
                            key={i}
                            label={item.Name}
                            value={item.CategoryId}>
                        </Picker.Item>
                    })}
                </Picker>

                <TextInput
                    style={{}}
                    onChangeText={(text) => this.setState({ Cost: text })}
                    value={this.state.cost}
                    placeholder='Amount...'
                    autoCorrect={true}
                    keyboardType='number-pad'>
                </TextInput>

                {
                    // TOOD add date selector 
                }

                <Button
                    onPress={this.saveExpense}
                    title='Save'>
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
