import {of ,Observable, throwError} from 'rxjs';

export const ErrorResponseHandler = <T>(operation = 'operation', result?:T) => {
    return (err:any) : Observable <T> => {
        console.log('entered error');
        //TODO: send error to remote logging system..
        console.log(err);
        //TODO: make error readable for user
        console.log(`${operation} failed: ${err.message}`);
        //let app continue, return empty result.
        return of(result as T);
    }
}