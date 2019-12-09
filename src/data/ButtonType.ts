export type ButtonType =
  '+' | '-' | '*' | '/' |
  'C' | 'x' |
  '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export function isButtonType(x: unknown): x is ButtonType {
  return x === '+' ||
    x === '-' ||
    x === '*' ||
    x === '/' ||
    x === 'C' ||
    x === 'x' ||
    x === '0' ||
    x === '1' ||
    x === '2' ||
    x === '3' ||
    x === '4' ||
    x === '5' ||
    x === '6' ||
    x === '7' ||
    x === '8' ||
    x === '9'
}
