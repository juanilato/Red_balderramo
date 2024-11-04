import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; // Adjust the import based on your project structure

@Module({
  imports: [
    ConfigModule.forRoot(), // Ensure this is present to load .env variables
    TypeOrmModule.forRoot({
      type: 'postgres', // or your database type
      host: process.env.DB_HOST,
      port: +5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule, // Import your user module or other modules here
  ],
})
export class AppModule {}

