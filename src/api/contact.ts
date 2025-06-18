import express from 'express';
import prisma from '../lib/prisma';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Submit contact message
const submitContact = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Error submitting message' });
  }
};

// Admin login
const adminLogin = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const admin = await prisma.admin.findUnique({ where: { username } });
    
    if (!admin || !bcrypt.compareSync(password, admin.password)) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ id: admin.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};

// Get all messages (protected route)
const getMessages = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).json({ error: 'No token provided' });
      return;
    }

    jwt.verify(token, JWT_SECRET);
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving messages' });
  }
};

router.post('/api/contact', submitContact);
router.post('/api/admin/login', adminLogin);
router.get('/api/messages', getMessages);

export default router;
