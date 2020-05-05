import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabConfig,
} from '@gorhom/animated-tabbar';
import HomeSVG from './TabIcons/HomeSVG';
import ProfileSVG from './TabIcons/ProfileSVG';
import HomeScreen from '../Screens/Home';
import ProfileScreen from '../Screens/Profile';
import LikeSVG from './TabIcons/LikesSVG';
import SearchSVG from './TabIcons/SearchSVG';
import Routes from './Routes';
import LikesScreen from '../Screens/Likes';
import SearchScreen from '../Screens/Search';
import {SCREEN_HEIGHT} from '../Constants';
import Colors from '../Constants/Colors';

const Tab = createBottomTabNavigator();

const tabs: TabsConfig<BubbleTabConfig> = {
  [Routes.HOME_SCREEN]: {
    labelStyle: {
      color: 'white', //'#5B37B7',
    },
    icon: {
      component: HomeSVG,
      activeColor: 'white', //'rgba(91,55,183,1)',
      inactiveColor: 'white', //'rgba(0,0,0,1)',
    },
    background: {
      activeColor: Colors.primary, //'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  [Routes.LIKES_SCREEN]: {
    labelStyle: {
      color: 'white', //'#C9379D',
    },
    icon: {
      component: LikeSVG,
      activeColor: 'white', //'rgba(201,55,157,1)',
      inactiveColor: 'white', //'rgba(0,0,0,1)',
    },
    background: {
      activeColor: Colors.primary, //'rgba(247,215,243,1)',
      inactiveColor: 'rgba(247,215,243,0)',
    },
  },
  [Routes.SEARCH_SCREEN]: {
    labelStyle: {
      color: 'white', //'#E6A919',
    },
    icon: {
      component: SearchSVG,
      activeColor: 'white', //'rgba(230,169,25,1)',
      inactiveColor: 'white', //'rgba(0,0,0,1)',
    },
    background: {
      activeColor: Colors.primary, //'rgba(251,239,211,1)',
      inactiveColor: 'rgba(251,239,211,0)',
    },
  },
  [Routes.PROFILE_SCREEN]: {
    labelStyle: {
      color: 'white', //'#1194AA',
    },
    icon: {
      component: ProfileSVG,
      activeColor: 'white', //'rgba(17,148,170,1)',
      inactiveColor: 'white', //'rgba(0,0,0,1)',
    },
    background: {
      activeColor: Colors.primary, //'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

export default () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <AnimatedTabBar
          style={{
            height: SCREEN_HEIGHT * 0.11,
            backgroundColor: Colors.secondary,
          }}
          iconSize={20}
          duration={750}
          tabs={tabs}
          {...props}
        />
      )}>
      <Tab.Screen
        name={Routes.HOME_SCREEN}
        // initialParams={{
        //   backgroundColor: tabs.Home.labelStyle.color,
        // }}
        component={HomeScreen}
      />

      <Tab.Screen
        name={Routes.SEARCH_SCREEN}
        //   initialParams={{
        //     backgroundColor: tabs.Search.labelStyle.color,
        //   }}
        component={SearchScreen}
      />
      <Tab.Screen
        name={Routes.LIKES_SCREEN}
        //   initialParams={{
        //     backgroundColor: tabs.Likes.labelStyle.color,
        //   }}
        component={LikesScreen}
      />
      <Tab.Screen
        name={Routes.PROFILE_SCREEN}
        // initialParams={{
        //   backgroundColor: tabs.Profile.labelStyle.color,
        // }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
