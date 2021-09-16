import { Pipe, PipeTransform } from '@angular/core';
import { LocalStorageService } from './services/storage/local-storage.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(
    private localStorage:LocalStorageService
  ){}
  word:any =
  {
    "fa":
    {
     "hello":"سلام",
     "welcome":"خوش آمدید",
     "getvalue":"سن خود را وارد کنید",
     "submit":"ثبت"
    }, 
    "en":
    {
     "سلام":"hello",
     "خوش آمدید":"welcome",
      "سن خود را وارد کنید":"getvalue",
      "ثبت":"submit"
    }
  }
  transform(value: string, ...args: unknown[]):  
  unknown {
    let lang:string = this.localStorage.lang || 'en';
    return this.word[lang][value];
}
}
