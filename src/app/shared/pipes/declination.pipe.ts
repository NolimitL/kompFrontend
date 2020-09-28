import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'declination'
})
export class DeclinationPipe implements PipeTransform{
  transform(word:string):string{
    let arr = word.split('\r\n')
    switch (arr[0]) {
      case 'Ремонт':
        arr[0] = 'Ремонте'
        if(arr[2] != null && arr[2] == 'заправка'){
          arr[2] = 'заправке'
        }
        break;
      case 'Настройка':
        arr[0] = 'Настройке'
      case 'Антивирусная':
        arr[0] = 'Антивирусной'
        arr[1] = 'защите'
        arr[2] = 'и'
        arr[3] = 'лечении'
        break;
      case 'Восстановление':
        arr[0] = 'Восстановлении'
        break;
      case 'Установка':
        arr[0] = 'Установке'
        break;
    }
    console.log('wordDone:', arr)
    return arr.join(' ')
  }
}
