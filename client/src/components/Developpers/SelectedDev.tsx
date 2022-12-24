/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react"
import { findGithub } from "../../githubFinder"
import { secondary, accent, primary } from "../colors"
import { ExperienceForm } from "../forms/Experience"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Github } from "../Github"
import { Post } from "./Post"
import { Skill } from "./Skill"
import { ComplexData } from "./ComplexData"

export const SelectedDev = (props: { selected: dev | undefined, devId:string, selectdev:(dev:dev)=>void, setStatus:(bool:boolean)=>void, createComment: (authorId: string, postId: string, text: string, cb1: (post: post) => void, cb2: (dev: dev) => void, withPost: boolean) => void }): JSX.Element => {



    return <>
        <div className='row gx-4 gy-4 pt-5' style={{ width: '90%', maxWidth: '1000px', height: '80%', overflow: 'scroll' }}>
            <div className="col col-md-5 col-12">
                <div className="rounded" style={{ width: '100%', height: 400, background: `linear-gradient(to bottom,${secondary}, ${accent} )`, color: primary }}>
                    <div className="d-flex justify-content-center">
                        {
                        props.selected?.photo ? 
                        <img style={{ width: 135, height: 135, borderRadius: '50%', marginTop: -50 }} src={`http://localhost:3600/uploads/${props.selected.photo}`} alt="" />
                            : <div className='bg-secondary text-light d-flex justify-content-center align-items-center' style={{ width: 135, height: 135, borderRadius: '50%', marginTop: -50}} >
                                <h1>{props.selected?.name[0]}</h1>
                            </div>}
                    </div>

                    <div className=' d-flex flex-column justify-content-center' style={{ height: 350, width: '100%' }}>

                        <div className="ms-3">
                            <h5>
                                Nom: {props.selected?.name}
                            </h5>
                            <h5>
                                City: {props.selected?.location ? props.selected?.location : "no location provided"}
                            </h5>
                            <h5>
                                Company: {props.selected?.company? props.selected?.company : 'no company provided'}
                            </h5>
                            <h5>
                                bio: {props.selected?.bio ? props.selected?.bio : 'no bio provided'}
                            </h5>
                            <div className="w-100  d-flex justify-content-start flex-wrap">
                                {
                                    props.selected?.socialMedias?.map((social, key) =>
                                    (<h3 key={key} className="mt-4 m-1">
                                        <a style={{ color: secondary, cursor: 'pointer' }} href={`${social.link}`} target="_blank"><i className={`bi bi-${social.name}`}></i></a>
                                    </h3>))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ComplexData createComment={props.createComment} setStatus={props.setStatus} selectdev={props.selectdev} devId = {props.devId} selected={props.selected}/>
        </div>
    </>
}