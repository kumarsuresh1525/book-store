import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from 'src/configuration';
import { BookController } from 'src/controller/book.controller';
import { Book, BookSchema } from 'src/entity/book.entity';
import { HealthController } from 'src/health.controller';
import { BookRepository } from 'src/repository/book.repository';
import { BookService } from 'src/service/book.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [() => configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const database = configService.get('database');
        return {
          uri: database.uri(),
          dbName: database.name,
          ...database.options,
        };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [HealthController, BookController],
  providers: [BookService, BookRepository],
})
export class AppModule {}
