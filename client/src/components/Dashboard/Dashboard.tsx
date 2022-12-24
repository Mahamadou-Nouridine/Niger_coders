
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { findGithub } from "../../githubFinder"
import { secondary, primary, accent, adjaccent } from "../colors"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Github } from "../Github"
import { Post } from "./Post"
import { Skill } from "./Skill"
import { deleteExperience } from "../../Features/experience"
import { deleteSkill, editSkill } from "../../Features/skills"
import { deleteEducation } from "../../Features/education"
import { refresh } from "../../Features/Auth"
import { deleteSocialM } from "../../Features/socialMedia"
import { info } from "console"

export const Dashboard = (props: { setStatus: (bool: boolean) => void, handleShow: () => void, setForm: Dispatch<SetStateAction<"experience" | "profile" | "skill" | "education" | 'info' | 'social' | 'post'>>, setDeve: (dev: dev) => void, dev: dev, trashPost: (postId: string) => void, createComment: (authorId: string, postId: string, text: string, cb1: (post: post) => void, cb2: (dev: dev) => void, withPost: boolean) => void }): JSX.Element => {

    const [github, setgithub] = useState<github[]>()

    useEffect(() => {
        if (props.dev.github) {
            findGithub(props.dev.github)
                .then(res => {
                    if (res) {
                        if (typeof res.data != 'string') {
                            setgithub(res.data)
                        }
                    }
                })
                .catch(err => {

                    setgithub(undefined)
                })
        }
    }, [])

    const reload = (cb: (id: string) => void, id: string) => {
        refresh()
            .then((res) => {
                if (res) {
                    props.setDeve(res.dev)
                    props.setStatus(true)
                    cb(id)
                } else {
                    props.setStatus(false)
                    return
                }
            })
            .catch((err) => {
                ;
                props.setStatus(false)
            })
    }

    const trashExp = (expId: string) => {
        if (expId) {
            deleteExperience(props.dev._id, expId)
                .then(res => {
                    if (res) {
                        props.setDeve(res)
                        alert("expérience supprimée avec succèss")
                    } else {
                        reload(trashExp, expId)
                    }
                })
        }
        else alert("veuiller toutes les information")
    }

    const trashSkill = (skillId: string) => {
        if (skillId) {
            deleteSkill(props.dev._id, skillId)
                .then(res => {
                    if (res) {
                        props.setDeve(res)
                        alert("skill supprimé avec succèss")
                    } else {
                        reload(trashEdu, skillId)
                    }
                })
        }
        else alert("veuiller toutes les information")
    }

    const trashSocial = (socialId: string) => {
        if (socialId) {
            deleteSocialM(props.dev._id, socialId)
                .then(res => {
                    if (res) {
                        props.setDeve(res)
                        alert("social supprimé avec succèss")
                    } else {
                        reload(trashSocial, socialId)
                    }
                })
        }
        else alert("veuiller toutes les information")
    }

    const changeSkill = (skillId: string, percentage: number) => {
        if (skillId) {
            if (percentage > 0 && percentage <= 100) {
                editSkill(props.dev._id, skillId, percentage)
                    .then(res => {
                        if (typeof res != 'string' && res) {
                            props.setDeve(res)
                            alert("skill edité avec succèss")
                        } else if (typeof res == 'string' && res) {
                            // props.setDeve(res)
                            // alert("skill edité avec succèss")
                        } else {
                            refresh()
                                .then((res) => {
                                    if (res) {
                                        props.setDeve(res.dev)
                                        props.setStatus(true)
                                        changeSkill(skillId, percentage)
                                    } else {
                                        props.setStatus(false)
                                        return
                                    }
                                })
                                .catch((err) => {
                                    ;
                                    props.setStatus(false)
                                })
                        }
                    })
            } else alert('le pourcentage doit être compris entre 0 et 100')
        }
        else alert("veuiller toutes les information")
    }

    const trashEdu = (eduId: string) => {
        if (eduId) {
            deleteEducation(props.dev._id, eduId)
                .then(res => {
                    if (res) {
                        props.setDeve(res)
                        alert("education supprimée avec succèss")
                    } else if (res === false) {
                        refresh()
                            .then((res) => {
                                if (res) {
                                    props.setDeve(res.dev)
                                    props.setStatus(true)
                                    trashEdu(eduId)
                                } else {
                                    props.setStatus(false)
                                    return
                                }
                            })
                            .catch((err) => {
                                ;
                                props.setStatus(false)
                            })
                    }
                })
        }
        else alert("veuiller toutes les information")
    }

    return <>
        <div className='w-100 d-flex flex-column align-items-center'>


            <div className='d-flex justify-content-around w-100 mb-4' style={{ height: 200, backgroundColor: secondary }}>
                {
                    props.dev.photo
                        ? < img src={`http://localhost:3600/uploads/${props.dev.photo}`} alt="" style={{ width: 170, height: 170, borderRadius: '50%', marginTop: 95 }} />
                        : <div className="d-flex justify-content-center align-items-center" style={{ width: 170, height: 170, borderRadius: '50%', marginTop: 95, backgroundColor: adjaccent }}>
                            <h1 onClick={() => { props.setForm('profile'); props.handleShow() }} style={{ cursor: 'pointer' }}><i className="bi bi-images"></i></h1>
                        </div>
                }
                <div className="m-2 align-self-center" style={{ color: primary }}>
                    <h6 style={{ width: 150 }}>
                        <i className="bi bi-person-fill me-2"></i>{props.dev.name}
                    </h6>
                    <h6 style={{ width: 150 }}>
                        <i className="bi bi-geo-alt-fill me-2"></i>{props.dev.location ? props.dev.location : '...'}
                    </h6>
                    <h6 style={{ width: 150 }}>
                        <i className="bi bi-building me-2"></i>{props.dev.company ? props.dev.company : "..."}
                    </h6>
                    <h6 style={{ width: 150 }}>
                        <i className="bi bi-github me-2"></i>{props.dev.github ? props.dev.github : "..."}
                    </h6>
                    <h5 style={{ width: 150 }}>
                        {
                            props.dev.socialMedias
                                // eslint-disable-next-line react/jsx-no-target-blank
                                ? props.dev.socialMedias.map((media, key) => <span key={key}>
                                    <a style={{ textDecoration: 'none', color: adjaccent }} href={media.link} target='_blank' rel="noreferrer">
                                        <i className={`bi bi-${media.name} me-2`}></i>
                                    </a>
                                    <i onClick={() => trashSocial(media._id)} style={{ fontSize: 10, position: 'relative', left: -23, bottom: -10 }} className="bi bi-x-circle-fill text-danger"></i>
                                </span>)
                                : null
                        }
                        <i onClick={() => { props.setForm('social'); props.handleShow() }} className={`bi bi-plus-circle-fill me-2`} style={{ color: accent, cursor: 'pointer' }}>{!props.dev.socialMedias?.length?'(add social Media)':''}</i>
                    </h5>
                    <em>
                        {
                            props.dev.bio
                                ? props.dev.bio
                                : null
                        }
                    </em>
                    <button onClick={() => { props.setForm('info'); props.handleShow() }} className="btn d-flex justify-content-center align-items-center" style={{ backgroundColor: accent, height: 10, position: 'relative', bottom: -13 }} >
                        <i className="bi bi-pencil-fill" style={{ fontSize: 10 }} ></i>
                    </button>
                </div>

            </div>



            {/*start*/}
            <div className="w-100 d-flex justify-content-center mt-5" style={{ maxWidth: '1100px', height: 700, overflow: 'scroll' }}>


                <div className='row gx-2 gy-4' style={{ width: '97%', maxWidth: '1500px', height: 400, marginTop: 60 }}>
                    <div className="col col-md-7 col-12 ">
                        <div className="card" style={{ width: '100%', height: 400, background: `linear-gradient(to bottom,${secondary}, ${accent} )`, color: primary }}>
                            <ul className="nav d-flex justify-content-around nav-tabs" id="myTab" role="tablist" >
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style={{ fontSize: 9, color: adjaccent }}>Expériences</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button style={{ fontSize: 9, color: adjaccent, width: 70 }} className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#experience" type="button" role="tab" aria-controls="experience" aria-selected="false">Skills</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button style={{ fontSize: 9, color: adjaccent }} className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">Education</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button style={{ fontSize: 9, color: adjaccent }} className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#github" type="button" role="tab" aria-controls="github" aria-selected="false">Github</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                                    <button onClick={() => { props.setForm('experience'); props.handleShow() }} style={{ fontSize: 10, backgroundColor: accent }} className="btn ">Ajouter</button>
                                    <div className="d-flex justify-content-between px-2 py-1 " style={{ backgroundColor: adjaccent, color: secondary }}>
                                        <h6 style={{ fontSize: 13 }}>
                                            Entreprise
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            Poste
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            Durée
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            Localité
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            <i className="bi bi-trash-fill"></i>
                                        </h6>
                                    </div>
                                    <div className=" d-flex flex-column align-items-center " style={{ width: '100%', height: 305, overflow: 'scroll' }}>
                                        {
                                            props.dev.experiences?.length
                                                ? props.dev.experiences.map((experience, key) => <Experience key={key} trashExp={trashExp} experience={experience} />)
                                                : "no experience"
                                        }
                                    </div>

                                    div
                                </div>
                                <div className="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="profile-tab" tabIndex={1}>
                                    <button onClick={() => { props.setForm('skill'); props.handleShow() }} style={{ fontSize: 10, backgroundColor: accent }} className="btn ">Ajouter</button>
                                    <div className=" d-flex flex-column align-items-center " style={{ width: '100%', height: 367, overflow: 'scroll' }}>
                                        {
                                            props.dev.skills?.length
                                                ? props.dev.skills.map((skill, key) => <Skill key={key} trashSkill={trashSkill} changeSkill={changeSkill} skill={skill} />)
                                                : "no skill"
                                        }
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="contact-tab" tabIndex={2}>
                                    <button onClick={() => { props.setForm('education'); props.handleShow() }} style={{ fontSize: 10, backgroundColor: accent }} className="btn">Ajouter</button>
                                    <div className="d-flex justify-content-between px-2 py-1 " style={{ backgroundColor: adjaccent, color: secondary }}>
                                        <h6 style={{ fontSize: 13 }}>
                                            Ecole
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            Diplome
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            Durée
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            Localité
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            <i className="bi bi-trash-fill"></i>
                                        </h6>
                                    </div>
                                    <div className=" d-flex flex-column align-items-center " style={{ width: '100%', height: 305, overflow: 'scroll' }}>
                                        {
                                            props.dev.educations?.length
                                                ? props.dev.educations.map((education, key) => <Education key={key} trashEdu={trashEdu} education={education} />)
                                                : "no education provided"
                                        }
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="github" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={3}>
                                    <div className="d-flex justify-content-between px-2 py-1 bg-white" style={{ backgroundColor: adjaccent, color: secondary }}>
                                        <h6 style={{ fontSize: 13 }}>
                                            Nom
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            Stars
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            Watchers
                                        </h6>
                                        <h6 style={{ fontSize: 13 }}>
                                            Forks
                                        </h6>
                                    </div>
                                    <div className="d-flex flex-column align-items-center " style={{ width: '100%', height: 335, overflow: 'scroll' }}>
                                        {
                                            github?.length
                                                ? github.map((gith, key) => <Github key={key} github={gith} />)
                                                : "No git hub repo"
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-5 col-12  " >
                        <div className="col col-md-5 col-12 card" style={{ height: 400, width: '100%', background: `linear-gradient(to top,${secondary}, ${accent} )` }}>
                            <h5>Posts</h5>
                            <button onClick={() => { props.setForm('post'); props.handleShow() }} className="btn btn-outline-light" style={{ backgroundColor: accent }} >Creer un post</button>
                            <div className="w-100 d-flex flex-column align-items-center" style={{ height: 400, overflow: 'scroll' }}>
                                {
                                    props.dev.posts?.length
                                        ? props.dev.posts.map((post, key) => <Post key={key} devSet={props.setDeve} setStatus={props.setStatus} createComment={props.createComment} post={post} trashPost={props.trashPost} />)
                                        : "no post"
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*end*/}


        </div>
    </>
}