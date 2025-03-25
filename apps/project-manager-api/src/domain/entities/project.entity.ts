
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { ITask } from 'apps/tasks/src/domain/interfaces/task.interface';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import { TaskEntity } from 'apps/tasks/src/infrastructure/entities/task.entity';

@Entity('project')
export class ProjectEntity implements IProject {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'description', nullable: false })
  description: string;
  @OneToMany(() => TaskEntity, (task) => task)
  tasks: ITask[];
  @ManyToOne(() => UserEntity, (user) => user.projects)
  @JoinColumn()
  user: IUser;
}
