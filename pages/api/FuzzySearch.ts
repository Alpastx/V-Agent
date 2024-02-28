import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Some from '@/models/Some';

export default async function searchHandler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    const { name } = req.body;

    if (!name.length) {
        res.status(400).json({ success: false });
    }

    // const testD = await Some.find({
    //     Name: "Yani"
    // });

    // console.log(testD);

    // Now fuzzy search the db, and if any of the properties data match with name's content, return it.
    // Search: ['Email', 'Name', 'Contact', 'LeadBy']

    const some = await Some.find({
        $or: [
            { Name: { $regex: name, $options: 'i' } },
            { Email: { $regex: name, $options: 'i' } },
            { Contact: { $regex: name, $options: 'i' } },
            { LeadBy: { $regex: name, $options: 'i' } }
        ]
    });

    res.status(200).json({ success: true, data: some });
}
