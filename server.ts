import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { json } from 'express';
import contactRouter from './src/api/contact';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

// Use the contact router
app.use(contactRouter);

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
