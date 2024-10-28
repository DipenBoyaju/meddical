import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/dbconnect.js';
import serviceRoute from './routes/serviceRoute.js'
import departmentRoute from './routes/departmentRoute.js'
import doctorRoute from './routes/doctorRoute.js'
import adminRoute from './routes/adminRoute.js'
import appointmentRoute from './routes/appointmentRoute.js'
import blogRoute from './routes/blogRoute.js'
import cors from 'cors'

dotenv.config()
const app = express();

app.use(cors({
  origin: 'https://meddical-frontend.vercel.app',
  // origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());

app.use('/api', serviceRoute);
app.use('/api', departmentRoute);
app.use('/api', doctorRoute);
app.use('/api', adminRoute);
app.use('/api', appointmentRoute);
app.use('/api', blogRoute);

connectDB()
  .then(
    () => {
      app.listen(process.env.PORT, () => {
        console.log('welcome to server');

      })
    }
  ).catch((err) => {
    console.error('Failed to connect to the database:', err);
  });


app.use('/', (req, res) => {
  res.send('<h1>welcom to my server</h1>')
})