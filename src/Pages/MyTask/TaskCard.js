import React from 'react';

const TaskCard = ({task}) => {
    const {name, TaskDetails, _id, image} = task;
    console.log("TasK", task);
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={image} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{name}</div>
                    <p class="text-gray-700 text-base">
                    {TaskDetails}
                    </p>
                </div>
                <div class="px-6 py-4 grid gap-2 grid-flow-col">
                    <button className='bg-indigo-600 hover:bg-indigo-400 mt-2 text-white font-bold py-2 px-2 rounded'>UPDATE</button>
                    <button className='bg-indigo-600 hover:bg-indigo-400 mt-2 text-white font-bold py-2 px-2 rounded'>DELETE</button>
                    <button className='bg-indigo-600 hover:bg-indigo-400 mt-2 text-white font-bold py-2 px-2 rounded'>COMPLEATE</button>
                </div>
                
            </div>
        </div>
    );
};

export default TaskCard;