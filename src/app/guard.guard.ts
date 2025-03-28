import { CanActivateFn } from '@angular/router';
import { MyServiceService } from './my-service.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  
  const appService = inject(MyServiceService);

  if (appService.isLogged) {
    return true
  }
  
  return false;
};
