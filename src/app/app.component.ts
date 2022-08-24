import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str: string = 'cat';
  title = 'Manage Products';
  count = 0;
  price = 15;
  a: number = 0.25;
  favoriteColor='';

  myBirthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  constructor(private loggerService: LoggerService) { }
  onLogMe() {
    this.loggerService.writeCount(this.count);
    this.count++;
  }
 
}
