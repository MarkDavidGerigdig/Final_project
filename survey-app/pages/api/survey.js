import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const { hoursStudy, studyMethod, averageGrade, ageGroup } = req.body;

        // MongoDB Connection URI - Replace with your actual connection string from MongoDB Atlas
        const uri = 'mongodb+srv://Finals:Finals@finals.ap5k1fd.mongodb.net/?retryWrites=true&w=majority&appName=Finals';

        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();

            const database = client.db('<database>');
            const collection = database.collection('surveyData');

            // Insert a single document into MongoDB
            const result = await collection.insertOne({
                hoursStudy,
                studyMethod,
                averageGrade,
                ageGroup,
                submittedAt: new Date(),
            });

            console.log(`New survey data added with ID: ${result.insertedId}`);

            res.status(201).json({ message: 'Survey data added successfully!' });
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            res.status(500).json({ message: 'Failed to store survey data.' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

export default handler;
