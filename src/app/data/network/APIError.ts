export interface APIError {
    message: string;
    status: number;
    parameter: string
    raw: Error;
}


