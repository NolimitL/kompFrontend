import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'declination'
})
export class DeclinationPipe implements PipeTransform{
  transform(word:string):string{
    // console.log("Each word:", word)
    let arr = word.split(' ')
    switch (arr[0]) {
      case 'Ремонт':
        arr[0] = 'Ремонте'
        if(arr[2] != null && arr[2] == 'заправка'){
          arr[2] = 'заправке'
        }
        break;
      case 'Наcтройка':
        arr[0] = 'Настройке'
        break;
      case 'Антивирусная':
        arr[0] = 'Антивирусной'
        arr[1] = 'защите'
        arr[3] = 'лечении'
        break;
      case 'Восстановление':
        arr[0] = 'Восстановлении'
        break;
      case 'Установка':
        arr[0] = 'Установке'
        break;
    }
    return arr.join(' ')
  }
}
