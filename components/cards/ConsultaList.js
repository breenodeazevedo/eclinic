import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';
import { dateFormat, timeFormat } from '../helpers';
import { useNavigation } from '@react-navigation/native';

const ConsultaList = (props) => {

  const list = ({ consultas }) => {

    if (consultas) {

      return consultas.map((item) => {

        const Bold = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

        const navigation = useNavigation();

        return (
          <ListItem key={item.id} avatar onPress={() => navigation.navigate('ConsultaScreen', {item: 1}) }>
            <Left>
              <Thumbnail source={{ uri: "https://www.kindpng.com/picc/b/136/1369892.png" }} />
            </Left>
            <Body>
              <Text>{`${item.paciente_nome}`}</Text>
              <Text note><Bold>Data:</Bold> {dateFormat(item.data)} - {timeFormat(item.horaInicio)} às {timeFormat(item.horaFim)}</Text>
              <Text note><Bold>Procedimento:</Bold> {item.procedimento_nome}</Text>
              <Text note><Bold>Sala:</Bold> {item.sala_nome}</Text>
            </Body>
            <Right style={{ justifyContent: 'center' }}>
              <Icon name="eye" style={{ paddingRight: 5, fontSize: 30, color: "#009387" }} />
            </Right>
          </ListItem>
        )
      })
    }
  }

  return (
    <Container>
      <Content>
        <List>
          {list(props)}
        </List>
      </Content>
    </Container>
  )
}

export default ConsultaList;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});