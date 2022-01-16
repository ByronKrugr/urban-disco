import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent {
  value = 'World';

  constructor(private http: HttpClient) {
    this.http.get('/api/message').subscribe(res => {
      console.log("HELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO")
    })
  }
}
