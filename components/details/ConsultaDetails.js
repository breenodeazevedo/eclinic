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

const ConsultaDetails = ({route, navigation}) => {

    const { item } = route.params;
    console.log(item);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 20 }}>
                            <Title style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>{item.paciente_nome}</Title>
                            <Caption style={styles.caption}>Profissão</Caption>
                        </View>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>{item.sala_nome}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBoxFull]}>
                        <Title>{item.procedimento_nome}</Title>
                        <Caption>PROCEDIMENTO</Caption>
                    </View>
                </View>
                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox]}>
                        <Title>{item.convenio_nome}</Title>
                        <Caption>CONVÊNIO</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>5/12</Title>
                        <Caption>STATUS</Caption>
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
                    <TouchableRipple onPress={() => navigation.goBack()}>
                        <View style={styles.menuItem}>
                            <Icon name="back" color="#009387" size={25} />
                            <Text style={styles.menuItemText}>VOLTA</Text>
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
