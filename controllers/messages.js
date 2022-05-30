import mongoose from 'mongoose'
import Message from '../models/message.js'

export const getMessages = async (req, res) => {
    try {
        const message = await Message.find()
        res.status(200).json(message)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createMessage = async (req, res) => {
    const message = req.body
    const newMessage = new Message(message)
    try {
        await newMessage.save()
        res.status(201).json(newMessage)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateMessage = async (req, res) => {
    const { id: _id } = req.params
    const message = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('ID not found')
    const updateMessage = await Message.findByIdAndUpdate(_id, message, { new: true })
    res.json(updateMessage)
}

export const deleteMessage = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('ID not found')
    await Message.findByIdAndRemove(id)
    console.log('delete')
    res.json({ message: error.message })
}