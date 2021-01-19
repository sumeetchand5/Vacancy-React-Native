import React from "react";
import {Text, StyleSheet, Button, TouchableOpacity, View} from "react-native";
import {ApplicationProvider, Layout} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

const HomeScreen = ({navigation: {navigate}}) => {

    return <View>
        <Text style={styles.text}>Hello</Text>
        <Button
            title='Component Screen'
            onPress={() => navigate('Component')}
        />
        <TouchableOpacity onPress={() => console.log('List Pressed')}>
            <Text>Goto List Demo</Text>
        </TouchableOpacity>
        <Button
            title = 'Opportunities'
            onPress={() =>navigate('Vaccancy')}
        />
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
});

export default HomeScreen;


