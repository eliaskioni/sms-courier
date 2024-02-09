import { Test, TestingModule } from '@nestjs/testing';
import { SmsResponseDto } from './dto.sms.response';
import { ValidationPipe } from '@nestjs/common';

describe('SmsResponseDto', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: []
    }).compile();
  });

  describe('validation', () => {

    let smsResponseDto: SmsResponseDto;

    beforeEach(()=>{
      smsResponseDto = new SmsResponseDto()
    });

    it('should pass validation when all fields are passed and valid', async ()=> {
      smsResponseDto.msisdn = '00254763787073';
      smsResponseDto.text = 'Hello world';
      smsResponseDto.partner = 'equityguid';
      smsResponseDto.expect_reply = false;
      smsResponseDto.system_generated = false;
      smsResponseDto.delay_with =null;
      const validationPipe = new ValidationPipe();
      await expect(validationPipe.transform( smsResponseDto, { type: 'body', metatype: SmsResponseDto})).resolves.toEqual(smsResponseDto);

    })

    it('should fail validation when a required field is not passed',async () => {
      const validationPipe = new ValidationPipe();
      await expect(validationPipe.transform(smsResponseDto, {type: 'body', metatype: SmsResponseDto})).rejects.toThrow();
    })

    it('should pass validation for when optional params are missing', async () => {
      smsResponseDto.msisdn = '00254763787073';
      smsResponseDto.text = 'Hello world';
      smsResponseDto.partner = 'equityguid';
      const validationPipe = new ValidationPipe();
      await expect(validationPipe.transform(smsResponseDto, {type: 'body', metatype: SmsResponseDto})).resolves.toEqual(smsResponseDto);
    })
  });
});
