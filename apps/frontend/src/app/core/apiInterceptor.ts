import { HttpInterceptorFn } from "@angular/common/http";

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('token');
    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    req = req.clone({
        url: `http://localhost:3000${req.url}`,
    });
    return next(req);
}