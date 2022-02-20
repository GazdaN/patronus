import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as moment from 'moment';
import { of } from 'rxjs/internal/observable/of';

import { AppComponent } from '../app.component';
import { AppService } from '../core/service/app.service';
import { IEmergency } from '../model/emergency.model';
import { TestModule } from './test.module';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: AppService;
  let testEmergencies: IEmergency[] = [
    { id: 123, time: moment("1998-05-02"), device: { serialNumber: '23456789' }, user: { firstName: 'Harry', lastName: 'Potter' } },
    { id: 234, time: moment("1980-07-31"), device: { serialNumber: '12345678' }, user: { firstName: 'Severus', lastName: 'Snape' } }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    service = fixture.debugElement.injector.get(AppService);
  });

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'patronus'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('patronus');
  });

  it('should call getAllEmergencies OnInit', () => {
    spyOn(service, 'getAllEmergencies').and.returnValue(
      of(testEmergencies));
    comp.ngOnInit();
    expect(service.getAllEmergencies).toHaveBeenCalled();
    expect(comp.emergencies).toEqual(testEmergencies);

  })
});
