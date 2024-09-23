import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  title = 'administracao_cliente';

  constructor(private fireMessaging: AngularFireMessaging) {}

  ngOnInit() {
    this.fireMessaging.requestPermission.subscribe(
      (res) => {
        console.log('Permission granted:', res);
      },
      (err) => {
        console.error('Permission denied:', err);
      }
    );

    this.fireMessaging.messages.subscribe((payload) => {
      console.log('Message received:', payload);
    });

    this.fireMessaging.getToken.subscribe(
      (token) => {
        console.log('FCM Token:', token);
      },
      (err) => {
        console.error('Unable to get FCM token:', err);
      }
    );
  }
}
