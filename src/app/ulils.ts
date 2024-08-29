export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo?: Object;
};

export const toUpper = (arg: string) => arg.toUpperCase();

export const getStringInfo = (arg: string): StringInfo => ({
  lowerCase: arg.toLowerCase(),
  upperCase: arg.toUpperCase(),
  characters: Array.from(arg),
  length: arg.length,
  extraInfo: {},
});
