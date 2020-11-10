const axios=require('axios');
const Users=require('./users');

jest.mock('axios');

test('Should fetch users',()=>{
    const users=[{
            "id":1,
            "first_name": "Hatta",
            "last_name":"Wkwkwkw",
            "email":"hatta@gmail.com"
        },
        {
            "id":2,
            "first_name": "Hanif",
            "last_name":"Hohoho",
            "email":"hanif@gmail.com"
    }];

    const resp ={data:users};
    axios.get.mockImplementation(()=> Promise.resolve(resp));
    Users.all().then(resp=>expect(resp.data).toEqual(users));
});