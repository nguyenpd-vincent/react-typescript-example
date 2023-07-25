declare namespace API {
  type ErrorResponse<T> = {
    data?: T;
    msg?: string;
  };
  type SuccessRes = {
    success: boolean;
  };
}
