import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'vinay',
    email: 'vinay@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kumar',
    email: 'kumar@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
