import { useState, useEffect } from "react"
import { findGithub } from "../../githubFinder"
import { accent, secondary } from "../colors"
import { Github } from "../Github"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Post } from "./Post"
import { Skill } from "./Skill"

export const ComplexData = (props:{selected:dev|undefined, devId: string, selectdev:(dev:dev)=>void, setStatus:(bool:boolean)=>void, createComment: (authorId: string, postId: string, text: string, cb1: (post: post) => void, cb2: (dev: dev) => void, withPost: boolean) => void}):JSX.Element =>{


    const [github, setgithub] = useState<github[]>()

    useEffect(() => {
        if (props.selected?.github) {
            findGithub(props.selected.github)
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
        }else setgithub(undefined)
    }, [props.selected?.github])

    return <>
    <div className="col col-md-7 col-12 ">
                <div className="card" style={{ width: '100%', height: 400, background: `linear-gradient(to bottom,${accent}, ${secondary} )` }}>
                    <ul className="nav d-flex justify-content-around nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style={{ fontSize: 9, color: secondary }}>Expériences</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button style={{ fontSize: 9, width: 70, color: secondary }} className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#experience" type="button" role="tab" aria-controls="experience" aria-selected="false">Skills</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button style={{ fontSize: 9, color: secondary }} className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">Education</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button style={{ fontSize: 9, color: secondary }} className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#github" type="button" role="tab" aria-controls="github" aria-selected="false">Github</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button style={{ fontSize: 9, color: secondary }} className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#post" type="button" role="tab" aria-controls="post" aria-selected="false">Posts</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                            <div className="d-flex justify-content-between px-2 py-1 bg-white">
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
                            </div>
                            <div className="d-flex flex-column align-items-center " style={{ width: '100%', height: 305, overflow: 'scroll' }}>
                                {
                                    props.selected?.experiences?.length ?
                                        props.selected?.experiences.map((experience, key) => <Experience key={key} experience={experience} />)
                                        : "no experience provided"
                                }

                            </div>
                        </div>
                        <div className="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="profile-tab" tabIndex={1}>

                            <div className="d-flex flex-column align-items-center " style={{ width: '100%', height: 336, overflow: 'scroll' }}>

                                {
                                    props.selected?.skills.length ?
                                        props.selected?.skills.map((skill, key) => <Skill key={key} skill={skill} />)
                                        : "no skill provided"
                                }


                            </div>

                        </div>
                        <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="contact-tab" tabIndex={2}>
                            <div className="d-flex justify-content-between px-2 py-1 bg-white">
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
                            </div>
                            <div className=" d-flex flex-column align-items-center " style={{ width: '100%', height: 305, overflow: 'scroll' }}>
                                {
                                    props.selected?.educations?.length ?
                                        props.selected?.educations.map((education, key) => <Education key={key} education={education} />)
                                        : "no education provided"
                                }

                            </div>
                        </div>
                        <div className="tab-pane fade" id="github" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={3}>
                            <div className="d-flex justify-content-between px-2 py-1 bg-white">
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
                            <div className=" d-flex flex-column align-items-center " style={{ width: '100%', height: 305, overflow: 'scroll' }}>
                                {
                                    github?.length
                                        ? github.map((gith, key) => <Github key={key} github={gith} />)
                                        : "No git hub repo"
                                }

                            </div>
                        </div>
                        <div className="tab-pane fade" id="post" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={3}>
                            <div className="w-100 d-flex flex-column align-items-center" style={{ height: 337, overflow: 'scroll' }}>
                                {
                                    props.selected?.posts?.length
                                    ?props.selected?.posts?.map((post, key) => <Post cle={key} key={key} createComment={props.createComment} setStatus={props.setStatus} selectdev={props.selectdev} devId = {props.devId} post={post} />)
                                    :"no post"
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
}