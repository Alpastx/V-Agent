// api/export.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Some from '@/models/Some';
import dbConnect from '@/lib/dbConnect';

export default async function exportHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { name } = req.body;

  await dbConnect();

  try {
    // Query the database to fetch data to export
    const data = await Some.find({
      $or: [
        { Name: { $regex: name, $options: 'i' } },
        { Email: { $regex: name, $options: 'i' } },
        { Contact: { $regex: name, $options: 'i' } },
        { LeadBy: { $regex: name, $options: 'i' } }
      ]
    });

    // Return the data in the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error exporting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
