import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
   static cannotContainsSpace(control:AbstractControl):ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >=0 )
        return { cannotContainsSpace : true } ;

    return null;
    }

    static shouldBeUnique (control : AbstractControl) : Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                    if(control.value === 'vishnu') 
                        resolve({ shouldBeUnique : true});
                    else 
                        resolve(null);
            },2000);
        });
        
    }
}