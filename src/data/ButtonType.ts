export type ButtonType = Operator | Digit | Applying

export function isButtonType(x: unknown): x is ButtonType {
  return isDigit(x) || isOperator(x) || isApplying(x)
}

export type Operator = '+' | '-' | '*' | '/'

export function isOperator(x: unknown): x is Operator {
  return x === '+' ||
    x === '-' ||
    x === '*' ||
    x === '/'
}

export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export function isDigit(x: unknown): x is Digit {
  return x === '0' ||
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

export type Applying = 'C' | '='

export function isApplying(x: unknown): x is Applying {
  return x === 'C' || x === '='
}
