import React from 'react';
import {
    Button,
    Picker,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import { getCategories } from '../constants/api';

export default class ExpenseScreen extends React.Component {
    categories = getCategories();

    constructor(props) {
        super(props);

        const { navigation } = this.props;

        const id = navigation.getParam('id', null);
        const name = navigation.getParam('name', null);
        const cost = navigation.getParam('cost', null) ? navigation.getParam('cost', null).toString() : null;
        const categoryId = navigation.getParam('categoryId', null);
        const date = navigation.getParam('date', null);

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
                            label={item.name}
                            value={item.id}>
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
