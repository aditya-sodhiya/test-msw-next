// import { User } from '@/src/components/MovieList';
import { User } from '@/src/app/page';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get<never, never, User>('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'Sarah',
      lastName: 'Maverick',
    });
  }),
 
];
