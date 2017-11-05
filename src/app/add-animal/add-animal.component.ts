import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal.model';
import { ANIMAL } from '../app.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent{
  constructor(public router:Router ){}
  newAnimal( Species: string,  Name: string,  Age: number,  Diet: string,  Location: string,  Caretakers: number,  Sex: string,  Likes: string,  Dislikes: string){
    ANIMAL.push(new Animal(Species,  Name,  Age,  Diet,  Location,  Caretakers,  Sex,  Likes,  Dislikes));
    this.router.navigate([''])
  }

}
