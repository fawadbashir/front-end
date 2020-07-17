import { useState, useCallback, useEffect, useRef } from 'react'


export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

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
                console.log(response)
                // throw new Error(`can't process request`)
            }
            console.log(response)
            setIsLoading(false)
            return responseData
        } catch (e) {
            console.log(e.message)
            setError(e)
            setIsLoading(false)
            
        }

    }, [])
    const clearError = () => {
        setError('')
    }


    useEffect(() => {
        return () => activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort())
    }
        , [])

    return {isLoading, error, sendRequest, clearError}
}