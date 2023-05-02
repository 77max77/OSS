import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';

const Chart = (props) => {
  const maxBarSize = 500;
  const sectionSize = maxBarSize / 3;
  //권장량 50%미만 노랑 50% 이상 파랑 100% 초록 100%이상 빨강
  function barColor(value1, value2) {
    if (value1 > value2) {
      return 'red';
    } else if (value1 < value2/2) {
      return 'yellow';
    
    }else if (value1 >= value2/2 && value1 < value2) {
      return 'blue';
    }
    else {
      return 'green';
    }
  }

  useEffect(() => {
    window.addEventListener('load', () => {
      props.setFilledSize(maxBarSize);
    });
  }, []);

  let width = props.filledSize / 3;
  if (props.filledSize <= 10) {
    width *= 100;
  } else if (props.filledSize <= 100) {
    width *= 10;
  }else if (props.filledSize >= 1000) {
    width /= 2;
  }
  
  return (
    <div style={{ display: "flex", alignItems: "center" ,marginBottom:50,marginRight:50,marginLeft:50}}>
      <Typography sx={{ mr: 2 }}>{props.nname}</Typography>
      <div 
        style={{
          width: maxBarSize + "px",
          height: "30px",
          border: "2px solid black",
          borderRadius: "10px",
          position: "relative"
        }}
      >
        <div 
          style={{
            width: `${width}px`,
            height: "30px",
            backgroundColor: barColor(props.filledSize, props.standard),
            borderRadius: "10px"
          }}
        />
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: sectionSize + "px",
            width: "3px",
            height: "30px",
            backgroundColor: "black"
          }}
        />
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: sectionSize * 2 + "px",
            width: "3px",
            height: "30px",
            backgroundColor: "black"
          }}
        />
        <Typography
          sx={{ position: 'absolute', bottom: '-30px', left: `${width}px` }}
        >
          {props.filledSize}
          {props.unit}
        </Typography>
      </div> 
    </div>
  );
};

export default Chart;
/*
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
  { name: 'Page A', ub: 300 },
  { name: 'Page B', ub: 400 },
  { name: 'Page C', ub: 500 },
  { name: 'Page D', ub: 600 },
  { name: 'Page E', ub: 700 },
  { name: 'Page F', ub: 800 }
];

function barColor(value) {
  if (value > 500) {
    return 'blue';
  } else if (value < 500) {
    return 'red';
  } else {
    return 'green';
  }
}

export default function Chart() {
  return (
    <BarChart width={1000} height={500} data={data} layout="vertical">
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      {Object.keys(data[0])
        .filter((key) => key.startsWith('ub'))
        .map((key) => (
          <Bar
            key={key}
            dataKey={key}
            fill={ barColor('ub')}
            barSize={30}
          />
        ))}
    </BarChart>
  );
}
*/