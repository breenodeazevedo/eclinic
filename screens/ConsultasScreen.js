import React, { Component } from 'react';
import { StyleSheet, ScrollView, Alert, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { fetchConsultas } from '../components/api';
import ConsultaList from '../components/cards/ConsultaList';

export default class ConsultasScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            consultas: []
        }
    }

    componentDidMount() {
        fetchConsultas()
            .then(response => {
                if (response.data.length !== 0) {
                    this.setState({
                        isLoading: false,
                        consultas: response.data
                    });
                }
            })
            .catch(error => Alert.alert('Ops', 'Houve um problema ao exibir suas consultas'));
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color='009387' />
                </View>
            );
        }

        return (
            <ScrollView style={styles.container} horizontal={true} >
                <View>
                <ConsultaList
                    consultas={this.state.consultas}
                />
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});