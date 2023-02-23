import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
declare const GetAllDailyLookResponseDto_base: import("@nestjs/common").Type<Pick<DailyLook, "title" | "imgUrl" | "text" | "createdAt" | "updatedAt" | "id">>;
export declare class GetAllDailyLookResponseDto extends GetAllDailyLookResponseDto_base {
    dailyLookTag: {
        id: '1';
        name: '실천인증';
    };
    user: {
        id: '1';
        nickname: '죠르디';
    };
}
export {};
