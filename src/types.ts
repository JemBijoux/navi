export interface Configuration {
  store: string;
  feature: {
    [key: string]: boolean;
  };
}

// Based on http://tldp.org/LDP/abs/html/exitcodes.html
// and the fact that TS enums resolve to integers (0 based) by default
export enum ExitCodes {
  Success, // Default if no other exit code is set
  Error,  // Catchall for general errors
  ShellBuiltin, // Misuse of shell builtins (according to Bash documentation)
  ChangeDirectory,
}

export interface Store {
  readonly went: {
    readonly to: undefined | string;
    readonly from: undefined | string;
  };
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
