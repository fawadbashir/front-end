import { useState, useCallback, useEffect, useRef } from 'react'


export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const activeHttpRequests = useRef([])


    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

        const httpAbortCntrl = new AbortController()
        activeHttpRequests.current.push(httpAbortCntrl)

        setIsLoading(true)
        try {


            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCntrl.signal
            })
            const responseData = await response.json()
            activeHttpRequests.current = activeHttpRequests.current.filter((reqCtrl) => reqCtrl !== httpAbortCntrl)
            if (!response.ok) {
                throw new Error(`can't process request`)
            }
            setIsLoading(false)
            return responseData
        } catch (e) {
            setError(e)
            setIsLoading(false)
            throw e
        }

    }, [])
    const clearError = () => {
        setError(null)
    }


    useEffect(() => {
        return () => activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort())
    }
        , [])

    return [isLoading, error, sendRequest, clearError]
}