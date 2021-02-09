import { Container, Content } from 'native-base';
import React, { Component } from 'react';
import { Alert, Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import { fetchConsultas } from '../api';
import { dateFormat, timeFormat } from '../helpers';

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
            .catch(error => Alert.alert('Ops', 'Houve um problema ao exibir suas consultas'));
    }

    render() {

        const LeftContent = props => <Avatar.Icon {...props} icon="calendar" backgroundColor={'#009387'} />
        const Bold = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

        return (
            <Container>
                <Content>
                    {
                        this.state.data.map((item, index) => (
                            <Card style={styles.card} key={index}>
                                <Card.Title title={item.paciente_nome} subtitle={item.convenio_nome} left={LeftContent} />
                                <Card.Content>
                                    <Paragraph><Bold>Data:</Bold> {dateFormat(item.data)}</Paragraph>
                                    <Paragraph><Bold>Hora:</Bold> {timeFormat(item.horaInicio)} às {timeFormat(item.horaFim)}</Paragraph>
                                    <Paragraph><Bold>Procedimento:</Bold> {item.procedimento_nome}</Paragraph>
                                    <Paragraph><Bold>Sala:</Bold> {item.sala_nome}</Paragraph>
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