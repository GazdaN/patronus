import { IDevice } from "./device.model";
import { IUser } from "./user.model";

export interface IEmergencyResponse {
  emergency?: IEmergencyNested;
  device?: IDevice;
  holder?: IUser;
}

export class EmergencyResponse implements IEmergencyResponse {
  constructor(
    public emergency?: IEmergencyNested,
    public device?: IDevice,
    public holder?: IUser
  ) { }

}

export interface IEmergencyNested {
  emergencyId?: number;
  requestTime?: string
}

export class EmergencyNested implements IEmergencyNested {
  constructor(
    public emergencyId?: number,
    public requestTime?: string
  ) { }

}
