import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./aboutComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
            <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/about.png`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  About me
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                    <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>Sept 17 2006</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+66 083-651-6651</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Hatyai, Songkhla, Thailand</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Nationality:</strong> <span>Thai</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Religion:</strong> <span>Buddhist</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Programming languages:</strong> <span>C++, C#, Python, Some Javascript</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>18</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jirakorn.sukmee@gmail.com</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Hobbies:</strong> <span>Projects, Reading, Coding</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Talents:</strong> <span>Reading/Speaking English, CAD Designs, Circuit Designs</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Interests:</strong> <span>Engineering, Robotics, Electrical Circuits</span></li>
                </p>
              </div>
              
            </div>
            <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                Aspiring engineer. ศึกษาอยู่ที่โรงเรียนหาดใหญ่วิทยาลัยในห้องเรียนพรีเมียมวิทยาศาสตร์ เทคโนโลยี และออกแบบสถาปัตย์ มีความสนใจอย่างสูงในด้านวิศวกรรมไฟฟ้า วิศวกรรมแมคคาทรอนิกส์ และหุ่นยนต์ มีความสามารถในการใช้งานและออกแบบโปรแกรม Fusion 360 มีความรู้ในการออกแบบและทำโปรเจกต์เล็กๆ จนถึงโปรเจกต์ใหญ่ที่กำลังพัฒนาอย่างต่อเนื่อง
                </p>
          </Fade>
        </div>
        <Fade bottom duration={1000} distance="40px">
        <div className="basic-contact">
        <h1
          className="contact-heading-text"
          style={{ color: theme.text }}
          >
            My Skills
          </h1>
          <div className="skill-box">
                <span className="contact-header-detail-text subTitle">Fusion 360</span>
                <div className="skill-bar">
                    <span className="skill-per fusion">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="contact-header-detail-text subTitle">C++</span>
                <div className="skill-bar">
                    <span className="skill-per cpp">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="contact-header-detail-text subTitle">Arduino</span>
                <div className="skill-bar">
                    <span className="skill-per arduino">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
          
            <div className="skill-box">
                <span className="contact-header-detail-text subTitle">ROS2</span>
                <div className="skill-bar">
                    <span className="skill-per ros2">
                        <span className="tooltip">30%</span>
                    </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="contact-header-detail-text subTitle">Control System Design</span>
                <div className="skill-bar">
                    <span className="skill-per csd">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="contact-header-detail-text subTitle">IOT</span>
                <div className="skill-bar">
                    <span className="skill-per iot">
                        <span className="tooltip">20%</span>
                    </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="contact-header-detail-text subTitle">Web design</span>
                <div className="skill-bar">
                    <span className="skill-per webd">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
              </div>
        </div>
        </Fade>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
