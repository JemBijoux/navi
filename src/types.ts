export interface Configuration {
  store: string;
  feature: {
    [key: string]: boolean;
  };
}

/*
  A "gate" is like a bookmark,
  you have a name and it resolves to a location, so that at any time you can 
  easily refer to a named gate and transport yourself there

*/
export interface Gate {
  name: string;
  absPath: string;
}

export interface GateMap {
  [key: string]: Gate;
}

export interface InitialState {
  gates: {} | GateMap;
}
