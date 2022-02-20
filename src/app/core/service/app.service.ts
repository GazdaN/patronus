import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import * as moment from 'moment';
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';

import { Emergency, IEmergency } from "../../model/emergency.model";
import { IEmergencyResponse } from "../../model/emergency-response.model";
import { ErrorModel } from "src/app/model/error.model";

type EntityArrayHttpResponseType = HttpResponse<IEmergencyResponse[]>;

@Injectable({ providedIn: 'root' })
export class AppService {
  public static url = '/getAllEmergencies';

  constructor(private http: HttpClient) {
  }

  getAllEmergencies(): Observable<IEmergency[] | ErrorModel> {
    return this.http
      .get<EntityArrayHttpResponseType>(AppService.url, { observe: 'response' })
      .pipe(map((res: any) => this.convertEmergencyObjectFromServer(res.body.content)),
        catchError(e => this.handleHttpError(e)));
  }

  private convertEmergencyObjectFromServer(content: any): IEmergency[] {
    let emergencies: IEmergency[] = [];
    if (content) {
      content.forEach((element: IEmergencyResponse) => {
        emergencies.push(new Emergency(element.emergency?.emergencyId, moment(element.emergency?.requestTime), element.device, element.holder))
      });
    }
    return emergencies;
  }

  private handleHttpError(error: HttpErrorResponse): Observable<ErrorModel> {
    return throwError(() => new ErrorModel(error.status, error.statusText, 'Ops... An error occured when getting app data. Try again later.'));
  }

}

