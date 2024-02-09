import { Injectable } from '@nestjs/common';
import { ISmsService } from './isms.service';
import { SmsResponseDto } from '../dto/dto.sms.response';

@Injectable()
export class MalawiSmsService implements ISmsService {
    sendSms() {
        
    }

    receiveSms(smsResponseDto: SmsResponseDto): SmsResponseDto {
        return smsResponseDto;
    }

    receiveSmsCallback() {
        
    }
}
