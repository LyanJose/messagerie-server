import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    pseudo:     { type: String, required: 'Entrer votre pesudo' },
    message:    { type: String, required: 'Entrer votre message' }
})

const Message = mongoose.model('Message', messageSchema)
export default Message