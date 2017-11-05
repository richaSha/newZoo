import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'appFilter'
})
export class AppFilterPipe implements PipeTransform {

  transform(animals: Animal[], args: string): any {
  debugger;
    var outputAnimal: Animal[] =[];
    if(args == 'all'){
      outputAnimal = animals;
    }else if(args == 'young'){
      animals.forEach(function(animal){
        if(animal.Age < 2){
          outputAnimal.push(animal);
        }
      })
    }else if(args == 'mature'){
      animals.forEach(function(animal){
        if(animal.Age >= 2){
          outputAnimal.push(animal);
        }
      })
    }

    return outputAnimal;
  }

}
