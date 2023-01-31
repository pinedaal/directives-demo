import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  appName = 'This is a One-way Data binding example..';
  clientName: string = 'Antonella';

  appliedCSSClass = 'blue';
  notappliedCSSClass = false;
  myColor = 'orange';

  //Event binding

  message = '';

  onButtonClick() {
    this.message = 'RAWR!';
  }

  //Event as an alert()
  showAlert() {
    alert('MEOW!');
  }

  // for two-way data binding demo
  myName = '';

  //ngIf Demo
  showElement = false;

  //ngFor Demo
  items = ['CAT', 'DOG', 'TIGER'];

  //ngSwitch
  selectedOption = 2;

  //ngStyle
  color = 'orange';

  //ngClass
  isBold = true;
  isItalic = true;

  //ngModel
  name = '';
}
