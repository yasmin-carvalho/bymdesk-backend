class ApiError {
  public message: string;
  public code: number;
  constructor(code: number, message?: string) {
    this.message = message;
    this.code = code;
  }
}
export { ApiError };
