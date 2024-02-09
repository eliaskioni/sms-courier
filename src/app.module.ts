import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { FactoryService } from './factory/factory.service';
import { MalawiSmsService } from './services/sms.malawi.service';


@Module({
  imports: [],
  controllers: [ControllerController],
  providers: [FactoryService, MalawiSmsService],
})
export class AppModule {}
