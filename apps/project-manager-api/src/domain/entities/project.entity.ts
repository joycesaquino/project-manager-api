
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';
import { UserEntity } from './user.entity';
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { ITask } from '@project-manager-api/domain/interfaces/task.interface';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';

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
