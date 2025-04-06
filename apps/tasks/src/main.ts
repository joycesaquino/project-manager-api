import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);

  app.connectMicroservice(
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
    {
      inheritAppConfig: true,
    },
  );

  await app.startAllMicroservices();
}
bootstrap();
