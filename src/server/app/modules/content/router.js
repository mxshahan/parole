import { isAuthenticated } from '@mid';
import {
  contentAll,
  contentSingle,
  contentCreate,
  contentUpdate,
  contentDelete,
  contentLocal,
  myContent,
  userContent
} from './controller';

export const baseUrl = '/api/content';

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
    method: 'GET',
    route: '/mycontent',
    handlers: [
      isAuthenticated,
      myContent
    ]
  },
  {
    method: 'GET',
    route: '/usercontent',
    handlers: [
      userContent
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      isAuthenticated,
      contentUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      isAuthenticated,
      contentDelete
    ]
  },
  {
    method: 'POST',
    route: '/',
    handlers: [
      isAuthenticated,
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
