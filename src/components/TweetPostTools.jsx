
import { FaRegImage, FaRegFaceSmile, FaRegCalendarCheck } from "react-icons/fa6";
import { AiOutlineFileGif, AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { PiImageLight } from "react-icons/pi";

export default function TweetPostTools({ tweettext, AddPost ,handleChange}) {








    return (

        <div style={{ display: 'flex', alignItems: 'center', gap: '340px' }}>
            <div style={{ display: 'flex', gap: '0px', alignItems: 'center', maxWidth: '200px' }}>

                <label for="file-input">
                <PiImageLight className="tweetLogo" style={{ color: 'dodgerblue', width: '40px', height: '40px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '50%' }} />

                </label>
                <input type="file" id="file-input" style={{display:'none'}} onChange={handleChange}/>
                <AiOutlineGif className="tweetLogo" style={{ color: 'dodgerblue', width: '40px', height: '40px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '50%' }} />
                <BiPoll className="tweetLogo" style={{ color: 'dodgerblue', width: '40px', height: '40px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '50%' }} />
                <FaRegFaceSmile className="tweetLogo" style={{ color: 'dodgerblue', width: '35px', height: '35px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '50%' }} />
                <FaRegCalendarCheck className="tweetLogo" style={{ color: 'dodgerblue', width: '35px', height: '35px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '50%' }} />
                <IoLocationOutline className="tweetLogo" style={{ color: 'dodgerblue', width: '40px', height: '40px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '50%' }} />

            </div>
            <button type="button" onClick={AddPost} className={tweettext.length > 0 ? "btnpost2 rounded-pill" : 'btnpost rounded-pill'}>Tweet</button>

        </div>



    )


}