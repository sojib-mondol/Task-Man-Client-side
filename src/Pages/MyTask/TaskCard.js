import React from 'react';

const TaskCard = () => {
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
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