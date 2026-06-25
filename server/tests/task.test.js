const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/models/Task');

jest.mock('../src/models/Task');

describe('Task API Endpoints', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/tasks', () => {
    it('should return 200 and a list of tasks', async () => {
      const mockTasks = [
        { id: '1', title: 'Task 1', status: 'pending', priority: 'low' },
        { id: '2', title: 'Task 2', status: 'completed', priority: 'high' }
      ];
      Task.find.mockReturnValue({
        sort: jest.fn().mockResolvedValue(mockTasks)
      });

      const res = await request(app).get('/api/tasks');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(mockTasks);
      expect(Task.find).toHaveBeenCalledWith({});
    });

    it('should filter tasks by status', async () => {
      const mockTasks = [{ id: '1', title: 'Task 1', status: 'pending', priority: 'low' }];
      Task.find.mockReturnValue({
        sort: jest.fn().mockResolvedValue(mockTasks)
      });

      const res = await request(app).get('/api/tasks?status=pending');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(mockTasks);
      expect(Task.find).toHaveBeenCalledWith({ status: 'pending' });
    });
  });

  describe('POST /api/tasks', () => {
    it('should create a new task and return 201', async () => {
      const mockTask = {
        title: 'New Task',
        description: 'Task Description',
        status: 'pending',
        priority: 'medium'
      };
      
      const savedTask = { ...mockTask, id: '123', createdAt: '2023-01-01', updatedAt: '2023-01-01' };
      
      jest.spyOn(Task.prototype, 'save').mockResolvedValue(savedTask);

      const res = await request(app).post('/api/tasks').send(mockTask);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual(savedTask);
    });

    it('should return 400 if validation fails', async () => {
      const invalidTask = {
        description: 'Task without title'
      };

      const res = await request(app).post('/api/tasks').send(invalidTask);

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toContain('"title" is required');
    });
  });
});
