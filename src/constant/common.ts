export const enum RESPONSE_TYPE {
  QUESTION = 1,
  ANSWER = 2,
}

export interface IMessageProp {
  data: string;
  type: number;
  createdTime: string;
}

export enum ROUTE {
  CHANNEL = "/channel",
}
