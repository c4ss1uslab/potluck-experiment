import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  // TODO: Add some error-handling or deal with inputted data
  switch (req.method) {
    case 'GET':
      const players = await db
        .collection('players')
        .find({})
        .toArray();

      res.status(200).json(players)
      break;

    case 'POST':
      try {
        const response = await db.collection('players').insertOne(req.body);
        res.status(200).json(`${req.body.name} was added!`);
      } catch (error) {
        res.status(500).json(error);
      }
      
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}