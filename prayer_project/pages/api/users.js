import nextConnect from 'next-connect';
import cors from 'cors';
import pool from '../../db';

const handler = nextConnect();

// add CORS middleware
handler.use(cors());

handler.get(async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM personal');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from database');
  }
});

export default handler;
