import { Link } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';
import TweetInput from "./TweetInput";
import { FaRegImage, FaRegFaceSmile, FaRegCalendarCheck } from "react-icons/fa6";
import { AiOutlineFileGif, AiOutlineGif ,AiOutlineSearch } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { PiImageLight } from "react-icons/pi";
import { useState } from "react";
import TweetPostTools from "./TweetPostTools";
import { MdVerified } from "react-icons/md";




export default function TweetPost() {

    let [tweettext, settweettext] = useState('')
    let [Posts, setPosts] = useState([])
    const [file, setFile] = useState();


    const test = {
        id:'hdhdh',
        value:'test'
    }
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        
    }





    function AddPost(e) {


        const post = {
            id: Posts.length + 1,
            value: tweettext,
            img: file ,
            NameAuthor: 'Tahari Amir',
            UserNameAuthor: 'AmirTa',
            imageAuthor: '3M2A5075.jpg'

        };



        if (tweettext == "") {
            alert('you need to enter your task')
        }
        else (

            setPosts(prev => [...prev, post]),
            settweettext(""),
            setFile(""),
            console.log(Posts)
            )
    }

    return (
        <div style={{ position: 'relative', left: '-75px', top: '-30px' }}>

            <div style={{ display: 'flex', gap: '', }}>
                <h6 className="tweetText" style={{ padding: '20px 130px' }}>For you</h6>
                <h6 className="tweetText" style={{ padding: '20px 130px' }}>Following</h6>

            </div>



            <hr style={{ width: "100%", position: 'relative', top: '-25px' }}></hr>



            <TweetInput value={tweettext} handlechange={e => settweettext(e.target.value)} file={file} />
            <TweetPostTools tweettext={tweettext} AddPost={AddPost} handleChange={handleChange}/>




            <hr style={{ width: "100%", position: 'relative', top: '-10px' }}></hr>

            <ul style={{ padding: '0px' }}>
                {Posts.map(p => {

                    return (

                        <div style={{ width: '645px', padding: '20px' }} className="postCSS">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <img style={{ maxWidth: '50px', borderRadius: '50%' }} src={p.imageAuthor} />
                                <h6>{p.NameAuthor}</h6>
                                <MdVerified style={{ color: 'dodgerblue' }} />
                                <span style={{ color: 'gray' }}>{p.UserNameAuthor}</span>


                            </div>
                            <p style={{ margin: '20px' }}>{p.value}</p>
                            <img src={p.img} style={{maxWidth:'500px'}}/>
                        </div>








                    )

                })}
            </ul>

        </div>
    )



}