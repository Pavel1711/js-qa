describe('check GET /BookStore/v1/Books', () => {
  it('check status and data', () => {
    const getBooks = async () => {
      const res = await fetch('https://bookstore.demoqa.com/BookStore/v1/Books');
      const data = await res.json();
      expect(res.status).toEqual(200);
      expect(Array.isArray(data.books)).toBe(true);
      expect(data.books.length).toBeGreaterThan(0);
    };
    getBooks()
  })
})

// Почему-то запрос возвращает 504
// describe('check POST /Account/v1/User', () => {
//   it('check status and data', () => {
//     const data = {
//       userName: 'Pavel',
//       password: 123,
//       status: 504
//     }
//     const dataWithError = {
//       userName: null,
//       password: null,
//       status: 400
//     }
//     const getUser = async () => {
//       const res = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           userName: 'Pavel',
//           password: 123
//         })
//       });
//       expect(res.status).toEqual(504);
//     };
//     getUser(data)
//     getUser(dataWithError)
//   })
// })

// describe('check POST /Account/v1/GenerateToken', () => {
//   it('check status and data', () => {
//     const data = {
//       userName: 'Pavel',
//       password: 123,
//       status: 504
//     }
//     const dataWithError = {
//       userName: null,
//       password: null,
//       status: 400
//     }
//     const getUser = async ({status, ...body}) => {
//       const res = await fetch('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//       });
//       expect(res.status).toEqual(status);
//     };

//     getUser(data)
//     getUser(dataWithError)
//   })
// })

describe('check POST /Account/v1/Authorized', () => {
  it('check status and data', () => {
    const getUser = async () => {
      const res = await fetch('https://bookstore.demoqa.com/Account/v1/Authorized', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: 'Pavel',
          password: 123
        })
      });
      const data = await res.json();
      expect(res.status).toEqual(404);
      expect(data.message).toBe('User not found!');
    };
    getUser()
  })
})
