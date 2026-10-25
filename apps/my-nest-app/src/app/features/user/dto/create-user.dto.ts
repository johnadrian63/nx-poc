import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ type: String })
    public firstName = "";

    @ApiProperty({ type: String })
    public lastName = "";
}
