import {
    AxiosError
} from 'axios';


const errorHandler = (error: AxiosError | unknown, handleError: boolean) => {
    if (!handleError) {
        return Promise.reject(error);
    }

    const axiosError = (error as AxiosError).response;
    if (axiosError) {
        switch (axiosError.status) {
            case 400:
                break;
            case 401:
                
                break;
            case 422:
            default:
                break;
        }

    } 

    return Promise.reject(error);
};

export default errorHandler;