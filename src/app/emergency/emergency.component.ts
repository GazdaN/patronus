import { Component, Input } from "@angular/core";
import { IEmergency } from "../model/emergency.model";

@Component({
  selector: 'emergency',
  templateUrl: './emergency.component.html'
})

export class EmergencyComponent {

  @Input()
  emergencies!: IEmergency[];
}
