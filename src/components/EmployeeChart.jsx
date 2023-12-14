import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Label } from 'recharts';
import {useAPIData} from "../Custom API Hook/useAPIData"


const EmployeesChart=()=>{

    const {employees} = useAPIData()

    const data = [
        { name: 'Present', value: employees.length - 3 },
        { name: 'Absent', value: 3 },
      ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>

          <Pie label data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d"  >
            <Label label />

          	 <Cell fill={"#573CFA"}/>
          	 <Cell fill={"#E8083E"}/>
          </Pie>

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }

export default EmployeesChart;