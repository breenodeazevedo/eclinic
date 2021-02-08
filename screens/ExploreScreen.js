import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExploreScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
        </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});