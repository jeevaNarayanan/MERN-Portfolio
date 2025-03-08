const sendEmailController = (req,res) => {
 try {

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