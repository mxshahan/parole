import {
  contentAll,
  contentSingle,
  contentCreate,
  contentUpdate,
  contentDelete,
  contentLocal
} from './controller';

export const baseUrl = '/content';

export const routes = [
  {
    method: 'GET',
    route: '/',
    handlers: [
      contentAll
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      contentSingle
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      contentUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      contentDelete
    ]
  },
  {
    method: 'POST',
    route: '/',
    handlers: [
      contentCreate
    ]
  },
  {
    method: 'POST',
    route: '/local',
    handlers: [
      contentLocal
    ]
  }
];
