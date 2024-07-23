import { nameIsValid, fullTrim, getTotal } from '../src/app';

describe('check nameIsValid function', () => {
  it('imported without error', () => {
    expect(typeof nameIsValid).toBe('function')
  })
  it.each([null, undefined, false, {}, 'q', 'qa!', 'qa1', 'qa+', 'qa{}'])('nameIsValid(%s) = false', (val) => {
    expect(nameIsValid(val)).toBe(false)
  })
  it('check corrected name', () => {
    expect(nameIsValid('qa')).toBe(true)
  })
})

describe('check fullTrim function', () => {
  it('imported without error', () => {
    expect(typeof fullTrim).toBe('function')
  })
  it.each([null, undefined, false])('fullTrim(%s) = ""', (val) => {
    expect(fullTrim(val)).toBe('')
  })
  it.each(['checkstring', 'check string'])('fullTrim(%s) = ""', (val) => {
    expect(fullTrim(val)).toBe('checkstring')
  })
  it.each([[], true, {}])('fullTrim(%s) = Error', (val) => {
    expect(() => {
      fullTrim(val)
    }).toThrow('(text || \"\").replace is not a function')
  })
})

describe('check getTotal function', () => {
  it('imported without error', () => {
    expect(typeof getTotal).toBe('function')
  })

  it.each([null, true, false, {}, ''])('getTotal(%s) = Error', (val) => {
    expect(() => {
      getTotal([], val)
    }).toThrow("Скидка должна быть числом")
  })

  const testCasesPositive = [
    {
      name: 'case 1: valid discount',
      products: [
        { name: 'Товар1', quantity: 3, price: 10 },
        { name: 'Товар2', quantity: 5, price: 5 },
      ],
      discount: 10,
      expected: 49.5
    },
    {
      name: 'case 2: discount is 0',
      products: [
        { name: 'Товар1', quantity: 3, price: 10 },
        { name: 'Товар2', quantity: 5, price: 4 },
      ],
      discount: 0,
      expected: 50
    },
  ]

  test.each(testCasesPositive)('%s', ({ products, discount, expected }) => {
    const result = getTotal(products, discount);
    expect(result).toBeCloseTo(expected, 2);
  })

  const testCasesNegative = [
    {
      name: 'case 3: invalid negative discount',
      products: [
        { name: 'Товар1', quantity: 3, price: 10 },
        { name: 'Товар2', quantity: 5, price: 10 },
      ],
      discount: -10,
      expected: 'Процент скидки не может быть отрицательным',
    },
    {
      name: 'case 4: invalid discount over 100%',
      products: [
        { name: 'Товар1', quantity: 3, price: 10 },
        { name: 'Товар2', quantity: 5, price: 10 },
      ],
      discount: 110,
      expected: 'Процент скидки не может быть больше 100',
    },
  ]

  test.each(testCasesNegative)(
    '%s',
    ({ products, discount, expected }) => {
      expect(() => getTotal(products, discount)).toThrow(expected)
    },
  )
})