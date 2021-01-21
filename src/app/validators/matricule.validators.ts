import { AbstractControl, ValidationErrors } from '@angular/forms';

export class MatriculeValidators {
    static shoulBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise( (resolve, reject) => {
            //send request to verify if 
                // (control.value as string) == 
            }  
        )
        // if(control.value === "450-HF")
        //     return { shouldBeUnique: true }
        // else
        //     return null;
    }

}