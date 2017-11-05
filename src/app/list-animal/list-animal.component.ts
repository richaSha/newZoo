import { Component } from '@angular/core';
import { Animal } from '../animal.model';
import { ANIMAL } from '../app.data';
import { EditAnimalComponent } from '../edit-animal/edit-animal.component';

@Component({
  selector: 'app-list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.css']
})
export class ListAnimalComponent {
  animalList: Animal[] = ANIMAL;
  editedMode: boolean = false;
  editAnimal:Animal;
  filerByInfo: string = 'all';
  editInfo(animal: Animal){
    this.editAnimal = animal;
    this.editedMode = true;
  }
  doneEdit(){
  this.editAnimal = null;
  this.editedMode = false;
  }
  selctionChange(selection: string){
    this.filerByInfo = selection;
  }
}
