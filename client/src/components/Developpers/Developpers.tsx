
import { useEffect, useState } from "react"
import { getAllDev } from "../../Features/developpers"
import { secondary, accent } from "../colors"
import { Developper } from "./Developper"
import { NoDevelopper } from "./NoDevelopper"
import { SelectedDev } from "./SelectedDev"

export const Developpers = (props:{devId:string, setStatus:(bool:boolean)=>void, createComment: (authorId: string, postId: string, text: string, cb1: (post: post) => void, cb2: (dev: dev) => void, withPost: boolean) => void}): JSX.Element => {
    const [selected, setSelected] = useState<dev>()
    const [developpers, setDeveloppers] = useState<dev[]>()
    const selectdev = (dev: dev) => {
        setSelected(dev);
    }
    

    useEffect(() => {
        getAllDev().then(devs => {
            if (devs) {
                setDeveloppers(devs)
            }
        })
    }, [])

    return <>

        <div className="offcanvas offcanvas-start d-block d-lg-none" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: 450 }}>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <div className="w-100 d-flex flex-column h-100 align-items-center">
                <div className=" card p-1" style={{ width: '100%', overflow: 'scroll', height: '100%', background: `linear-gradient(to bottom,${secondary}, ${accent} )` }}>
                    {developpers ? (developpers.map((developper, key) => <Developper key={key} selectdev={selectdev} developper={developper} />)) : null}
                </div>

            </div>


        </div>

        <div className=" d-lg-block d-none " style={{ width: 500 }}>

            <div className="w-100 d-flex flex-column h-100 align-items-center">
                <div className="card p-1" style={{ width: '100%', overflow: 'scroll', height: '100%', background: `linear-gradient(to bottom,${secondary}, ${accent} )` }}>
                    {developpers ? (developpers.map((developper, key) => <Developper key={key} selectdev={selectdev} developper={developper} />)) : null}
                </div>

            </div>
        </div>


        <div className='d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
            <button style={{ position: 'absolute', top: 0, left: 40 }} className="d-block d-lg-none btn btn-primary " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i className="bi bi-list"></i>
            </button>
            <div className="w-100 d-flex justify-content-center  align-items-center" style={{ height: '100%' }}>

                {!selected ? <NoDevelopper />
                    : <SelectedDev createComment = {props.createComment} setStatus={props.setStatus} selectdev={selectdev} devId={props.devId} selected={selected} />}
            </div>

        </div>


    </>
}