import React, { useEffect, useState } from 'react'
import Recent from '../../assets/icons/Recent'
import useAuth from '../../hooks/useAuth';
import useSWR, { mutate } from 'swr';

import axios from "axios";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from './BarChart';
import { Line } from 'react-chartjs-2';



Chart.register(CategoryScale);



export default function ChartsCard() {

    const {token} = useAuth()
    const chartsData = (url) => axios.get(url,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.data)
    const { data, error, isLoading } = useSWR(token?'https://react-camp-api.roocket.ir/api/admin/dashboard':'',chartsData)


    const [chartData, setChartData] = useState();
      useEffect(()=>{
        setChartData({
            labels: data?.data?.map((item) => item.date),
            datasets: [
              {
                label: "Amount",
                data: data?.data?.map((item) => item.amount),
                borderWidth: 2,
                borderColor: '#61D735',
                backgroundColor: 'rgba(97,215,53,0.2)',
                pointBackgroundColor:'#fff',
                pointStyle: 'circle',
                tension: 0.1,
                fill: true,
                borderRadius: 4,
                pointHoverRadius: 15
              }
            ]
          })
      },[data])

  return (
        <>
            <div className=' bg-[#dceefd] p-3 '>
               <div className={`'p-3  flex justify-between rounded-xl'`}>
                    <div className='flex items-center gap-x-3'>
                        <div className='w-10'>
                            <img src="/charts.png" alt="chartes" />
                        </div>
                        <div>
                            <p className='font-semibold text-xl tracking-wide'>Charts</p>
                            <div className='flex items-center -mt-1 text-sm text-neutral-600 font-extralight gap-x-1'>
                                <Recent />
                                <p>Recents</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`transition-all ease-in-out duration-500 m-3`}>
                {chartData?.labels?
                 <BarChart chartData={chartData} />:''}
            </div>
        
    </>
    )
}
