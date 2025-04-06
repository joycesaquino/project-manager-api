import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'O nome da tarefa precisa de ser definido' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'O status da tarefa precisa de ser definido' })
  @IsString()
  @ApiProperty({ type: 'string' })
  status: 'pending' | 'completed';

  @IsNumber()
  projectId: number;
}
