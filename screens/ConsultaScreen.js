import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import ConsultaList from './lists/ConsultaList';
import { ScrollView } from 'react-native-gesture-handler';

const ConsultaScreen = ({ navigation }) => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                    <ConsultaList />
                    <ConsultaList />
                    <ConsultaList />
                </ScrollView>
            </View>
        </>
    );
};

export default ConsultaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});