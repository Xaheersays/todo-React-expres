const { expect } = require('chai');
const supertest = require('supertest');
const app = require('./server.js'); // Replace with the actual path to your app file

describe('Todo App API', () => {
  let authToken;

  before(async () => {
    // Make a request to your login endpoint and save the token
    const response = await supertest(app)
      .post('/signin')
      .send({ username: 'testuser', password: 'testpassword' });
    authToken = response.body.token;
  });

  it('should add a new todo', async () => {
    const response = await supertest(app)
      .put('/addTodo')
      .set('Authorization', authToken)
      .send({ task: 'Test Task', taskCompleted: false });

    expect(response.status).to.equal(200);
    expect(response.body.success).to.be.true;
    expect(response.body.message).to.equal('Todo task added to list');
  });

  it('should get all todos', async () => {
    const response = await supertest(app)
      .get('/getAll')
      .set('Authorization', authToken);

    expect(response.status).to.equal(200);
    expect(response.body.success).to.be.true;
    // Add more assertions based on your response structure
  });

  // Add more test cases for other endpoints

  after(() => {
    // Clean up or additional teardown
  });
});
