import{HttpInterceptorFn} from '@angular/common/http';
 import{ catchError, tap, throwError} from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) =>{
    console.log('REQUIST:', req.url);

    const token = 'fake-jwt-token';
    const novaReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`,
        },
    });

  return next(novaReq).pipe(
  tap({
    next:(event) => console.log('RESPONCE:', event),
    error:(error) => console.error('ERROR:', error),
  }),
  catchError((error) => {
console.error('ERRO GLOBAL:', error);

if (error.status === 401) {
console.warn('Não autorizado!');
}
if (error.status === 500) {
console.warn('Erro interno do servidor!');
}
  return throwError(() => error);
      }),
    );
  };