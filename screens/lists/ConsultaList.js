import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { fetchConsultas } from '../../components/api';

export default class ConsultaList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null
        }
    }

    componentDidMount() {
        fetchConsultas()
            .then(data => this.setState({
                isLoading: false,
                data: data.data
            }))
            .catch(error => Alert.alert('Ops'));
    }

    render() {

        const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

        console.log(this.state.data);

        return (
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});