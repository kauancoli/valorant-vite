import axios from 'axios';

const baseURL = 'https://valorant-api.com/v1/';

export const api = axios.create({
  baseURL: baseURL,
});

export const language = '?isPlayableCharacter=true&language=pt-BR';
