import { SmsResponseDto } from "src/dto/dto.sms.response";

export interface ISmsService {
    sendSms();
    receiveSms(smsDto: SmsResponseDto);
    receiveSmsCallback();
}