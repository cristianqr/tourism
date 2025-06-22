import { HttpInterceptorFn } from "@angular/common/http";

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
    console.log(req.url);
    req = req.clone({
        url: `http://localhost:3000${req.url}`,
    });
    return next(req);
}