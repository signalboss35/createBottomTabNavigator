import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import HomeScreen from './components/homeScreen';
import SettingsScreen from './components/settingScreen';
import profileScreen from './components/profileScreen';
import TabBar from './components/tabBar';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
     
    },
  }
);
// const HomeStack = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: navigation => {
//       return {
//         title: 'HOME',
//         headerTintColor: '#fff',
//         headerStyle: {
//           backgroundColor: '#0091EA',
//         },
//       };
//     },
//   }
// });

const SettingStack = createStackNavigator({
  Home: {
    screen: SettingsScreen,
    params:{value: true},
    navigationOptions: navigation => {
      return {
        title: 'SETTING',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#0091EA',
        },
      };
    },
  }
});

const ProfileStack = createStackNavigator({
  Home: {
    screen: profileScreen,
    navigationOptions: navigation => {
      return {
        title: 'PROFILE',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#0091EA',
        },
      };
    },
  }
});

const App = createBottomTabNavigator(
{
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 15 }}>HOME</Text>,
    }
  },
  Setting: {
    screen: SettingStack,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 15 }}>SETTING</Text>,
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 15 }}>PROFILE</Text>,
    }
  },
},
{
  tabBarComponent: props => <TabBar {...props} />,
  tabBarOptions: {
    tabFeatured: 'Insert',
    backgroundFeaturedIcon: '#FFF',
    activeFeaturedTintColor: '#FFF',
    inactiveFeatureTintColor: '#E1E3DB',
    showLabel: true,
    backgroundColor: 'yellow',
    activeTintColor: '#42619b',
    inactiveTintColor: '#E1E3DB',
    style: {
      ...Platform.select({
        ios: {
          ...ifIphoneX(
            {
              height: 105,
            },
            {
              height: 65,
            },
          ),
        },
        android: {
          height: 50,
        },
      }),
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#F2F3EF',
    },
    tabStyle: {},
  }
}
);


export default createAppContainer(App);
