import { ErrorHandler } from "@angular/core";

export class AppErrorHandler  implements ErrorHandler{
    
    handleError(errror){
        console.log("APP ERROR HANDLER ",errror)
    }

}