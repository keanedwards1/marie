import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filename } = req.query;

  if (typeof filename !== 'string') {
    return res.status(400).json({ error: 'Invalid filename' });
  }

  try {
    const apiUrl = process.env.API_URL;
    if (!apiUrl) {
      throw new Error('API_URL is not defined');
    }

    const response = await fetch(`${apiUrl}/api/download/${filename}`);

    if (!response.ok) {
      throw new Error('Download failed');
    }

    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Type', 'application/pdf');
    res.send(buffer);
  } catch (error) {
    console.error('Error proxying download:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}