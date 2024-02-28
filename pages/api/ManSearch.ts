// pages/api/search.ts

import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Some from '@/models/Some';

export default async function searchHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    await dbConnect();

    const { name, field } = req.body;

    if (!name.length || !field) {
        return res.status(400).json({ success: false, message: 'Invalid search query' });
    }

    try {
        let query: any = {};
        query[field] = { $regex: name, $options: 'i' };

        const results = await Some.find(query);

        res.status(200).json({ success: true, data: results });
    } catch (error) {
        console.error('Error searching data:', error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
}
