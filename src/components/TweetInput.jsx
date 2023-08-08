import { Link } from "react-router-dom";


export default function TweetInput({value,handlechange ,file }){
    return(
      <>
        <div style={{display:'flex',gap:'10px',position:'relative',top:'-30px'}}>

   <Link to=''><img style={{maxWidth:'55px',borderRadius:'50%',margin:'10px 10px'}} src="3M2A5075.jpg"/></Link> 
    <input value={value} onChange={handlechange} style={{height:'70px',width:'100%',border: 'none',
  outline: 'none'}} type="texte" placeholder=" What is happening ?!"/>




</div>

<div>
<img src={file} style={{maxWidth:'300px',marginLeft:'70px'}}/>
</div>

</>
    )
}