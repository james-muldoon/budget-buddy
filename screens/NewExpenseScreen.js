import React from 'react';
import {
    Button,
    Picker,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import { getCategories } from '../constants/api';

export default class NewExpenseScreen extends React.Component {
    categories = getCategories();

    constructor(props) {
        super(props);

        const { navigation } = this.props;
        const catId = navigation.getParam('categoryId', null);

        this.state = {
            expenseName: null,
            cost: null,
            selectedCategory: catId
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
                    onChangeText={(text) => this.setState({ expenseName: text })}
                    value={this.state.expenseName}
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
