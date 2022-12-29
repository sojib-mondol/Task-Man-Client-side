import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';
import TaskCard from './TaskCard';

const MyTask = () => {
    const [deleting, setDeleting] = useState(null);
    
    
    const navigate = useNavigate();
    const {data: tasks = [], refetch, isLoading} = useQuery({
        queryKey: ['tasks'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/tasks');
            const data = await res.json();
            return data;
        }
    });

    
    // for delete
    const handleDelete = task => {
        fetch(`http://localhost:5000/tasks/${task._id}`, {
            method: 'DELETE', 
            headers: {
                //authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${task.name} deleted successfully`)
            }
        })
    }

    //console.log("deddedeede", deleting);

    // if (isLoading) {
    //     return <Loading></Loading>
    // }


    return (
        <div className='mt-28 mx-10'>
            
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        tasks.map(task => <TaskCard
                            key={task._id}
                            task={task}
                            setDeleting={setDeleting}
                            deleting={deleting}
                            handleDelete={handleDelete}
                        ></TaskCard>)
                    }
            </div>
            
        </div>
    );
};

export default MyTask;