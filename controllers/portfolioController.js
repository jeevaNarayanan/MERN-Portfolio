const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

//transport
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth : {
            api_Key: process.env.API_SENDGRID,
        },
    })
)

const sendEmailController = (req,res) => {
 try {

    const {name,email,msg} = req.body

    if(!name || !email || !mag){
        return res.status.(500).send({
            success:false,
            message: 'Please Provide All Fields'
        })
    }

    //email matter
    transporter.sendMail({
        from:"jeeva.narayanan2012@gmail.com",
        subject: 'Regarding MERN P[Portfolio App',
        

    })
    return res.status(200).send({
        success: true,
        message: "Your Message Send Succesfully",

    })

 }catch (error){
    console.log(error)
    return res.status(500).send({
        success: false,
        message: 'send Email PI Error',
        error
    })

 }
    
}
module.exports = {sendEmailController};