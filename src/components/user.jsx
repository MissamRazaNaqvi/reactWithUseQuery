import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

export default function User() {
    let { id } = useParams()
    let { data } = useQuery('userdata', () => { return axios.get(`https://antoine.missamrazanaqvi.repl.co/reactQuery/${id}`) })
    return (
        <div>
            Users Page &nbsp; &nbsp;
            {data && data.data.title}
        </div>
    )
}
