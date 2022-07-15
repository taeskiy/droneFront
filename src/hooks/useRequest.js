import React from "react"
import {request} from "../services/api/request";

export function useRequest(url = '', params = {}) {
    if (!url) {throw new Error("missing url in arguments")}

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null)
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const getData = async () => {
            try {
                const {data: responseData} = await request.get(url, {params})
                setData(responseData)
            } catch (e) {
                setError(error?.response?.data || error)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [])

    return {data, loading, error}
}