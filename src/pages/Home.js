import { Posts } from '../components/post/Posts';
import { Slides } from '../layout/Slides';
import Jumbotron from "../layout/Jumbotron";

export const Home = () => {
    return (
        <>
            <Slides />
            <div className="jumbotron text-danger h1 fw-bold text-center">
                <Jumbotron text={[
                    "โรงเรียนฝึกอาชีพกรุงเทพมหานคร (ดินแดง1)",
                    "กองส่งเสริมอาชีพ",
                    "สำนักพัฒนาสังคม",
                    "เปิดสอนหลักสูตรฝึกอาชีพระยะสั้น",
                    "จบแล้ว ได้ใบประกาศจากกรุงเทพมหานคร"
                ]} />
            </div>

            <Posts />
        </>
    )
}