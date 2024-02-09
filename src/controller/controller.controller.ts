import { Controller, Post } from '@nestjs/common';
import { SmsResponseDto } from '../dto/dto.sms.response';
import { FactoryService } from '../factory/factory.service';
import { ISmsService } from '../services/isms.service';

@Controller('api')
export class ControllerController {

    constructor(private factoryService: FactoryService) {};

    @Post()
    create(smsDto: SmsResponseDto){
        let smsSenderService: ISmsService;
        smsSenderService = this.factoryService.getSmsProvider(smsDto.partner);
        return smsSenderService.receiveSms(smsDto);
    }
}
