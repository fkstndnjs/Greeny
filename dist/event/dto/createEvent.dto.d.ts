import { Event } from '../entites/event.entity';
declare const CreateEventDto_base: import("@nestjs/common").Type<Pick<Event, "title" | "startDate" | "endDate">>;
export declare class CreateEventDto extends CreateEventDto_base {
    status: boolean;
}
export {};
