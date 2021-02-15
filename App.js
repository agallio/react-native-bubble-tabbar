import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Settings from './src/screens/Settings';

import TabButton from './src/components/TabButton';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderTopColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: (props) => <TabButton label="Home" {...props} />,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarButton: (props) => <TabButton label="About" {...props} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarButton: (props) => <TabButton label="Settings" {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
