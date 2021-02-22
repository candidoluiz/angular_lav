import { throwError } from 'rxjs';

export class ErrorHandler{
    static handlerError(error: Response | any){
        let errorMessage: string = 'algum erro';
        if(error instanceof Response){
            errorMessage= `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        }else{
            errorMessage = `Erro Codigo: ${error.status} \n Message: ${error.message}`;
            //console.log(error);
        }
        //console.log(errorMessage);
        return throwError(errorMessage);
    }
}






// handleError(error) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//         // client-side error
//         errorMessage = `Error: ${error.error.message}`;
//     } else {
//         // server-side error
//         errorMessage = `Erro Codigo: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
// }