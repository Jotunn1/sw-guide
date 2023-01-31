import { useState, useEffect } from "react";

export type TApiResponse = {
    status: Number;
    statusText: String;
    response: any;
    error: any;
    isLoading: Boolean;
    nextPage: any;
};

export const useFetch = (url: string): TApiResponse => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>("");
    const [nextPage, setNextPage] = useState<String>("");
    const [response, setResponse] = useState<any>();
    const [error, setError] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getAPIData = async () => {
        setIsLoading(true);
        try {
            const apiResponse = await fetch(url);
            const json = await apiResponse.json();
            if (json.next) setNextPage(json.next);
            setStatus(apiResponse.status);
            setStatusText(apiResponse.statusText);
            setResponse(json);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getAPIData();
    }, []);

    return { status, statusText, response, error, isLoading, nextPage };
};
