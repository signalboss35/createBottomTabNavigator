import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createAppContainer, createSwitchNavigator, StackActions, NavigationActions } from 'react-navigation';
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
      title: 'Home',

    },
  }
);

const SettingStack = createStackNavigator({
  Setting: {
    screen: SettingsScreen,
    params: { value: true },
    // navigationOptions: navigation => {
    //   if(navigation.navigation.state.routeName === "Setting"){
    //     console.log('on view setting screen');
    //   }
    //   return {
    //     title: 'Setting',
    //     headerTintColor: '#fff',
    //     headerStyle: {
    //       backgroundColor: '#0091EA',
    //     },
    //   };
    // },
    navigationOptions: navigation => {
      if(navigation.navigation.state.routeName === "Setting"){
      }
      return {
        title: 'Setting',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#0091EA',
        },
      };
    },

  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: profileScreen,
    navigationOptions: navigation => {
      return {
        title: 'Profile',
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
