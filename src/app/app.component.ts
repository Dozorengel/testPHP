import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @HostListener('document:click', ['$event'])
  clickout(event) {
    console.log("x: " + event.pageX + ", y: " + event.pageY + ", ts: " + + new Date());
  }
}