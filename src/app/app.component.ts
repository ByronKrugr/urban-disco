import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent {
  value = 'World';

  constructor(private http: HttpClient) {
    console.log("IN_MODEL_SERVICE")
    this.http.get('/api/message').subscribe((res: any) => {
      console.log("HELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO")
      this.value = res.text;
    })
  }
}
