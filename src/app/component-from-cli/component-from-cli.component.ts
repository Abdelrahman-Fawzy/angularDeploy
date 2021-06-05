import { Component } from '@angular/core';
import {dbServices} from '../services/db.services';

@Component({
  selector: 'app-component-from-cli',
  templateUrl: './component-from-cli.component.html',
  styleUrls: ['./component-from-cli.component.css']
})
export class ComponentFromCliComponent {

  // how to create basic elements
  courses: string[] = ['c#', 'PHP', 'PYTHON'];

  // how to call functionalities from services
  coursess;
  constructor(dbServices: dbServices) {
    this.coursess = dbServices.getAll();
  }
}
