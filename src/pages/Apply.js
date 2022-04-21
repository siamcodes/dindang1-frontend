import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
//import { useParams, useSearchParams } from "react-router-dom"
import { aboutDetailView, aboutListView } from "../store/AboutStore"
//import moment from 'moment';
import renderHTML from 'react-render-html';
import Jumbotron from "../layout/Jumbotron";
import Iframe from 'react-iframe'

const Apply = () => {
 // const { aboutID } = useParams()
  const abouts = useSelector(state => state.about.abouts)
  const about = useSelector(state => state.about.about)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAbout = async () => {
      await dispatch(aboutListView())
      setLoading(false)
    }
    loadAbout();

    const aboutDetail = async () => {
      await dispatch(aboutDetailView(`620d20607a0e8ff03e26a21b`))
      setLoading(false)
    }
    aboutDetail()
    
  }, [dispatch])

  return (
    !loading ?
      <div className="row">
        <div className="col-md-9">
          <div className="card">
            {/*  <img className='img-fluid' src={about.image} alt='aboutImage' /> */}
            <div className="jumbotron text-danger h1 fw-bold text-center">
              <Jumbotron text={[
                "โรงเรียนฝึกอาชีพกรุงเทพมหานคร (ดินแดง1)",
                "เปิดสอนหลักสูตรฝึกอาชีพระยะสั้น",
                "จบแล้ว ได้ใบประกาศจากกรุงเทพมหานคร"
              ]} />
            </div>
            <div className="card-body">
              <h2 className="card-title text-danger fw-bold ">
                {about.title}
              </h2>
              {about.content &&
                <div className="catd-text">{renderHTML(about.content)}</div>
              }

              <hr />
              <Iframe url="https://www.youtube.com/embed/gQENQe5yz4w"
                width="100%"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
            </div>

          </div>

        </div>
        <div className="col-md-3">
          <ul className="list-group list-group-flush mb-3">
            {abouts.map(about => (
              <li key={about} className="list-group-item list-group-item-action pointer fw-light" onClick={() => { window.location.href = `/about/${about._id}` }}> {about.title} </li>
            ))}
          </ul>
        </div>
      </div>
      :
      <h1 className="text-danger">...Loading</h1>
  )
}

export default Apply;



