// TASK 1
const kolobok = (person) => {
  switch (person) {
    case PERSONS.grandpa:
      return 'Я от дедушки ушёл'
    case PERSONS.rabbit:
      return 'Я от заяца ушёл'
    case PERSONS.fox:
      return 'Меня съели'
  }
}

const PERSONS = {
  grandpa: 'дедушка',
  rabbit: 'заяц',
  fox: 'лиса'
}

console.log(kolobok(PERSONS.grandpa))


// TASK 2
const newYear = (person) => `${person}! `.repeat(3)

const PERSONS_2 = {
  santa: 'Дед Мороз',
  snowMaiden: 'Снегурочка',
}

console.log(newYear(PERSONS_2.santa))
