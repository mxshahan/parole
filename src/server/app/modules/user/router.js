import {
  userAll,
  userSingle,
  userCreate,
  userUpdate,
  userDelete,
  userLocal
} from './controller';

export const baseUrl = '/user';

export const routes = [
  {
    method: 'GET',
    route: '/',
    handlers: [
      userAll
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      userSingle
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      userUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      userDelete
    ]
  },
  {
    method: 'POST',
    route: '/',
    handlers: [
      userCreate
    ]
  },
  {
    method: 'POST',
    route: '/local',
    handlers: [
      userLocal
    ]
  }
];
