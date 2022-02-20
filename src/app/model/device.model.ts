export interface IDevice {
  serialNumber?: string;
}

export class Device implements IDevice {
  constructor(
    public serialNumber?: string,
  ) { }
}
