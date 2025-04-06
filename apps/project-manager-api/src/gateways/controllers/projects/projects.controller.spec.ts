import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { UseCasesModule } from '@project-manager-api/domain/use-cases/use-cases.module';

describe('ProjectsController', () => {
  let controller: ProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UseCasesModule],
      controllers: [ProjectsController],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
