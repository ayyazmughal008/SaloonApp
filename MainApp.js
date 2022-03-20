import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavStack } from "./src/AuthNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <NavStack />
        </NavigationContainer>
    );
}