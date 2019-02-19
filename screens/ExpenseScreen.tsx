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

export interface IExpenseScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

export default class ExpenseScreen extends React.Component<IExpenseScreenProps, any> {
    categories = API.getCategories();

    constructor(props) {
        super(props);

        const { navigation } = this.props;

        const id = navigation.getParam('ExpenseId', null);
        const name = navigation.getParam('Description', null);
        const cost = navigation.getParam('Cost', null) ? navigation.getParam('Cost', null).toString() : null;
        const categoryId = navigation.getParam('CategoryId', null);
        const date = navigation.getParam('Date', null);

        this.state = {
            id: id,
            name: name,
            cost: cost,
            selectedCategory: categoryId,
            date: date
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
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                    placeholder='Enter expense name...'
                    autoCorrect={true}>
                </TextInput>

                <Picker
                    selectedValue={this.state.selectedCategory} >
                    {this.categories.map(function (item, i) {
                        return <Picker.Item
                            key={i}
                            label={item.Name}
                            value={item.CategoryId}>
                        </Picker.Item>
                    })}
                </Picker>

                <TextInput
                    style={{}}
                    onChangeText={(text) => this.setState({ cost: text })}
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
