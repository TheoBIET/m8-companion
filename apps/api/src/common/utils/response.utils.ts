import { Status } from "../enums";

export class Response {
  static success<T>({
    status = Status.OK,
    message = "Request successful",
    data,
  }: {
    status?: Status;
    message?: string;
    data: T;
  }) {
    return {
      message,
      status,
      data,
    };
  }
}
