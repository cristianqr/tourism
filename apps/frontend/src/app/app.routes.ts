import { Route } from '@angular/router';
import { Login } from './features/auth/views/login/login';
import { Home } from './features/home/home';
import { People } from './features/people/views/people/people';
import { NewPerson } from './features/people/views/new-person/new-person';
import { PersonDetail } from './features/people/views/person-detail/person-detail';

export const appRoutes: Route[] = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: 'people',
        children: [
            {
                path: '',
                component: People,
            },
            {
                path: 'new',
                component: NewPerson,
            },
            {
                path: ':id',
                component: PersonDetail,
            },
        ],
    },
];
