import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as Progress from 'react-native-progress';

export class PeriodSummary extends React.Component {

    render() {
        return <View style={{ alignItems: 'stretch', flex: 1, backgroundColor: 'lightgray', paddingBottom: '3%' }} >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.period}>January</Text>
            </View>
            <Progress.Bar
                indeterminate={false} // use this while waiting for calculation to come through?  
                style={{ marginLeft: '5%', marginTop: '5%', marginRight: '5%', marginBottom: '2%' }}
                progress={0.4}
                width={null} // null: scales with flexbox
                height={10}
                useNativeDriver={true} >
            </Progress.Bar>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.moneySpent}>$500 of $600</Text>
            </View>
        </View>
    }

}

const styles = StyleSheet.create({
    tile: {
        height: 100
    },
    period: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    moneySpent: {
        fontSize: 24
    },
    progressBar: {
        marginLeft: '10%',
        marginRight: '10%'
    }
});