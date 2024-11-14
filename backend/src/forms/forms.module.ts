import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import {PrismaModule} from '../../prisma/prisma.module';
import { UpdateGateway } from 'src/update.gateway';
@Module({
  imports: [PrismaModule],
  controllers: [FormsController],
  providers: [FormsService, UpdateGateway],
})
export class FormsModule {}
