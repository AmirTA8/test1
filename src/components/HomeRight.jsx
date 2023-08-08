import { AiOutlineSearch } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

export default function HomeRight(){

let sugg=[
    {
        ImgSugg:'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
        NameSugg:'Elon Musk',
        UserNameSugg:'elonmusk'
},

{
    ImgSugg:'https://pbs.twimg.com/profile_images/1616194284281028610/Qbh1uvrN_400x400.jpg',
    NameSugg:'Club Africain',
    UserNameSugg:'clubafricain'
},

{
    ImgSugg:'https://pbs.twimg.com/profile_images/1611332347470692353/h5JnKeil_400x400.jpg',
    NameSugg:'Leo Messi',
    UserNameSugg:'imessi'
},


]




    return(

        <div style={{position:'relative',left:'-200px',top:'-40px',paddingLeft:'20px'}}>
<div style={{ position:'relative',left:'0px',display:'flex',alignItems:'center',gap:'10px',backgroundColor :'#ececec',maxWidth:'350px',padding:'5px 20px'}} className="rounded-pill">
                <AiOutlineSearch />
                <input type="texte" style={{border: 'none',outline: 'none' ,backgroundColor:'#ececec',width:'400px'}} placeholder="Search Twitter"/>


            </div>


<div className="Sugg" >
    <h6 style={{fontWeight:'bold' , marginBottom:'20px'}}>Who to follow</h6>
    {sugg.map(s =>{
        return (
            <div className="follow" style={{display:'flex' , alignItems:'center' , gap:'20px', marginBottom:'20px'}}> 
            <img src={s.ImgSugg} style={{maxWidth:'40px',borderRadius:'50%' ,maxHeight:'40px'}}/>
            <div style={{display:'flex',flexDirection: 'column'}}> 
                <span>{s.NameSugg} <MdVerified style={{color:'dodgerblue'}}/> </span> 
                <span>@{s.UserNameSugg}</span>
            </div>
            <button className="rounded-pill" style={{width:'90px' ,height:'30px',marginLeft:'20px',backgroundColor:'black',color:'white'}}>Follow</button>
            </div>
        )
    })}

</div>


        </div>



    )
}