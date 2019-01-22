import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export class CategorySummaryTile extends React.Component {

    render() {
        return <View>
            <View style={styles.tile} >
                <Text style={styles.categoryName}>Groceries</Text>
                <Text style={styles.amounts}>
                    Budgeted | Spent
            </Text>

            </View>
        </View>
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
        borderWidth: 1
    },
    categoryName: {
        fontSize: 20,
        flex: 5
    },
    amounts: {
        flex: 3,
        fontSize: 18
    }
});