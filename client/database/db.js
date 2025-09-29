export const Connection = async () => {
    const URL = '';
    try{

        await mongoose.connect(URL, {useNewUrlParser: true})
    } catch(error){
        console.log('Error while connecting with database')

    }  
}