import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./data.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const data = fs.readFileSync(filePath);
    res.status(200).json(JSON.parse(data));
  } else if (req.method === 'POST') {
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
    res.status(200).json({ status: 'saved' });
  }
}
