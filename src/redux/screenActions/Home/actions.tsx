import {
  LIST_POKEMON_FAILED,
  LIST_POKEMON_REQ,
  LIST_POKEMON_SUCCESS,
  LIST_POKEMON_DATA_SUCCESS,
  LIST_POKEMON_TYPE_SUCCESS,
  LIST_POKEMON_TYPE_FAILED,
  LIST_POKEMON_TYPE_REQ,
  LIST_POKEMON_TYPE_LIST_REQ,
  LIST_POKEMON_TYPE_LIST_SUCCESS,
  LIST_POKEMON_TYPE_LIST_FAILED
} from './type';
import { API } from './../../../utils/api';

import { IPoke, IPokeResponse } from './../../../type/type'

export type ArrayType = (number | string)[];
export const getPokemonList = (offset: number = 0,) => async (dispatch: any) => {
  dispatch({ type: LIST_POKEMON_REQ });
  try {
   
    API.get(`pokemon?offset=${offset}&limit=5`)
      .then(response => response )
      .then(data => {
        dispatch({ type: LIST_POKEMON_DATA_SUCCESS, payload: data });
        let results = data.results;
        let promisesArray = results.map((result) => {
          return API.get(result.url).then(response => response);
        })
        return Promise.all(promisesArray);
      }).then((data) => dispatch({ type: LIST_POKEMON_SUCCESS, payload: data }));

  } catch (err) {
    dispatch({ type: LIST_POKEMON_FAILED, payload: err.response });
  }
};

export const getPokemonType = () => async (dispatch: any) => {
  dispatch({ type: LIST_POKEMON_TYPE_REQ });
  try {
    const response = await API.get(`type`);
    dispatch({ type: LIST_POKEMON_TYPE_SUCCESS, payload: response.results });
  } catch (err) {
    dispatch({ type: LIST_POKEMON_TYPE_FAILED, payload: err.response });
  }
};

export const getPokemonListPaging = (url: string,) => async (dispatch: any) => {
  dispatch({ type: LIST_POKEMON_REQ });
  try {
   
    API.get(`${url}`)
      .then(response => response )
      .then(data => {
        dispatch({ type: LIST_POKEMON_DATA_SUCCESS, payload: data });
        let results = data.results;
        let promisesArray = results.map((result) => {
          return API.get(result.url).then(response => response);
        })
        return Promise.all(promisesArray);
      }).then((data) => dispatch({ type: LIST_POKEMON_SUCCESS, payload: data }));

  } catch (err) {
    dispatch({ type: LIST_POKEMON_FAILED, payload: err.response });
  }
};

export const getPokemonListType = (url: string) => async (dispatch: any) => {
  dispatch({ type: LIST_POKEMON_TYPE_LIST_REQ });
  try {
    API.get(`${url}`)
      .then(response => response )
      .then(data => {
       
        let results = data.pokemon;
        let promisesArray = results.map(async(result) => {
          const response = await API.get(result.pokemon.url);
          return response;
        })
        return Promise.all(promisesArray);
      }).then((data) => dispatch({ type: LIST_POKEMON_TYPE_LIST_SUCCESS, payload: data }));

  } catch (err) {
    dispatch({ type: LIST_POKEMON_TYPE_LIST_FAILED, payload: err.response });
  }
};
