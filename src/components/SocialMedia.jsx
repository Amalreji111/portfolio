import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF,FaGithubSquare } from 'react-icons/fa';
import { data } from '../constants/Data';

const SocialMedia = () => {
  
const handleClick=(link)=>{
  console.log(link)
  if(link!==undefined||link.length!==0){

    window.open(link)
  }

}
return  <div className="app__social">
<div   onClick={()=>{
    handleClick(data?.github)
  }}>

<BsGithub/>

</div>
<div  onClick={()=>{
    handleClick(data?.facebook)
  }}>
  <FaFacebookF />
</div>
<div  onClick={()=>{
    handleClick(data?.twitter)
  }}>
  <BsTwitter />
</div>
<div  onClick={()=>{
    handleClick(data?.instagram)
  }}>
  <BsInstagram />
</div>
</div>
}
 


export default SocialMedia;
