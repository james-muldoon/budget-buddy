import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import { CategorySummaryTile } from '../components/CategorySummaryTile';
import { PeriodSummary } from '../components/PeriodSummary';
import API from '../constants/ServiceLayer';
import Swiper from 'react-native-swiper';
import { NavigationScreenProp } from 'react-navigation';
import { CategorySummary, PeriodSummaryView } from '../constants/Model';

export interface IHomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class HomeScreen extends React.Component<IHomeScreenProps, any> {

  constructor(props) {
    super(props);

    let views: PeriodSummaryView[] = API.getPeriodSummaryViews();
    views.forEach((view: PeriodSummaryView) => {
      view.CategorySummaries = API.getCategorySummariesByPeriod(view.Period, new Date());
      view.TotalSpent = this.sumAmounts('Spent', view.CategorySummaries);
      view.TotalBudgeted = this.sumAmounts('Budgeted', view.CategorySummaries);
    });

    this.state = {
      views: views
    }
  }

  sumAmounts(fieldName: string, categories: CategorySummary[]) {
    var sum = 0;
    categories.forEach((x: CategorySummary) => {
      sum += x[fieldName];
    });
    return sum;
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Swiper>
        {this.state.views.map(function (view: PeriodSummaryView, i: number) {
          return <View style={styles.container} key={`View${i}`}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

              <PeriodSummary
                Title={view.Title}
                Subtitle={view.Subtitle}
                Spent={view.TotalSpent}
                Budgeted={view.TotalBudgeted}>
              </PeriodSummary>

              {view.CategorySummaries.map(function (item: CategorySummary, j: number) {
                return <CategorySummaryTile
                  key={`CategorySummary${j}`}
                  Category={item.Name}
                  Spent={item.Spent}
                  Budgeted={item.Budgeted}
                  onPress={() => navigate('CategorySummary', { categoryId: item.CategoryId })}>
                </CategorySummaryTile>
              })}

            </ScrollView>
          </View>
        })}
      </Swiper>
    );
  }


}


const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        // shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
    alignSelf: 'stretch'
  }
});
