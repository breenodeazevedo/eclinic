import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    
    const Bold = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={{ uri: "https://www.kindpng.com/picc/b/136/1369892.png" }} style={styles.image} resizeMode="center"></Image>
                    </View>
                    <View style={styles.add}>
                        {/* <MaterialIcons
                            name="verified-user"
                            color="black"
                            size={48}
                            color="#DFD8C8"
                            style={{ marginTop: 6, marginLeft: 2 }}
                        /> */}
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Julie</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Developer</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={[ styles.statsBox, { borderColor: "#DFD8C8"} ]} >
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Consultas Cadastradas</Text>
                    </View>
                </View>
                <View style={styles.statsContainer}>
                    <View style={[ styles.statsBox, { borderColor: "#DFD8C8"} ]} >
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Realizadas</Text>
                    </View>
                    <View style={[ styles.statsBox, { borderColor: "#DFD8C8"} ]} >
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Agendadas</Text>
                    </View>
                </View>
                <View style={styles.statsContainer}>
                    <View style={[ styles.statsBox, { borderColor: "#DFD8C8"} ]} >
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Pacientes</Text>
                    </View>
                    <View style={[ styles.statsBox, { borderColor: "#DFD8C8"} ]} >
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Convênios</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32 }}></View>

                <Text style={[styles.subText, styles.recent]}>Informações Pessoais</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}><Bold>Profissão:</Bold> <Text style={{ fontWeight: "400" }}>089638889XXX</Text></Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}><Bold>Email:</Bold> <Text style={{ fontWeight: "400" }}>andi@mail.com</Text> </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        marginTop: 5
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    infoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 16
    },
    statsContainer:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 16
    },
    statsBox:{
        alignItems: 'center',
        flex: 1
    },
    subText: {
        fontSize: 12,
        color: '#AEB5BC',
        textTransform: 'capitalize',
        fontWeight: '500'
    }
});