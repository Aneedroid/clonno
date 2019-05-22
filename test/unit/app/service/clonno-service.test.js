const { MongoClient } = require('mongodb');
const request = require('supertest');
 
const app = require('../../../../app/routes/route');


describe('Clonno Service tests', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost:27017/clonno?authSource=clonno', {
      useNewUrlParser: true,
    });
    db = await connection.db('clonno');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('Should get all boards from the database', async (done) => {
    const clonno = db.collection('clonno');

    const mockClonno = {
      _id: 'RandomId2',
      'boards': [
        {
          'lists': [
            {
              'cards': [
                {
                  'comments': [
                    'Woow!!',
                  ],
                  '_id': '5ce0dcac5dc1215306079e4e',
                  'title': 'Batman',
                  'description': 'Smart, genius and driven',
                },
              ],
              '_id': '5ce0dcac5dc1215306079e4f',
              'title': 'Strength',
            },
          ],
          '_id': '5ce0dcac5dc1215306079e50',
          'title': 'Superheroes',
        },
      ],
    };

    await clonno.insertOne(mockClonno);

    request(app)
      .get('/app/boards')
      .expect(200)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).toBeFalsy();
        done();
      });
  });
  
});

