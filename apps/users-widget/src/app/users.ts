export interface User {
  readonly id: number;
  readonly name: string;
  readonly username: string;
  readonly email: string;
}

export type Users = ReadonlyArray<User>;
