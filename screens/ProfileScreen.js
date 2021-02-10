import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {

    const Bold = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

    const [entity, setEntity] = React.useState();

    const initialProfileState = {
        isLoading: true
      };

    const loginReducer = (prevState, action) => {
        switch( action.type ) {
          case 'ENTITY': 
            return {
              ...prevState,
              isLoading: false,
            };
        }
      };

    const [profileState, dispatch] = React.useReducer(loginReducer, initialProfileState); 

    useEffect(() => {
        setTimeout(async() => {
          let entity;
          entity = null;
          let data;
          data = [];
          try {
            entity = await AsyncStorage.getItem('entity');
            data = JSON.parse(entity);
            setEntity(data.data);
            dispatch({ type: 'ENTITY' });
          } catch(e) {
            console.log(e);
          }          
        }, 1000);
      }, []);

    if (profileState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color='009387' />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={{ uri: "https://www.kindpng.com/picc/b/136/1369892.png" }} style={styles.image} resizeMode="center"></Image>
                    </View>
                    <View style={styles.add}>

                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{entity.nome}</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{entity.codigo}</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8" }]} >
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Consultas Cadastradas</Text>
                    </View>
                </View>
                <View style={styles.statsContainer}>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8" }]} >
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Realizadas</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8" }]} >
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Agendadas</Text>
                    </View>
                </View>
                <View style={styles.statsContainer}>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8" }]} >
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Pacientes</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8" }]} >
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
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}><Bold>Contato:</Bold> <Text style={{ fontWeight: "400" }}>{entity.contatoCelular}</Text></Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}><Bold>Email:</Bold> <Text style={{ fontWeight: "400" }}>{entity.email}</Text> </Text>
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
        justifyContent: 'center'
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
    statsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 16
    },
    statsBox: {
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