import { Moment } from "moment";
import { IDevice } from "./device.model";
import { IUser } from "./user.model";

export interface IEmergency {
  id?: number;
  time?: Moment;
  device?: IDevice;
  user?: IUser;
}

export class Emergency implements IEmergency {
  constructor(
    public id?: number,
    public time?: Moment,
    public device?: IDevice,
    public user?: IUser
  ) { }

}
