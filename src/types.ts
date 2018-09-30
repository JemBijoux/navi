export interface Configuration {
  store: string;
  feature: {
    [key: string]: boolean;
  };
}

export interface Store {
  readonly gates: GateMap;
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
  readonly [key: string]: Gate;
}
