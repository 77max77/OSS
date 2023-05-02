
import Container from '@mui/material/Container';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ThirdCard from './productComponent/ThirdCard'
import SecondCard from './productComponent/SecondCard'
import FirstCard from './productComponent/FirstCard'
import AlignItemsList from './productComponent/ReviewList'
import {useState} from 'react'
//import ForthCard from './ForthCard'
import FifthCard from './productComponent/FifthCard'
import SixCard from "./productComponent/SixCard";
import {useRef } from 'react';
export default function ProductDetail() {

  const [productInfo, setProductInfo] = useState(
    { pimage:"https://questlife.co.kr/web/product/big/202107/f23dcb994e95fc8258874500da0313e2.png", 
      pname: "product name",
      pfrom: "제조사", 
      prating:3.5, 
      sname1: "ihub", 
      price1: "10,000",
      sname2: "naver", 
      price2: "12,500"}
  );

  const [affects, setmAffect] = useState(
    ["피로해소","눈떨림"]
   
  );
  
  const [vitamins, setVitamins] = useState([
    { nname: "비타민A", unit: "mg", filledSize: 400 ,standard:1000},
    { nname: "비타민B", unit: "g", filledSize: 700,standard:700 },
    { nname: "비타민C", unit: "g", filledSize: 310 ,standard:600},
    { nname: "비타민D", unit: "ml", filledSize: 500 ,standard:400},
    { nname: "비타민E", unit: "g", filledSize: 8.5,standard:2 }
  ]);
  
  const [times,setTimes]= useState({ti:2})

  const [reviews, setReviews] = useState([
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
    { usname: "Sarah Johnson", rscore: 5, text: "Amazing" },
  ]);
  const compare=()=>{
      if(productInfo.price1>productInfo.price2){
        return (productInfo.price2)
      }else{
        return (productInfo.price1)
      }
  }

  const bottomContainerRef = useRef(null);

  const handleReviewLinkClick = () => {
    window.location.href = "https://search.shopping.naver.com/catalog/28653191554?query=%EC%96%BC%EB%9D%BC%EC%9D%B4%EB%B8%8C&NaPm=ct%3Dlgwf135c%7Cci%3D291515d2937c4c6fda3a4896da836559bd4c5517%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D9add33888b9661b78f115611445deaf9a1b26ad1";
  };
  return (
    <div>
      <Container fixed sx={{mt:5}}>
        <Link fixed size="large"  color="#78909c">{productInfo.pfrom}</Link>
        -
        <Link fixed size="large"  color="#78909c" onClick={handleReviewLinkClick}>{productInfo.pname}</Link>
        <FirstCard 
          pimage ={productInfo.pimage}
          pname ={productInfo.pname}
          pform ={productInfo.pfrom}
          prating ={productInfo.prating}
          sname1 ={productInfo.sname1}
          price1 ={productInfo.price1}
          sname2 ={productInfo.sname2}
          price2 ={productInfo.price2} 
          lowPrice ={compare()}
        ></FirstCard>        
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
        영양제 영양소 확인
        </Typography>
        <SixCard vitamins={vitamins}></SixCard>
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          제품 효과 
        </Typography>
        <SecondCard affects={affects}></SecondCard>
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          복용법
        </Typography>
        <ThirdCard times={times}></ThirdCard>
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          제품 리뷰
        </Typography>
        <AlignItemsList reviews={reviews}></AlignItemsList> 
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          리뷰 작성
        </Typography>
        <FifthCard/>

      </Container>
    </div>
  );
}