import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query"
import { Link } from "react-router-dom";
import { deleteData, updateData } from './api.js'
import style from './assets/style.module.css'
import { useListOfData } from "./hooks/customUseQueryHook.js";
export default function Test() {
    const QueryClient = useQueryClient()
    const { data } = useListOfData()
    const [isUpdate, setIsUpdate] = useState(false);
    const [seletedId, setSeletedId] = useState(0);
    const onSubmit = ({ title }) => { updataeMute.mutate({ title, seletedId }) };
    const { register, handleSubmit, setValue } = useForm();
    let updataeMute = useMutation(
        (title, seletedId) => { updateData(title, seletedId) },
        { onSettled: () => QueryClient.invalidateQueries(['fackData']) }
    )
    let mute = useMutation(
        (id) => deleteData(id),
        { onSettled: () => QueryClient.invalidateQueries(["fackData"]) })
    return (
        <div>
            {isUpdate ?
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="lastname">title:</label>
                        <input placeholder="todo"{...register('title')} />
                    </div>
                    <div>
                        <input type="submit" value='Update' />
                    </div>
                </form> : ''
            }
            {data && data.data.map((item, index) => {
                return (
                    <div key={index} className={style.container} >
                        <Link to={`/list/${item.id}`}>
                            <div onClick={() => {
                                // setIsUpdate(true); 
                                setValue('title', item.title); setSeletedId(item.id)
                            }} className={style.title}>{item.title}</div></Link>
                        <span onClick={() => { mute.mutate(item.id) }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                            <g id="trash-2" transform="translate(-29 4.998)">
                                <path id="Union_10" data-name="Union 10" d="M3.407,15a1.95,1.95,0,0,1-1.972-1.92V3.84H.541a.543.543,0,0,1-.381-.154A.507.507,0,0,1,0,3.314a.532.532,0,0,1,.539-.521H3.588V1.92A1.952,1.952,0,0,1,5.563,0H8.437a1.949,1.949,0,0,1,1.972,1.92v.873h3.053A.533.533,0,0,1,14,3.314V3.32a.53.53,0,0,1-.539.52h-.9v9.24A1.95,1.95,0,0,1,10.588,15Zm-.892-1.92a.884.884,0,0,0,.892.875h7.181a.888.888,0,0,0,.9-.875V3.84H9.872a.583.583,0,0,1-.06,0H4.186c-.021,0-.039,0-.06,0H2.514ZM9.333,2.793V1.92a.885.885,0,0,0-.9-.871H5.563a.889.889,0,0,0-.9.871v.873ZM7.9,10.988V6.8a.538.538,0,0,1,1.075,0v4.184a.538.538,0,0,1-1.075,0Zm-2.872,0V6.8A.539.539,0,0,1,6.1,6.8v4.184a.539.539,0,0,1-1.077,0Z" transform="translate(29 -4.998)" fill="#72797e" />
                            </g>
                        </svg></span>
                    </div>
                )
            })}
        </div>
    )
}
