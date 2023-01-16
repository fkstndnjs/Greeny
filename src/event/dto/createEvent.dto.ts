export class CreateEventDto {
  eventWay: EventWayDto[];
}

class EventWayDto {
  order: number;

  text: string;
}
