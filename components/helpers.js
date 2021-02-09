import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { Text } from 'react-native';
import Moment from 'moment';

export function dateFormat(date) {
    return dayjs(date).format('DD/MM/YYYY');
}

export function timeFormat(time){
    Moment.locale('pt-br');
    return <Text>{Moment(time, 'HH:mm').format('HH:mm')}</Text>
}

