

import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard/Dashboard';
import { Developpers } from './components/Developpers/Developpers';
import { Posts } from './components/Posts/Posts';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ProfileForm } from './components/forms/Profile';
import { SkillForm } from './components/forms/Skills';
import { EducationceForm } from './components/forms/Education';
import { ExperienceForm } from './components/forms/Experience';
import { primary, secondary, accent, adjaccent } from './components/colors';
import { Info } from './components/forms/Info';
import { addExperience } from './Features/experience';
import { Social } from './components/forms/social';
import { addESkill } from './Features/skills';
import { addEducation } from './Features/education';
import { logout, refresh } from './Features/Auth';
import { addSocialM } from './Features/socialMedia';
import { editInfo } from './Features/info';
import { Post } from './components/forms/Post';
import { addPost, deletePost } from './Features/posts';
import { addComment } from './Features/comment';
import { deleteProfile, putProfile } from './Features/profile';





function App(props: { setStatus: (bool: boolean) => void, dev: dev, setdevelopper: (dev: dev) => void }) {
  const [deve, setDev] = useState<dev>(props.dev)
  const [show, setShow] = useState(false);
  const [form, setForm] = useState<'profile' | 'skill' | 'education' | 'experience' | 'info' | 'social' | 'post'>('profile')
  const setDeve = (dev: dev) => setDev(dev)

  const [experience, setExperience] = useState<experience>();
  const handleExp = (exp: experience) => setExperience(exp)

  const [skill, setskill] = useState<skill>();
  const handleSkill = (skill: skill) => setskill(skill)

  const [education, setEducation] = useState<education>();
  const handleEdu = (edu: education) => setEducation(edu)


  const [info, setInfo] = useState<infor>({
    location: deve.location ? deve.location : "",
    company: deve.company ? deve.company : "",
    bio: deve.bio ? deve.bio : "",
    github: deve.github ? deve.github : "",
  });
  const handleInfo = (info: infor) => setInfo(info)

  const [social, setSocial] = useState<socialMedia>();
  const handleSocial = (social: socialMedia) => setSocial(social)

  const [post, setPost] = useState<string>("");
  const handlePost = (post: string) => setPost(post)

  const formData = new FormData()
  const handleProfile = (profile: File) => {
    formData.set('profile', profile)
  }




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const reload = (cb: () => void) => {
    refresh()
      .then((res) => {
        if (res) {

          setDeve(res.dev)
          props.setdevelopper(res.dev)
          props.setStatus(true)
          cb()
        } else {
          props.setStatus(false)
          return
        }
      })
      .catch((err) => {
        props.setStatus(false)
      })
  }

  const reload2 = (cb: (id: string) => void, id: string) => {
    refresh()
      .then((res) => {
        if (res) {

          setDeve(res.dev)
          props.setStatus(true)
          cb(id)
        } else {
          props.setStatus(false)
          return
        }
      })
      .catch((err) => {
        props.setStatus(false)
      })
  }


  const creatExp = () => {
    if (experience?.company && experience?.job && experience?.from && experience?.to && experience?.location && props.dev._id) {
      addExperience(experience?.company, experience?.job, experience?.from, experience?.to, experience?.location, props.dev._id)
        .then(res => {
          if (res) {
            setDev(res)

            alert("experience créee avec succèss")
          } else {
            reload(creatExp)
          }
        })
    }
    else alert("veuiller toutes les information")
  }

  const creatSkill = () => {
    if (skill?.name && skill?.percentage) {
      if (skill.percentage <= 100 && skill?.percentage > 0) {
        addESkill(deve._id, skill?.name, skill?.percentage)
          .then(res => {
            if (res && typeof res != 'string') {
              setDev(res)

              alert("skill créee avec succèss")
            } else if (res && typeof res === 'string') {
              // setDev(res)

              // alert("skill créee avec succèss")
            }
            else {
              reload(creatSkill)
            }
          })
      } else alert('le pourcentage doit être compris entre 0 et 100')
    }
    else alert("veuiller toutes les information")
  }

  const creatEdu = () => {
    if (education?.diploma && education.school && education?.from && education?.to && education?.location && props.dev._id) {
      addEducation(education?.diploma, education.school, education?.from, education?.to, education?.location, props.dev._id)
        .then(res => {
          if (res) {
            setDev(res)

            alert("Education créee avec succèss")
          } else {
            reload(creatEdu)
          }
        })
    }
    else alert("veuiller toutes les information")
  }

  const creatSocial = () => {
    if (social?.name && social?.link) {
      addSocialM(deve._id, social?.name, social?.link)
        .then(res => {
          if (res) {
            setDev(res)

            alert("reseau social créee avec succèss")
          } else {
            reload(creatSocial)
          }
        })
    }
    else alert("veuiller toutes les information")
  }

  const createPost = () => {
    if (post) {
      addPost(post, deve._id)
        .then(res => {
          if (res) {
            setDev(res)

            alert("post créé avec succèss")
          } else {
            reload(createPost)
          }
        })
    }
    else alert("veuiller toutes les information")
  }

  const createComment = (authorId: string, postId: string, text: string, cb1: (post: post) => void, cb2: (dev: dev) => void, withPost: boolean) => {
    if (text) {
      addComment(authorId, postId, deve._id, text)
        .then(res => {
          if (res) {
            if (withPost) {
              cb1(res.post)
            }

            alert("commentaire créee avec succèss")
            cb2(res.dev)
          } else {
            // reload(createComment(authorId, postId, text, cb, withPost))
            refresh()
              .then((res) => {
                if (res) {

                  setDeve(res.dev)
                  props.setStatus(true)
                  createComment(authorId, postId, text, cb1, cb2, withPost)
                } else {
                  props.setStatus(false)
                  return
                }
              })
              .catch((err) => {
                props.setStatus(false)
              })
          }
        })
    }
    else {
      alert("veuiller toutes les information")
    }
  }

  const createProfile = () => {
    if (formData.get('profile')) {
      formData.set('devId', deve._id)
      putProfile(formData)
        .then(res => {
          if (res) {
            setDeve(res)
            props.setdevelopper(res)

            alert("profile changé avec succèss")
          } else {
            reload(createProfile)
          }
        })
    } else alert("veuillez choisir un photo")
  }

  const editInfor = () => {
    if (info.location && info.github && info.company && info.bio) {
      editInfo(info.location, info.company, info.bio, info.github, deve._id)
        .then(res => {
          if (res) {
            setDev(res)

            alert("informations changée avec succèss")
          } else {
            reload(editInfor)
          }
        })
    }
    else alert("veuiller toutes les information")
  }

  const trashPost = (postId: string) => {
    if (postId) {
      deletePost(postId, deve._id)
        .then(res => {
          if (res) {
            setDev(res)

            alert("post supprimé avec succès")
          } else {
            reload2(trashPost, postId)
          }
        })
    }
    else alert("veuiller toutes les information")
  }

  const trashProfile = () => {

    deleteProfile(deve._id)
      .then(res => {
        if (res) {
          setDev(res)
          props.setdevelopper(res)

          alert("profile supprimé avec succès")
        } else {
          reload(trashProfile)
        }
      })
  }

  const Logout = () => {
    logout()
      .then(res => {

        if (res) {
          props.setStatus(false)
          refresh()
        }
      })
  }
  return (
    <>
      <BrowserRouter>
        <div className=" d-flex " style={{ width: '100vw', height: '100vh' }}>
          <div className="" style={{ height: '100vh', backgroundColor: secondary, color: primary }}>
            <div style={{ height: 70 }}>
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>
                <h3 className="mt-3 mx-2 d-none d-md-block" style={{ textAlign: 'center', width: '150px', fontFamily: 'cursive', fontWeight: 'bold' }}>Niger Coders</h3>
              </Link>
            </div>

            <div className=" d-flex justify-content-center flex-column" style={{ width: '100%', height: 'calc(100vh - 400px)' }}>
              <div className="d-flex px-2">
                <Link className="" style={{ textDecoration: 'none', color: primary }} to='/'>
                  <h3 className='d-block d-md-none' style={{ color: accent }}><i className="bi bi-motherboard-fill"></i></h3>
                  <h4 className="d-none d-md-block">Dashboard</h4>
                </Link>


              </div>
              <div className="d-flex py-5 px-2">
                <Link className="" style={{ textDecoration: 'none', color: primary }} to='/posts'>
                  <h3 className='d-block d-md-none' style={{ color: accent }}><i className="bi bi-file-post"></i></h3>
                  <h4 className="d-none d-md-block">Post</h4>
                </Link>

              </div>
              <div className="d-flex px-2">
                <Link className="" style={{ textDecoration: 'none', color: primary }} to='/developpers'>
                  <h3 className='d-block d-md-none' style={{ color: accent }}><i className="bi bi-people-fill"></i></h3>
                  <h4 className="d-none d-md-block">Developpers</h4>
                </Link>

              </div>
            </div>
          </div>
          <div className=" " style={{ width: '100%', height: '100vh' }}>
            <div className="bg-light d-flex justify-content-end align-items-center" style={{ width: '100%', height: 60 }}>
              {
                deve.photo
                  ? <img onClick={() => { setForm('profile'); handleShow() }} src={`http://localhost:3600/uploads/${props.dev.photo}`} style={{ borderRadius: '50%', height: 50, width: 50, cursor: 'pointer' }} alt="" />
                  : <div onClick={() => { setForm('profile'); handleShow() }} className='d-flex justify-content-center align-items-center' style={{ borderRadius: '50%', height: 50, width: 50, cursor: 'pointer', backgroundColor: adjaccent }}>
                    <i className="bi bi-card-image"></i>
                  </div>
              }
              <h1><i onClick={Logout} className="bi bi-box-arrow-right mx-3" style={{ cursor: 'pointer' }}></i></h1>
            </div>
            <div className=" d-flex justify-content-center " style={{ width: '100%', height: 'calc(100vh - 60px)', backgroundColor: primary }}>
              <Routes>
                <Route path='/' element={<Dashboard createComment={createComment} trashPost={trashPost} setStatus={props.setStatus} setDeve={setDeve} dev={deve} handleShow={handleShow} setForm={setForm} />} />
                <Route path='/developpers' element={<Developpers createComment={createComment} devId={deve._id} setStatus={props.setStatus} />} />
                <Route path='/posts/*' element={<Posts createComment={createComment} setStatus={props.setStatus} devId={deve._id} />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{form === 'social' ? "ajouter un reseau social" : form}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            form === 'profile'
              ? <ProfileForm trashProfile={trashProfile} handleProfile={handleProfile} dev={props.dev} />
              : form === 'skill'
                ? <SkillForm skill={skill} handleSkill={handleSkill} />
                : form === 'education'
                  ? <EducationceForm education={education} handleEdu={handleEdu} />
                  : form === 'experience'
                    ? <ExperienceForm experience={experience} handleExp={handleExp} />
                    : form === 'info'
                      ? <Info info={info} handleInfo={handleInfo} />
                      : form === 'social'
                        ? <Social social={social} handleSocial={handleSocial} />
                        : form === 'post'
                          ? <Post post={post} handlePost={handlePost} />
                          : null

          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            fermer
          </Button>
          <Button
            onClickCapture={() => {
              if (form === 'experience') {
                creatExp()
              } else if (form === 'skill') {
                creatSkill()
              } else if (form === 'education') {
                creatEdu()
              } else if (form === 'social') {
                creatSocial()
              } else if (form === 'info') {
                editInfor()
              } else if (form === 'post') {
                createPost()
              } else if (form === 'profile') {
                createProfile()
              }
            }}
            variant="primary"
            onClick={handleClose}>
            Soumettre
          </Button>
        </Modal.Footer>
      </Modal>



    </>
  );
}

export default App;
