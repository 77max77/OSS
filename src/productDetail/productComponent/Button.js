import * as React from 'react';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';
export default function OutlinedButtons(props) {
  const [Add, setAdd]= useState([])
  const uid="test"
  const nid= "test"
  const count = 1
    const handleClick = (event) => {event.preventDefault()
        console.log('uid:', uid); 
        console.log('nid:', nid); 
        console.log('count:', count);

        fetch('http://172.16.37.236:3000/add', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({uid,nid,count}), // 'nid'와 'uid' 대신 'data'를 전송합니다
        })
        .then(response => {
            if (response.ok) {
                console.log('Add successful.');
                // store submitted review
                setAdd([...Add, {uid,nid,count}]); // 'add' 대신 'setSubmittedReviews' 사용
            } else {
                console.error('Error adding:', response.statusText);
            }
        })
        .catch(error => console.error('Error adding:', error));
    };

    return (
        <Button color="success" variant="outlined" href="#outlined-buttons" endIcon={<AddBoxIcon />} onClick={handleClick}>
          내가 먹는 영양제에 추가
        </Button>
    );
}
