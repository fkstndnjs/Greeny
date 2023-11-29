import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
declare const GetOneDailyLookResponseDto_base: import("@nestjs/common").Type<Pick<DailyLook, "title" | "createdAt" | "text" | "updatedAt" | "id" | "imgUrl">>;
export declare class GetOneDailyLookResponseDto extends GetOneDailyLookResponseDto_base {
    dailyLookTag: {
        id: '1';
        name: '실천인증';
    };
    user: {
        id: '1';
        nickname: '죠르디';
    };
    dailyLookComment: Array<{
        id: string;
        createdAt: Date;
        comment: string;
        isMine: boolean;
        user: {
            id: string;
            name: string;
        };
    }>;
}
export {};
