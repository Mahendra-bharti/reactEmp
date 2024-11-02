import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = (props) => {
    return (
        <div className="bg-[#1C1C1C] h-screen p-4 sm:p-6 lg:p-10">
            <Header changeUser={props.changeUser} data={props.udata} />
            
        
            <div className="flex flex-col lg:flex-row gap-4 mt-4 sm:mt-6">
    
                <CreateTask className="w-full lg:w-1/2" />

       
                <AllTask className="w-full lg:w-1/2" />
            </div>
        </div>
    );
}

export default AdminDashboard;
