import React from "react";
import { FaUsers, FaStar } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./Courses.scss";
import CourseImage1 from "../../assets/images/course-1.jpg";
import CourseImage2 from "../../assets/images/course-2.jpg";
import CourseImage3 from "../../assets/images/course-3.jpg";
import CourseImage4 from "../../assets/images/course-4.jpg";
import CourseImage5 from "../../assets/images/course-5.jpg";
import CourseImage6 from "../../assets/images/course-6.jpg";

const Courses: React.FC = () => {
  const courses = [CourseImage1, CourseImage2, CourseImage3, CourseImage4, CourseImage5, CourseImage6];

  return (
    <section className="courses container">
      <div className="courses-header">
        <h5 className="subtitle">Courses</h5>
        <h1 className="title">Our Popular Courses</h1>
      </div>
      <div className="courses-wrapper">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
              <img className="course-img" src={course} alt="Course" />
              <div className="content">
                <div className="info">
                  <small>
                    <FaUsers className="icon-primary" /> 25 Students
                  </small>
                  <small>
                    <AiOutlineClockCircle className="icon-primary" /> 01h 30m
                  </small>
                </div>
                <a className="course-title" href="#">
                  Web design & development courses for beginner
                </a>
                <div className="rating">
                  <h6 className="rating-text">
                    <FaStar className="icon-primary" /> 4.5 <small>(250)</small>
                  </h6>
                  <strong className="price">$99</strong>
                </div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
