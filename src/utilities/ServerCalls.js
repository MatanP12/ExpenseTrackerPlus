import axios from "axios";
import { useCallback, useEffect, useState } from "react";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    headers: {
        'Content-Type': 'application/json'
    }
});

function useGetData(url, onSuccessResponse = (data) => console.log(data), onErrorResponse = (error) => console.log(error)) {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(url);
                onSuccessResponse(response.data);
            } catch (err) {
                console.log(err);
                onErrorResponse(err)
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);
    return isLoading;
}

function usePostData(url, onSuccessResponse = (data) => console.log(data), onErrorResponse = (error) => console.log(error)) {

    const handlePostData = useCallback(async (expense) => {
        try {
            const response = await axiosInstance.post(url, expense);
            onSuccessResponse(response.data);
        } catch (err) {
            onErrorResponse(err);
        }
    }, [])
    return handlePostData;
}

function useDeleteData(url, onSuccessResponse = (data) => console.log(data), onErrorResponse = (error) => console.log(error)) {
    const handleDeleteData = useCallback(async (data) => {
        try {
            const response = await axiosInstance.delete(url + "/" + data.id);
            onSuccessResponse(data);

        } catch (err) {
            onErrorResponse(err);
        }
    }, [url]);
    return handleDeleteData;
}

function usePutData(url, onSuccessResponse = (data) => console.log(data), onErrorResponse = (error) => console.log(error)) {
    const handlePutData = useCallback(async (data) => {
        try {
            const response = await axiosInstance.put(url + "/" + data.id, data);
            onSuccessResponse(response.data);
        } catch (err) {
            onErrorResponse(err);
        }
    }, [url]);
    return handlePutData;
}

export { useGetData, usePostData, useDeleteData, usePutData }