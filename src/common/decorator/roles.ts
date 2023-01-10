import { SetMetadata } from '@nestjs/common';
import { RoleType } from '../enum/RoleType';

export const Roles = (...roles: RoleType[]): any => SetMetadata('roles', roles);
