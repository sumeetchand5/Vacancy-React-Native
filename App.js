import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import VaccancyScreen from "./src/screens/VaccancyScreen";
import TopNavigation from "./src/components/TopNavigation";
import BottomNavigationCom from "./src/components/BottomNavigation";
import { ApplicationProvider, Layout, Text,Input,IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react' ;
import {View} from 'react-native';



const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Vaccancy : VaccancyScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App"
        }
    }
);

//export default createAppContainer(navigator);

export default () => (
    <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <VaccancyScreen/>
                <BottomNavigationCom/>
            </Layout>
        </ApplicationProvider>
    </>

);
