import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as Progress from 'react-native-progress';

export interface IPeriodSummaryProps {
    Title: string;
    Subtitle: string;
    Spent: number;
    Budgeted: number;
}

export class PeriodSummary extends React.Component<IPeriodSummaryProps, any> {

    constructor(props) {
        super(props);

        this.state = {
            percentageComplete: this.getPercentageComplete(),
        }
    }

    getPercentageComplete() {
        let result: number = this.props.Spent / this.props.Budgeted; // confirm division is being done as floating point
        return (result > 1.0 ? 1.0 : result);
    }

    render() {
        return <View style={{ alignItems: 'stretch', flex: 1, backgroundColor: 'lightgray', paddingBottom: '3%' }} >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: '2%' }}>
                <Text style={styles.title}>{this.props.Title}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.subtitle}>{this.props.Subtitle}</Text>
            </View>
            <Progress.Bar
                indeterminate={false}  
                style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', marginBottom: '2%' }}
                progress={this.state.percentageComplete}
                width={null} // null: scales with flexbox
                height={10}
                useNativeDriver={true} >
            </Progress.Bar>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.moneySpent}>${this.props.Spent} of ${this.props.Budgeted}</Text>
            </View>
        </View>
    }

}

const styles = StyleSheet.create({
    tile: {
        height: 100
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 14,
        fontStyle: 'italic'
    },
    moneySpent: {
        fontSize: 24
    },
    progressBar: {
        marginLeft: '10%',
        marginRight: '10%'
    }
});