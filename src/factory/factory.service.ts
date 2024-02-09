import { Injectable, NotFoundException } from '@nestjs/common';
import { MalawiSmsService } from '../services/sms.malawi.service';
import { ISmsService } from '../services/isms.service';

@Injectable()
export class FactoryService {
    constructor(private readonly smsMalawiService: MalawiSmsService){};

    getSmsProvider(partner_guid: string): ISmsService {
        switch(partner_guid) {
            case 'equityguid':
                return this.smsMalawiService
            default:
                throw new NotFoundException('SMS Provider not found for the given partner_guid');
        }
    }
}
