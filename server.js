const mongoose=require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const cors=require('cors');
dotenv.config({ path: './config.env' });
const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);

mongoose.connect(
  DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
  }
).then(()=>{
  console.log('DB is connected successfully...');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('SIGTERM',()=>{
  console.log('SIGTERM RECIEVED.Shutting down gracefully');
  server.close(()=>{
    console.log('Process terminated');
  })
});