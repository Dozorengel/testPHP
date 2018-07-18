import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private url = 'http://localhost:8000/api/store';

  constructor(private httpClient: HttpClient) { }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    var body = {
      x: event.pageX,
      y: event.pageX,
      ts: + new Date()
    }
    //Отправляем на локальный сервер
    this.httpClient.post(this.url, body).subscribe(data => {
      console.log(data);
    });

    //Для отладки
    console.log("x: " + event.pageX + ", y: " + event.pageY + ", ts: " + + new Date());
    console.log(body);
  }
}