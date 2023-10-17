const mongoose= require('mongoose')




const connectToDb= ()=>{
    const db_url= process.env.db_url;
    return (
        mongoose.connect(db_url).then(()=>{
            console.log('database connected successfully');
        }).catch((error)=>{
            console.log(error);
        })
    )
}

module.exports = connectToDb;