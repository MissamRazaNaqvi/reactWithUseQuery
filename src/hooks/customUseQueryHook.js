import { useQuery } from "react-query"
import { fetchData } from "../api"

export const useListOfData = () => {
    return useQuery(['fackData'], fetchData, { staleTime: 50000 })
}