import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ConsultaCard from './cards/ConsultaCard';

const ConsultaScreen = ({ navigation }) => {

    return (
        <ScrollView style={styles.scrollView} horizontal={true}>
            <View style={styles.container}>

                <ConsultaCard />
            </View>
        </ScrollView>
    );
};

export default ConsultaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 7
    }
});