import { DefinitionKind } from '@angular/compiler/src/constant_pool';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Youtube';
  name ="Dhruti Kewat"
  getname()
  {
    return this.name
  }
  obj={
    name:'Kruti',
    age:20
  }
  arr=['dhru','hello','world']
}
