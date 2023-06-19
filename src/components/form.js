import React from 'react'
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { addData } from '../api';

export default function AddData() {
    const QueryClient = useQueryClient()
    const { register, handleSubmit } = useForm();
    const onSubmit = ({ title }) => {
        mute.mutate({ title })
    };
    let mute = useMutation(
        ({ title }) => addData({ title }),
        {
            onSettled: () => QueryClient.invalidateQueries(["fackData"])
        }
    )
    return (
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="lastname">title:</label>
                    <input placeholder="todo"{...register('title')} />
                </div>
                <div>
                    <input type="submit" value='Add' />
                </div>
            </form>
        </div>
    )
}
