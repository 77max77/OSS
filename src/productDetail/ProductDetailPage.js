
import Container from '@mui/material/Container';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ThirdCard from './productComponent/ThirdCard'
import SecondCard from './productComponent/SecondCard'
import FirstCard from './productComponent/FirstCard'
import AlignItemsList from './productComponent/ReviewList'
import { useState, useEffect } from "react"
import axios from "axios"
//import ForthCard from './ForthCard'
import FifthCard from './productComponent/FifthCard'
import SixCard from "./productComponent/SixCard";
import {useRef } from 'react';
export default function ProductDetail() {
  //const [reviews, setReviews] = useState(productInfo.reviews)
  /*const [productInfo, setProductInfo] = useState({
    id:"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/amx/amx22860/v/18.jpg",
    name:"AMINOCORE BCAA BCAA 8G + 설탕 0 + 탄수화물 0 블루 라즈베리 0.69lbs(315g)",
    company: "ALLMAX",
    rating: 3.5,
    sname1: "iherb",
    iherb_price: "31077",
    iherb_link:
      "https://kr.iherb.com/pr/allmax-aminocore-bcaa-blue-raspberry-0-69-lbs-315-g/98036",
    sname2: "naver",
    naver_price: "35350",
    naver_link: "https://search.shopping.naver.com/gate.nhn?id=85744837302",
    daily_eating: "1회 제공량: 1스푼(10.5g)",
    caution: "지침대로만 사용하십시오. 건강 관리 전문가가 처방하지 않는 한 만 18세 미만에게는 권장되지 않습니다. 비타민 B3(니아신)에 민감함 사람은 피부가 붉어질 수 있으며 이는 일반적으로 순하고 일시적입니다. 이전부터 질병이 있는 경우, 만성질환이 있는 경우, 임신 또는 수유 중인 경우, 처방약 또는 일반의약품을 복용 중인 경우에는 사용하지 마십시오. 부작용이 일어나면 사용을 중단하십시오. 직사광선을 피해 서늘하고 건조한 장소에 보관하십시오. 어린이와 반려동물이 만질 수 없는 곳에 보관하십시오. 내부 밀봉이 손상된 경우 사용하지 마십시오.제품은 중량별로 판매되지 않습니다.Prop 65: 캘리포니아 경고: 납은 캘리포니아주에서 선천적 결함 또는 생식기능의 손상을 유발하는 것으로 알려져 있습니다. 이 제품을 사용하면 0.0000005g을 초과하는 납에 노출될 수 있습니다.",
    nutrient_info: {
      류신: 3681000,
      발린: 2454000,
      엽산: "400",
      니아신: 20000,
      이소류신: 2045000,
      코발라민: "6",
      피리독신: 2000,
    },
    sub_nutrient_info:{
      "당류": "0g",
      "칼로리": "5",
      "총탄수화물": "0g"
    },
    affect:{
    effect1: "피로",
    effect2: "눈떨림",
    effect3: "소화"
  },
    reviews: [
      { usname: "Hong Gil-dong", rscore: 5, text: "I love you so much" },
      { usname: "Jang Bo-go", rscore: 4.5, text: "Good" },
      { usname: "Yi Soon-sin", rscore: 3, text: "Not so good" },
      { usname: "John Doe", rscore: 2, text: "Terrible" },
      { usname: "Jane Doe", rscore: 4, text: "Okay" },
      { usname: "Mark Smith", rscore: 3.5, text: "Average" },
      { usname: "Sarah Johnson", rscore: 5, text: "Amazing" },
      { usname: "Hong Gil-dong", rscore: 5, text: "I love you so much" },
      { usname: "Jang Bo-go", rscore: 4.5, text: "Good" },
      { usname: "Yi Soon-sin", rscore: 3, text: "Not so good" },
      { usname: "John Doe", rscore: 2, text: "Terrible" },
      { usname: "Jane Doe", rscore: 4, text: "Okay" },
      { usname: "Mark Smith", rscore: 3.5, text: "Average" },
      { usname: "Sarah Johnson", rscore: 5, text: "Amazing" },
      { usname: "Hong Gil-dong", rscore: 5, text: "I love you so much" },
      { usname: "Jang Bo-go", rscore: 4.5, text: "Good" },
      { usname: "Yi Soon-sin", rscore: 3, text: "Not so good" },
      { usname: "John Doe", rscore: 2, text: "Terrible" },
      { usname: "Jane Doe", rscore: 4, text: "Okay" },
      { usname: "Mark Smith", rscore: 3.5, text: "Average" },
      { usname: "Sarah Johnson", rscore: 5, text: "Amazing" }
    ],
  });*/
  const [ nid, setId ]= useState(sessionStorage.getItem("id"))
  const [loading, setLoading] = useState(false);
  const accessToken=sessionStorage.getItem("accessToken")
  const [ res, setres ]= useState(false)
  
   useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
       var response =await axios.get(
        "http://172.16.36.47:3000/nutritional/AAM-00181",{nid}
      );
      console.log(response.data)
      setres(response.data)
      setLoading(true);
    };
    fetchData();
  }, []);

  if(loading==false){
    return("로딩중")
  }
  

  const nutrient = [];
  const sub_nutrient =[];
  //하드코딩
  /*
  for (const [key, value] of Object.entries(productInfo.nutrient_info)) {
      nutrient.push({ nname: key, filledSize: value });
  }
  
  for (const [key, value] of Object.entries(productInfo.sub_nutrient_info)) {
    sub_nutrient.push({ nname: key, size: value });
}

  const affects = Object.values(productInfo.affect);
 */
  for (const [key, value] of Object.entries(res.product.nutrient_info)) {
    nutrient.push({ nname: key, filledSize: value });
}

for (const [key, value] of Object.entries(res.product.sub_nutrient_info)) {
  sub_nutrient.push({ nname: key, size: value });
}

//const affects = Object.values(res.product.affect);


  //하드 코딩
  /*
  const compare=()=>{
      if(productInfo.iherb_price>productInfo.naver_price){
        return (parseInt(productInfo.naver_price).toLocaleString())
      }else{
        return (parseInt(productInfo.iherb_price).toLocaleString())
      }
  }
  const compare_link=()=>{
    if(productInfo.iherb_price>productInfo.naver_price){
      return (productInfo.naver_link)
    }else{
      return (productInfo.iherb_link)
    }
}
*/

const compare=()=>{
  if(res.product.iherb_price>res.product.naver_price){
    return (parseInt(res.product.naver_price).toLocaleString())
  }else{
    return (parseInt(res.product.iherb_price).toLocaleString())
  }
}
const compare_link=()=>{
if(res.product.iherb_price>res.product.naver_price){
  return (res.product.naver_link)
}else{
  return (res.product.iherb_link)
}
}


 

  const handleReviewLinkClick = () => {
    window.location.href ="";
  };
 
  return (
      <Container sx={{mt:5}}>
      
       {//하드코딩
        }{/*
        <Link size="large"  color="#78909c">{productInfo.company}</Link>
        -
        <Link size="large"  color="#78909c" onClick={handleReviewLinkClick}>{productInfo.name}</Link>
        */}
        <Link size="large"  color="#78909c">{res.product.company}</Link>
        -
        <Link size="large"  color="#78909c" onClick={handleReviewLinkClick}>{res.product.name}</Link>
      
        {//하드코딩
        }{ /*
        <FirstCard 
          pimage ={productInfo.id}
          pname ={productInfo.name}
          pform ={productInfo.company}
          prating ={productInfo.rating}
          sname1 ={productInfo.sname1}
          price1 ={parseInt(productInfo.iherb_price).toLocaleString()}
          plink1 ={productInfo.iherb_link}
          sname2 ={productInfo.sname2}
          price2 ={parseInt(productInfo.naver_price).toLocaleString()}
          plink2 ={productInfo.naver_link} 
          lowPrice ={compare()}
          lowPrice_link = {compare_link()}

        ></FirstCard>
       */} 
        <FirstCard 
          //pimage ={""}
          pname ={res.product.name}
          pform ={res.product.company}
          prating ={res.product.rating}
          sname1 ={"iherb"}
          price1 ={parseInt(res.product.iherb_price).toLocaleString()}
          plink1 ={res.product.iherb_link}
          sname2 ={"naver"}
          price2 ={parseInt(res.product.naver_price).toLocaleString()}
          plink2 ={res.product.naver_link} 
          lowPrice ={compare()}
          lowPrice_link = {compare_link()}

        ></FirstCard>
   
        <Typography  sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
        영양제 영양소 확인
        </Typography>
        <SixCard 
          vitamins={nutrient}
          sub_Vitamins={sub_nutrient}
        >
          
        </SixCard>
        <Typography  sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          제품 효과 
        </Typography>
       {// <SecondCard affect={affects}></SecondCard>
}
        <Typography  sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          복용법
        </Typography>
        {// 하드코딩
        }{/*
        <ThirdCard 
        eat={productInfo.daily_eating}
        caut={productInfo.caution}>
        </ThirdCard>
        */}
        <ThirdCard 
        eat={res.product.daily_eating}
        caut={res.product.caution}>
      </ThirdCard>
        <Typography  sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          제품 리뷰
        </Typography>
        <AlignItemsList reviews={res.review}></AlignItemsList> 

        <Typography  sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          리뷰 작성
        </Typography>
        <FifthCard id={res.product.id}/>

      </Container>
  );
}