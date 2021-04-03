import bcrypt from 'bcryptjs'
const users = [
    {name:"AdminUser",
     email:"admin@example.com",
     password = bcrypt.hashSync('1234321',10),
     isAdmin:true
    },
    {name:"John Doe",
     email:"john@example.com",
     password = bcrypt.hashSync('1234321',10),
     
    },
    {name:"Jane",
     email:"jane@example.com",
     password = bcrypt.hashSync('1234321',10),
     
    }
]
export default users