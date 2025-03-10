import photoMentor from "../../img/МенторінаMentorina-photo-zero-radius.png";
import bellIcon from "../../img/bell.png";
import noteIcon from "../../img/note.png";
import chatIcon from "../../img/chat-icon.png";
import swimmingPhoto from "../../img/unsplash_1dQVmmo19twswimming_none_border.png";
import childPhoto from "../../img/unsplash_h1vdmVQqPmMswimming_child.png";
import studentOne from "../../img/student1.png";
import studentTwo from "../../img/student2.png";
import comment from "../../img/commment.png";
import stars from "../../img/stars.png";
import "../../Styles/profile/profileMentor.css";
import "../../Styles/profile/dycalendar.css";
// import dycalendar from  "../../Components/profile/dyCalendar.js";
import Nav from "../../Components/main/Nav";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


// import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';


const profileMentor = () => {
  return ( 
    <>
    <Nav></Nav>
     <div class="wrapper-profileMentor">
    <div class="first-page">
      <div class="upper-section">
        <div class="upper-section-content">
          <div class="title-wrapper">
            <div class="title-container">
              <h1 class="head-title">
                Менторіна Батьківна
              </h1>
              <h2 class="under-head-title">
                Ментор з плавання
              </h2>
    
            </div>
          </div>
          <div class="button-edit-wrapp">
            <Link to="/profile-mentor-redo"> 
              <button class="button-edit">Редагувати профіль</button>
            </Link>
          </div>
        </div>

      </div>
      <div class="left-and-right">
        <div class="left-section">
          <div class="photo-container">
              <img class="photo-avatar" src={photoMentor} alt="Mentor photo"/>
          </div>
          <div class="functions-container">
            <div class="functions-title">
              <div class="functions-title-shape">
                <div class="functions-title-text">Функції</div>
              </div>
            </div>
            <div class="three-functions-container">
              <div class="one-of-three-function">
                <img class="bell-div" src={bellIcon} alt="bell ring"/>
                <div class="func-text">
                  Нагадування
                </div>
              </div>
              
              <div class="one-of-three-function">
                <img class="note-div" src={noteIcon} alt="bell ring"/>
                <div class="func-text">
                  <Link to="/view-notes">
                  Нотатки
                  </Link>
                </div>
              </div>
              <div class="one-of-three-function">
                <img class="chat-div" src={chatIcon} alt="bell ring"/>
                <div class="func-text">
                  Чат
                </div>
              </div>
            </div>
          </div>
          <div class="about-me-container">
            <div class="about-me-title-container">
              <div class="about-me-title-shape">
                <div class="about-me-title-text">Про мене</div>
              </div>
            </div>
            <div class="about-me-content-container">
              <ul class="left">
                <li><strong>Напрям:</strong>
                  <ul>
                    <li class="sub">Плавання</li>
                    <li class="sub">Фітнес</li>
                  </ul>
                </li>
                <li><strong>Досвід роботи:</strong>
                <ul class="left" >
                  <li class="sub">
                    10 років
                  </li>
                </ul>
                </li>
                <li><strong>Місцезнаходження:</strong>
                  <ul class="left">
                    <li class="sub">
                      Львів, Україна
                    </li>
                  </ul>
              
                </li>
                <li><strong>Вік:</strong>
                  <ul class="left">
                    <li class="sub"> 
                      37 років
                    </li>
                  </ul>
                </li>
                <li><strong>Вид занять:</strong>
                  <ul class="left">
                    <li class="sub">Індивідуальні</li>
                    <li class="sub">Гупові</li>
                  </ul>
                </li>
                <li><strong>Формат занять:</strong>
                  <ul class="left">
                    <li class="sub">Онлайн</li>
                    <li class="sub">Офлайн</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="contacts-container">
            <div class="contacts-title-container">
              <div class="contacts-title-shape">
                <div class="contacts-title-text">
                  Контакти
                </div>
              </div>
            </div>
            <div class="contacts-content-container">
              <ul class="email-ul">
                <li class="sub">mentorivna1986@gmail.com</li>
                <li class="sub">lovepuppys0412@gmail.com</li>
              </ul>
            </div>
          </div>
          </div>
          {/* <div class="contacts-container">
            <div class="contacts-title-container">
              <div class="contacts-title-shape">
                <div class="contacts-title-text">
                  Контакти
                </div>
              </div>
            </div>
            <div class="contacts-content-container">
              <ul class="email-ul">
                <li class="sub">mentorivna1986@gmail.com</li>
                <li class="sub">lovepuppys0412@gmail.com</li>
              </ul>
            </div>
          </div> */}
        </div>
        <div class="right-section">
          <div class="description-container">
            <div class="description-title">
              Короткий опис
            </div>
            <div class="description-bio-content">
              <ul>
                <li>
                  Шось тут пише ляляляляя;
                </li>
                <li>
                  Шось тут пише ляляляляя;
                </li>
                <li>
                  Шось тут пише ляляляляя;
                </li>
                <li>
                  Шось тут пише ляляляляя;
                </li>
                <li>
                  Шось тут пише ляляляляя;
                </li>
                <li>
                  Шось тут пише ляляляляя;
                </li>
              </ul>
            </div>
          </div>
          <div class="my-courses-wrapper">
            <div class="my-courses-title">
              <button className="function-btn">Мої курси:</button>
            </div>
            <div class="my-courses-blocks-container">
              <div class="my-courses-block">
                <div class="courses-content-all">
                  <img class="courses-photo" src={swimmingPhoto} alt="Swim courses"/>
                  <div class="content-section">
                    <div class="description-course-title">Підготовка до спортивних змагань:</div>
                  </div>
                  <div class="description-of-description-content">
                    Змагання на носі, а ви не знаєте, як до них підготуватись?
                  </div>
                  <div class="bottom-information-section-description">
                    <div class="price-section">
                      <div class="price-section-text">Ціна заняття: 
                      </div>
                      <div class="price-section-price">
                        350 грн
                      </div>
                    </div>
                    <div class="duration-section">
                      <div class="duration-text">
                        Тривалість заняття:
                      </div>
                      <div class="duration-length">
                        1,5 год
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="my-courses-block">
               <div class="courses-content-all">
                
                <img class="courses-photo" src={childPhoto} alt="Swim courses"/>
                
                <div class="content-section">
                  <div class="description-course-title">
                    Навчимо дитину плавати:
                  </div>
                </div>
                <div class="description-of-description-content">
                  Навчимо вашу дитину плавати, триматись на воді та занурюватись!
                </div>
                <div class="bottom-information-section-description">
                  <div class="price-section">
                    <div class="price-section-text">Ціна заняття: 
                    </div>
                    <div class="price-section-price">
                      450 грн
                    </div>
                  </div>
                  <div class="duration-section">
                    <div class="duration-text">
                      Тривалість заняття:
                    </div>
                    <div class="duration-length">
                      2 год
                    </div>
                  </div>
                </div>
               </div>
              </div>
  
              </div>
            </div>
            {/* <div class="calendar-wrapper">
              <div class="calendar-title-container">
                <div class="calendar-title-text">
                  Мій розклад:
                </div>
              </div>
              <div id="dycalendar"></div>
              <script src={dycalendar}></script>
              <script> {dycalendar.draw({
                  
                  target: '#dycalendar',
                  type: 'month',
                  highlighttargetdate: true,
                  prevnextbutton: 'show'
                })
                }
              </script>
            </div> */}
            <div className='calendar'>
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker orientation="landscape" />
    </LocalizationProvider>
    </div>
            <div class="my-students-wrapper">
              <div class="my-students-title-container">
                <div class="my-students-title-shape">
                  <div class="my-students-title-text">
                    Мої учні:
                  </div>
                </div>
              </div>
              <div class="my-students-list-container">
                <div class="block-student">
                    <img class="student-photo"  src={studentOne} alt="Student"/>
                    <ul class="student-text">
                      <li class="student">
                        Учень Учньович
                      </li>
                      <li class="student-email">uchnivskaposhta@gmail.com</li>
                    </ul>
                </div>
                <div class="block-student">
                  <img class="student-photo"  src={studentTwo} alt="Student"/>
                  <ul class="student-text">
                    <li class="student">
                      Учень Учньович
                    </li>
                    <li class="student-email">uchnivskaposhta@gmail.com</li>
                  </ul>
                </div>
                <div class="block-student">
                  <img class="student-photo"  src={studentOne} alt="Student"/>
                  <ul class="student-text">
                    <li class="student">
                      Учень Учньович
                    </li>
                    <li class="student-email">uchnivskaposhta@gmail.com</li>
                  </ul>
                </div>
                <div class="block-student">
                  <img class="student-photo"  src={studentTwo} alt="Student"/>
                  <ul class="student-text">
                    <li class="student">
                      Учень Учньович
                    </li>
                    <li class="student-email">uchnivskaposhta@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div class="more-students-list">
                <details>
                  <summary class="summary-btn">
                  </summary>
                  <div class="block-student">
                    <img class="student-photo" src={studentOne} alt="Student"/>
                    <ul class="student-text">
                      <li class="student">
                        Учень Учньович
                      </li>
                      <li class="student-email">uchnivskaposhta@gmail.com</li>
                    </ul>
                  </div>
                  <div class="block-student">
                    <img class="student-photo" src={studentTwo} alt="Student"/>
                    <ul class="student-text">
                      <li class="student">
                        Учень Учньович
                      </li>
                      <li class="student-email">uchnivskaposhta@gmail.com</li>
                    </ul>
                  </div>
                  <div class="block-student">
                    <img class="student-photo" src={studentOne} alt="Student"/>
                    <ul class="student-text">
                      <li class="student">
                        Учень Учньович
                      </li>
                      <li class="student-email">uchnivskaposhta@gmail.com</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>
      </div>


      </div>
      <div class="second-page">
        <div class="materials-wrapper">
          <div class="materials-title-wrapper">
            <div class="materials-title-shape">
              <div class="materials-title-text">
                Матеріали
              </div>
            </div>
          </div>
          <div class="materials-content">
            <div class="button-container">
              <a href="http://yourtesturl.com" class="button-container-material"> 
               Тести
              </a>
            </div>
            <div class="button-container">
              <a href="http://yourtesturl.com/" class="button-container-material"> 
               Відео
              </a>
            </div>
            <div class="button-container">
              <a class="button-container-material" 
              href="http://yourtesturl.com/" > 
               Посібники
              </a>
            </div>
          
          </div>
        </div>
        <div class="comments-section">
          <div class="comments-title-section">
            <div class="comments-title-shape">
              <div class="comments-title-text">
                Відгуки:
              </div>
            </div>
          </div>
          <div class="comments-container">
            <div class="first-two-blocks">
              <div class="comment-block-container">
                <div class="comment-content">
                  <div class="comment-upper-section">
                    <img class="avatar-comentator" src={comment} alt="avatar commentator"/>
                  <div class="name-rate-container">
                    <div class="name-of-commentator">
                      Carl Smith
                    </div>
                    <img src={stars} alt="Rate stars"/>
                  </div>
                  </div>
                  <div class="comment">
                    Я дуже задоволений моєю менторкою. Вона є відмінним наставником, який не тільки допоміг мені знайти мою мету, але й надихнув на досягнення нових висот в моїй кар'єрі.
                  </div>
                  
                </div>
              </div>
              <div class="comment-block-container">
                <div class="comment-content">
                  <div class="comment-upper-section">
                    <img class="avatar-comentator" src={comment} alt="avatar commentator"/>
                  <div class="name-rate-container">
                    <div class="name-of-commentator">
                      Carl Smith
                    </div>
                    <img src={stars} alt="Rate stars"/>
                  </div>
                  </div>
                  <div class="comment">
                    Мій викладач був дуже підтримуючий та стимулював мене до досягнення нових цілей. Його професійні знання та досвід допомогли мені розкрити свій потенціал та зробити успішну кар'єру. Я дуже вдячний йому за все, що він зробив для мене.
                  </div>
                  
                </div>
              </div>
            </div>

            <div class="second-blocks">
              <div class="comment-block-container">
                <div class="comment-content">
                  <div class="comment-upper-section">
                    <img class="avatar-comentator" src={comment} alt="avatar commentator"/>
                  <div class="name-rate-container">
                    <div class="name-of-commentator">
                      Carl Smith
                    </div>
                    <img class="avatar-comentator" src={stars} alt="Rate stars"/>
                  </div>
                  </div>
                  <div class="comment">
                    Викладачка з плавання - це найкраща, яка мені доводилось зустрічати. Вона дуже терпляча та відповідальна і завжди готова підтримати своїх учнів та допомогти їм зробити прогрес у воді.
                  </div>
                  
                </div>
              </div>
              <div class="comment-block-container">
                <div class="comment-content">
                  <div class="comment-upper-section">
                    <img class="avatar-comentator" src={comment}alt="avatar commentator"/>
                  <div class="name-rate-container">
                    <div class="name-of-commentator">
                      Carl Smith
                    </div>
                    <img class="avatar-comentator" src={stars} alt="Rate stars"/>
                  </div>
                  </div>
                  <div class="comment">
                    Мої заняття з викладачкою з плавання були дуже пізнавальні та цікаві. Вона допомогла мені зрозуміти, які кроки потрібно зробити, щоб покращити своє плавання, та завжди надихала мене на нові досягнення. Я був дуже задоволений її роботою та рекомендую її всім.
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    </>
   
  // </div>

   );
}
 
export default profileMentor;