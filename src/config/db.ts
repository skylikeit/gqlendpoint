import mongoose from 'mongoose';
import config from './config';

const { MONGODB } = config;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('> Сonnection to the database was succsesful');
  } catch (err) {
    console.error(
      '> Сonnection to the database was failed because:',
      err.message
    );
    process.exit(1);
  }
};

export default connectDB;
