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
import INITIAL_STATE from './initial-state';

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LIST_POKEMON_REQ:
      return { ...state, loading: true, pokemonList: [] };
    case LIST_POKEMON_SUCCESS:
      return { ...state, pokemonList: action.payload, loading: false };
    case LIST_POKEMON_DATA_SUCCESS:
      return { ...state, pokemonData: action.payload, loading: false };
    case LIST_POKEMON_FAILED:
      return { ...state, errorList: action.payload, loading: false };
    case LIST_POKEMON_TYPE_REQ:
      return { ...state, };
    case LIST_POKEMON_TYPE_SUCCESS:
      return { ...state, pokemonType: action.payload, };
    case LIST_POKEMON_TYPE_FAILED:
      return { ...state, errorType: action.payload, };
    case LIST_POKEMON_TYPE_LIST_REQ:
      return { ...state,  };
    case LIST_POKEMON_TYPE_LIST_SUCCESS:
      return { ...state, pokemonTypeList: action.payload, };
    case LIST_POKEMON_TYPE_LIST_FAILED:
      return { ...state, errorTypeList: action.payload, };
    default:
      return state;
  }
};
