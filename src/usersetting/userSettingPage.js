import React, { useState,useEffect } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@material-ui/core';
import { BasicChips3 } from '../productDetail/productComponent/BasicChips';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
const UserInformationChangePage = () => {
  const [newInfo, setNewInfo] = useState('');
    
  const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [tall, setTall] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [isFormComplete, setIsFormComplete] = useState(false);


  //192.168.1.8
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleTallChange = (event) => {
      setTall(event.target.value);
    };
  
    const handleWeightChange = (event) => {
      setWeight(event.target.value);
    };
  
   
  
    const handleInfoChange = () => {
      // Logic to update user information
      console.log('New information:');
      console.log('Email:', email);
      console.log('Tall:', tall);
      console.log('Weight:', weight);
    };
  
    const handleWithdrawal = () => {
      // Logic to handle membership withdrawal
      console.log('Membership withdrawal');
      alert('회원 탈퇴 완료')
    };
  
  const [userInfo,setUserInfo] =useState({ 
    id: "koera",
    email: "sadfsd@gmail.com",
    username: "kim",
    tall: 178,
    weight: 65,
    age: 22
  })
  const [chainge, setChainge]= useState([])
  useEffect(() => {
    // Check if all fields are filled
    setIsFormComplete(!!email && !!tall && !!weight);
  }, [email, tall, weight]);

    /*  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
       var response =await axios.get(
        "http://172.16.37.125:3000/nutritional/AAM-00100",{id}
      );
      console.log(response.data)
      setres(response.data)
      setLoading(true);
    };
    fetchData();
  }, []);
*/

/*
    const handleClick = (event) => {event.preventDefault()

        fetch('http://172.16.37.236:3000/change', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id,email,username,tall,wegiht,age}),
        })
        .then(response => {
            if (response.ok) {
                console.log('change successful.');
                // store submitted review
                setChainge([...chainge, {id,email,username,tall,wegiht,age}]);
            } else {
                console.error('Error changing:', response.statusText);
            }
        })
        .catch(error => console.error('Error changing:', error));
    };

*/


  return (
    
      <Grid container spacing={5}  >
        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: '10px' }}>
            <Typography  variant="h6"><SettingsApplicationsIcon sx={{fontSize:50}}/>사용자 설정</Typography>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={1} >
                <Typography>아이디</Typography>
              </Grid>
              <Grid item xs={3} >
                <BasicChips3 info={userInfo.id}/>
              </Grid>
              <Grid item xs={8}>
             
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={1}>
                <Typography>이메일</Typography>
              </Grid>
              <Grid item xs={3} >
              <BasicChips3 info={userInfo.email}/>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Email"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
              
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={1}>
                <Typography>닉네임</Typography>
              </Grid>
              <Grid item xs={3} >
              <BasicChips3 info={userInfo.username}/>
              </Grid>
              <Grid item xs={8}>
                
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={1} >
                <Typography>키</Typography>
              </Grid>
              <Grid item xs={3} >
              <BasicChips3 info={userInfo.tall}/>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Tall"
                  fullWidth
                  value={tall}
                  onChange={handleTallChange}
                
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={1}>
                <Typography>몸무게</Typography>
              </Grid>
              <Grid item xs={3} >
              <BasicChips3 info={userInfo.weight}/>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Weight"
                  fullWidth
                  value={weight}
                  onChange={handleWeightChange}
                 
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <Grid item xs={1}>
                <Typography>나이</Typography>
              </Grid>
              <Grid item xs={3} >
              <BasicChips3 info={userInfo.age}/>
              </Grid>
              <Grid item xs={8}>
                
              </Grid>
            </Grid>
            <Button
          variant="contained"
          color="primary"
          onClick={handleInfoChange}
          fullWidth
          style={{ marginTop: '10px', height: 50 }}
          disabled={!isFormComplete} 
        >
          변경하기
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleWithdrawal}
          fullWidth
          style={{ marginTop: '10px', height: 50 }}
        >
          회원 탈퇴
        </Button>
          </Paper>
        </Grid>
      </Grid>
    
  );
};

export default UserInformationChangePage;