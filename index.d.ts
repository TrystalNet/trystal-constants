export const FGS: (string | null)[];
export const BGS: (string | null)[];
export const SIZES: (string | null)[];
export const FACES: string[];

export enum Perms { None=0, rw=1, ro=2 }
export enum Formats { UNKNOWN= 0, FMT2014 = 20140, FMT2014A= 20141, FMT2015= 20150 }

export enum ForegroundColors { black=0, blue=2, green, red, gray }
export enum BackgroundColors { yellow=1, powderblue, palegreen, mistyrose, lightgray }

export interface NPMLinkTest {
  (name):string
}