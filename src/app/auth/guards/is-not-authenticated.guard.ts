import { Router, type CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';


export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthService );
  const router      = inject( Router );

  if ( authService.authStatus() === AuthStatus.authenticated ) {
    router.navigateByUrl('/dashboard');
    console.log('Not Auth Guard: False')
    return false;
  }

  console.log('Not Auth Guard: True')
  return true;
};
