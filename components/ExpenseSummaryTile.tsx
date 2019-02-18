import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export interface IExpenseSummaryTileProps {
    Description: string;
    Spent: number;
    Date?: Date;
    onPress: () => void;
    
}

export class ExpenseSummaryTile extends React.Component<IExpenseSummaryTileProps, any> {

    render() {
        return (
        <TouchableOpacity onPress={this.props.onPress}>
            <View style={styles.tile}>
                <Text style={styles.name}>{this.props.Description}</Text>
                <Text style={styles.amount}>{this.props.Spent}</Text>
            </View>
        </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    tile: {
        flex: 1,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderColor: '#c9d2e0',
        borderWidth: 1,
        height: 50 // TODO remove hardcoded height
    },
    name: {
        fontSize: 20,
        flex: 5
    },
    amount: {
        flex: 3,
        fontSize: 18
    }
});