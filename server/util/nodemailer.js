//import * as dotenv from 'dotenv'
import { createTransport } from "nodemailer"

//dotenv.config()

const transporter = createTransport({
    service: "gmail",
    auth: {
        user: 'rambabu514352@gmail.com',
        pass: 'jqkp erkk mlxw gzxy'
    }
})

// const mailOptions = {
//     from: "graphicalpassauth@gmail.com",
//     to: "autipratham1671@gmail.com",
//     subject: "Test Email",
//     text: "test"
// }

export { transporter }