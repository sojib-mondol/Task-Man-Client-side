import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import TaskCard from './TaskCard';

const MyTask = () => {
    const {data: tasks = [], isLoading} = useQuery({
        queryKey: ['tasks'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/tasks');
            const data = await res.json();
            return data;
        }
    });

    //console.log("dddddddddddddddddddddd", tasks);


    return (
        <div className='mt-28 mx-10'>
            
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        tasks.map(task => <TaskCard
                            key={task._id}
                            task={task}
                            // setProduct={setProduct}
                        ></TaskCard>)
                    }
            </div>
        </div>
    );
};

export default MyTask;