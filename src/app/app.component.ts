import { Component, OnInit } from '@angular/core';

import { AppService } from './core/service/app.service';
import { IEmergency } from './model/emergency.model';
import { ErrorModel } from './model/error.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'patronus';
  emergencies: IEmergency[] = [];
  error?: ErrorModel;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getEmergenciesData();
  }

  protected getEmergenciesData(): void {
    this.appService.getAllEmergencies().subscribe({
      next: (res: IEmergency[] | ErrorModel) => (this.emergencies = <IEmergency[]>res || []),
      error: (e: ErrorModel) => { this.error = e; console.log(e.friendlyMessage) },
      complete: () => console.log('Get emergencies req completed')
    });
  }
}
