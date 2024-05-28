import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../home/home.component.html',
  styleUrls: ['../home/home.component.css']
})
export class HomeComponent {
  showPopup = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
