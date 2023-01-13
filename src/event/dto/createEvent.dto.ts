export class CreateEventDto {
  thumbnail: string;

  mainThumbnail: string;

  eventWay: EventWayDto;
}

class EventWayDto {
  order: number;

  text: string;
}
