import React from 'react';
import {Line} from 'react-chartjs-2';
const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      
      {
        label: "",
        data: [45, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      },
      {
        label: ".",
        data: [33, 40, 30, 80, 54, 60],
        fill: false,
        borderColor: "blue"
      }
    ]
  };

const legend={
    display:false
}

const options ={
    title:{
        display:false,
    },
    bezierCurve: false,
    animation: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
        }
    },
    scales:{
        yAxes:[{
            ticks:{
                display:false,
            },
            gridLines:{
                color:"rgba(0,0,0,0)"
            }
        }]
    }
}

const MyChart=()=>{
    return(
        <div className="container shadow" style={{marginTop:"30px"}}>
        <Line data={data} legend={legend} options={options}/>
        </div>
        
    )
}

export default MyChart