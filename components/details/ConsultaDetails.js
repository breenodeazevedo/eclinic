import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ConsultaDetails = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ marginLeft: 20 }}>
                            <Title style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>BRENO AZEVEDO</Title>
                            <Caption style={styles.caption}>Profissão</Caption>
                        </View>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>Sala 01</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>john_doe@email.com</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBoxFull]}>
                        <Title>PSICOTERAPIA - PRESENCIAL</Title>
                        <Caption>Procedimento</Caption>
                    </View>
                </View>
                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox]}>
                        <Title>UNIMED</Title>
                        <Caption>Convênio</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>5/12</Title>
                        <Caption>Sessão</Caption>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="close-circle" color="#009387" size={25} />
                            <Text style={styles.menuItemText}>DESMARCAR</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="calendar" color="#009387" size={25} />
                            <Text style={styles.menuItemText}>CONFIRMAR</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="check-circle" color="#009387" size={25} />
                            <Text style={styles.menuItemText}>ATENDER</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="credit-card" color="#009387" size={25} />
                            <Text style={styles.menuItemText}>FATURAR</Text>
                        </View>
                    </TouchableRipple>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ConsultaDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoBoxFull: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});
