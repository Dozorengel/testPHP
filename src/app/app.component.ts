import { Component, HostListener } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http) { }

  title = 'app';

  @HostListener('document:click', ['$event'])
  clickout(event) {
    //Отправляем на предполагаемый локальный сервер
    this.http.post('http://localhost:8080/', {
      x: event.pageX,
      y: event.pageX,
      ts: + new Date()
    });

    //Для отладки
    console.log("x: " + event.pageX + ", y: " + event.pageY + ", ts: " + + new Date());
    console.log({
      x: event.pageX,
      y: event.pageX,
      ts: + new Date()
    });
  }
}