import React from 'react';
import Header from '../others/Header';
import TaskListNumber from '../others/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className="bg-[#1C1C1C] h-screen p-4 sm:p-6 lg:p-10">
      <Header changeUser={props.changeUser} data={props.data} />

     
      <div className="flex flex-col lg:flex-row gap-4 mt-4 sm:mt-6">
       
        <div className="w-full lg:w-1/3">
          <TaskListNumber data={props.data} />
        </div>

       
        <div className="w-full lg:w-2/3">
          <TaskList data={props.data} />
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
