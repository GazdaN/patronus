export interface IUser {
  firstName?: string;
  lastName?: string
}

export class User implements IUser {
  constructor(
    public firstName?: string,
    public lastName?: string
  ) { }
}
