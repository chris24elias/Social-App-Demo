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
import SearchScreen from '../Screens/SearchScreen';

const Tab = createBottomTabNavigator();

const tabs: TabsConfig<BubbleTabConfig> = {
  [Routes.HOME_SCREEN]: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HomeSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  [Routes.LIKES_SCREEN]: {
    labelStyle: {
      color: '#C9379D',
    },
    icon: {
      component: LikeSVG,
      activeColor: 'rgba(201,55,157,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(247,215,243,1)',
      inactiveColor: 'rgba(247,215,243,0)',
    },
  },
  [Routes.SEARCH_SCREEN]: {
    labelStyle: {
      color: '#E6A919',
    },
    icon: {
      component: SearchSVG,
      activeColor: 'rgba(230,169,25,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(251,239,211,1)',
      inactiveColor: 'rgba(251,239,211,0)',
    },
  },
  [Routes.PROFILE_SCREEN]: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: ProfileSVG,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

export default () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <AnimatedTabBar iconSize={20} duration={750} tabs={tabs} {...props} />
      )}>
      <Tab.Screen
        name={Routes.HOME_SCREEN}
        // initialParams={{
        //   backgroundColor: tabs.Home.labelStyle.color,
        // }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={Routes.LIKES_SCREEN}
        //   initialParams={{
        //     backgroundColor: tabs.Likes.labelStyle.color,
        //   }}
        component={LikesScreen}
      />
      <Tab.Screen
        name={Routes.SEARCH_SCREEN}
        //   initialParams={{
        //     backgroundColor: tabs.Search.labelStyle.color,
        //   }}
        component={SearchScreen}
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
