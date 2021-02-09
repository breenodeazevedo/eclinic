import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const API_URL = 'https://evolvecomsaude.com/api';

export async function getToken() {
    const value = await AsyncStorage.getItem('userToken');
    if (value !== null) {
        return value;
    }
    return null
}

export async function fetchConsultas() {
    const appToken = await getToken();
    const headers = {
        'Authorization': `Bearer ${appToken}`
    }
    const resposta = axios({
        "method": 'get',
        "url": `${API_URL}/consultas/all`,
        "headers": headers
    });

    return resposta
}

export function login(email, password) {
    const body = { email, password }
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
    const resposta = axios({
        "method": 'post',
        "url": `${API_URL}/auth/login`,
        "headers": headers,
        "data": body
    });

    return resposta
}

export function fetchInfos(email) {
    const body = { email }
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
    const resposta = axios({
        "method": 'post',
        "url": `${API_URL}/auth/login`,
        "headers": headers,
        "data": body
    });

    return resposta
}
