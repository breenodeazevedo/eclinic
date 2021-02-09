import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Content, List, ListItem } from 'native-base';
import React, { Component } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';

import { fetchConsultas, getToken } from '../../components/api';

export default class ConsultaCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }

    componentDidMount() {
        fetchConsultas()
            .then(response => {
                if (response.data.length !== 0) {
                    this.setState({
                        isLoading: false,
                        data: response.data
                    });
                }
            })
            .catch(error => Alert.alert('Ops'));
    }

    render() {

        const LeftContent = props => <Avatar.Icon {...props} icon="calendar" backgroundColor={'#009387'} />

        return (
            <Container>
                <Content>
                    {
                        this.state.data.map((item, index) => (
                            <Card style={styles.card} key={index}>
                                <Card.Title title={item.paciente_nome} subtitle={item.convenio_nome} left={LeftContent} />
                                <Card.Content>
                                    <Paragraph>Data: {item.data}</Paragraph>
                                    <Paragraph>Hora: {item.horaInicio} às {item.horaFim}</Paragraph>
                                    <Paragraph>Procedimento: {item.procedimento_nome}</Paragraph>
                                    <Paragraph>Sala: {item.sala_nome}</Paragraph>
                                </Card.Content>
                                <Card.Actions style={styles.actions}>
                                    <Button mode="outlined" color={'#009387'}>Ver</Button>
                                </Card.Actions>
                            </Card>
                        ))
                    }
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 7
    },
    actions: {
        alignSelf: 'center'
    },
    button: {
        color: '#009387'
    }
});