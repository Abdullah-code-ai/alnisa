import React from 'react'
import './CourseFeatures.css'
import img from '../../Assets/certificate-400x400.png'
import img1 from '../../Assets/free-400x4001.png'
import img2 from '../../Assets/muslim-teacher-near-blackboard-back-cshool-illustration_567314-158-400x400.webp'
import img3 from '../../Assets/24-hours-400x400.png'
import img4 from '../../Assets/videoconference-400x400.png'
import ContactFormMain from '../RegisterNow/ContactFormMain'
const CourseFeatures = () => {

   
  return (
   <>
   <div className="container-fluid mt-5 bg-image-10">
    <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 mt-2">

<ContactFormMain />
      









        </div>
        <div className="col-sm-12 col-md-12 col-lg-6  ">

      <div className="course-contact-form">
<h1 className="text-center main-1-heading-">Course Features</h1>

<div className='d-flex'>

<img src={img} className='course-imagess' width={80} height={80}  alt="" /><h1 className='main-1-heading--'>Completion Certificates</h1>
</div>
<div className='d-flex'>

<img src={img1} className='course-imagess'  width={80} height={80}  alt="" /><h1 className='main-1-heading-- mt-3'>Free Trial Class</h1>
</div>
<div className='d-flex'>

<img src={img2} className='course-imagess' width={80} height={80}  alt="" /><h1 className='main-1-heading--'>Completion Certificates</h1>
</div>
<div className='d-flex'>

<img src={img3} className='course-imagess' width={80} height={80}  alt="" /><h1 className='main-1-heading--'>Completion Certificates</h1>
</div>
<div className='d-flex'>

<img src={img4} className='course-imagess' width={80} height={80}  alt="" /><h1 className='main-1-heading--'>Completion Certificates</h1>
</div>
      </div>
        </div>
    </div>
   </div>
   
   
   
   
   
   </>
  )
}

export default CourseFeatures
