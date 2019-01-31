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

    constructor(props) {
        super(props);

        const {navigation} = this.props;
        const ename = navigation.getParam('name', null);

        this.state = {
            expenseName: ename,
            categories: getCategories(),
            cost: null
        }
    }

    saveExpense = () => {
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

                <Picker>
                    {this.state.categories.map(function (item, i) {
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

                <Button onPress={this.saveExpense}
                    title='Save'
                    ></Button>
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
