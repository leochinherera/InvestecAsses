import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import userDetails from "../userDetails"
import ShowDetail from "../ShowDetail";
import lastScreen from "../lastScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={userDetails}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ShowDetail} />
        <Stack.Screen name="Exit" component={lastScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




export default AppNavigator;