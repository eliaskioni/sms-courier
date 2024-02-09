import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Partner } from "../enums/enum";

export class SmsResponseDto {

    @IsString()
    msisdn: string;

    @IsString()
    text: string;

    @IsEnum(Partner)
    partner: string;

    @IsBoolean()
    @IsOptional()
    expect_reply: boolean;

    @IsBoolean()
    @IsOptional()
    system_generated: boolean;

    @IsNumber()
    @IsOptional()
    delay_with: number;
}
