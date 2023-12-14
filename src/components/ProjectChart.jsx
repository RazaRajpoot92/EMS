import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import data from '../Chart Data/ProjectData';


const ProjectChart=()=> {

    return (

      <ResponsiveContainer width="100%" height="40%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" />
          <YAxis />
          <Tooltip  />
          <Legend />
          <Line strokeWidth={4} type="monotone" dataKey="Revenue" stroke="#8884d8" activeDot={{ r: 10 }} />
          <Line strokeWidth={4}  type="monotone" dataKey="Time" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );


}

export default ProjectChart;