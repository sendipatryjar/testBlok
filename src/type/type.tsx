export interface MenuPokemon {
    id: number;
    name: string;
}
  export interface IPoke {
    id: number;
    name: string;
    abilities?: IAbilities[];
    sprites?: ISprites;
    forms?: IPokemonList[];
    types?: ITypes[];
    stats?: IStat[];
    height?: number;
    weight?: number;
  }
  export interface IAbilities {
    ability: IPokemonList;
    is_hidden?: boolean;
    slot?: number;
  }

  export interface IPokemonList {
    name?: string;
    url?: string;
  }
  
  export interface IOfficialArtwork {
    front_default?: string;
  }
  
  export interface IDreamWorld {
    front_default?: string;
    front_female?: string;
  }
  
  export interface IOtherOfSprites {
    'official-artwork'?: IOfficialArtwork;
    dream_world?: IDreamWorld;
  }
  
  export interface ISprites {
    other?: IOtherOfSprites;
  }
  
  export interface IPokeResponse {
    count?: number;
    next?: string;
    previous?: string;
    results: IPokemonList[];
  }
  
  export interface ITypes {
    slot?: number;
    type: IPokemonList;
  }
  
  export interface IStat {
    base_stat?: number;
    effort: number;
    stat: IPokemonList;
  }
  
  export interface IPokemonSliceRedux {
    fetchPokemonData?: boolean;
    pokemonList?: IPoke[];
    pokemonRawData?: IPokeResponse;
    selectedType?: string;
    isFetchingPokemonData?: boolean;
    currentPokemonRawData?: IPokemonList[];
  }
  