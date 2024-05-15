import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    standalone: true,
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Output() switchToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  private isToggleOn: boolean = false;
  
  switchToggleStatus() {
    this.isToggleOn = !this.isToggleOn;

    this.switchToggle.emit(this.isToggleOn);
  }

}