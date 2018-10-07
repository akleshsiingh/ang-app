import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name : "summary"
})
export class SummaryPipe implements PipeTransform {

    transform(value:String,arg?:number){
    if(value==null)
        return null;

        let length = arg? arg: 50
    return value.substr(0,length);

    }
}