import bcrypt from "bcryptjs"
const users = [
    {
        accountName: 'Admin',
        name: 'Admin',
        dateOfBirth: '2001-09-22',
        email: 'admin@example.com',
        telephone: '0868327784',
        gender: 'Male',
        occupation: 'Student',
        nationality: 'Viet Nam',
        city: 'Ha Noi',
        district: 'Long Bien',
        neighborhood: 'Ngoc Lam',
        street: 'Ngoc Lam',
        lane: 1,
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },{
        accountName: 'User',
        name: 'User',
        dateOfBirth: '2001-09-22',
        email: 'user@example.com',
        telephone: '0123456789',
        gender: 'Male',
        occupation: 'Student',
        nationality: 'Viet Nam',
        city: 'Ha Noi',
        district: 'Long Bien',
        neighborhood: 'Ngoc Lam',
        street: 'Ngoc Lam',
        lane: 1,
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    }
]
export default users;
