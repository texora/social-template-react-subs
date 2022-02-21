import BN from 'bn.js'

/** `def` is a default number that will be returned in case the fuction fails to parse `maybeNum` */
export const tryParseInt = (maybeNum: string | number, def: number): number => {
  if (typeof maybeNum === 'number') {
    return maybeNum
  }
  try {
    return parseInt(maybeNum)
  } catch (err) {
    return def
  }
}

export function stringifyBns (ids: BN[]): string[] {
  return ids.map(id => id?.toString())
}
