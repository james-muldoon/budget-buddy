import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export interface ICategorySummaryTile {
    Category: string;
    Spent?: number;
    Budgeted: number;
    onPress: () => void;
}

export class CategorySummaryTile extends React.Component<ICategorySummaryTile, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <TouchableOpacity onPress={this.props.onPress}>
            <View style={styles.tile}>
                <Text style={styles.category}>{this.props.Category}</Text>
                <Text style={styles.amounts}>
                    {this.props.Spent ? '$' + this.props.Spent : ''} / ${this.props.Budgeted}
                </Text>
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
    category: {
        fontSize: 20,
        flex: 5
    },
    amounts: {
        flex: 3,
        fontSize: 18
    }
});