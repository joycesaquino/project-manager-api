import { Test, TestingModule } from '@nestjs/testing';
import { GetAllTasksByProjectIdService } from './get-all-tasks-by-project-id.service';

describe('GetAllTasksByProjectIdService', () => {
  let service: GetAllTasksByProjectIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllTasksByProjectIdService],
    }).compile();

    service = module.get<GetAllTasksByProjectIdService>(GetAllTasksByProjectIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
