import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://LautaroJLZ:mongoAtlas23*@cluster0.00gruig.mongodb.net/?retryWrites=true&w=majority');
        console.log(">>> DB esta conectado")
    } catch (error) {
        console.log(error);
    }
}