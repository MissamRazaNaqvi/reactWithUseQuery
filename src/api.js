import axios from "axios";

const baseUrl = 'https://antoine.missamrazanaqvi.repl.co/reactQuery'
export const fetchData = () => {
    return axios.get(baseUrl)
}
export const addData = ({ title }) => {
    return axios.post(baseUrl, { title })
}
export const deleteData = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}
export const updateData = (title, seletedId) => {
    return axios.put(`${baseUrl}/${seletedId}`, { title })
}
export const userdata = ( id ) => {
    return axios.get(`${baseUrl}/${id}`)

}