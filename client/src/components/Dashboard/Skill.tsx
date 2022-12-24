import { useState } from "react";
import { Button, Modal } from "react-bootstrap"
import { accent, adjaccent, secondary } from "../colors"

export const Skill = (props: { skill: skill, trashSkill:(skillId:string)=>void, changeSkill:(skillId: string, percentage: number) => void }): JSX.Element => {
    const [show, setShow] = useState(false);
    const [percentage, setPercentage] = useState<number>(props.skill.percentage)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>

        <div className="w-100 mt-2" style={{ backgroundColor: adjaccent, color: secondary }}>
            {props.skill.name}
            <i onClick={()=>props.trashSkill(props.skill._id)} className="text-danger ms-3 bi bi-x-circle-fill" style={{ cursor: 'pointer' }}></i>
            <i onClick={handleShow} className="ms-3 bi-pencil-fill" style={{ color: accent, cursor: "pointer" }}></i>
            <div className="  px-2 py-1 text-light mt-2" style={{ width: `${props.skill.percentage}%`, borderTopRightRadius: 5, borderBottomRightRadius: 5, marginBottom: 10, fontSize: 6, fontWeight: 'bold', textAlign: "center", backgroundColor: secondary }} >
                {props.skill.percentage.toString()}%
            </div>
        </div>


        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Skill edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="percentage">New percentage</label>
                    <input value={percentage} onChange={(e)=>setPercentage(Number(e.target.value))} type="number" placeholder="write the new percentage" name="percentage" className="form-control" min={0} max={100} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                onClickCapture={()=>{
                    if(percentage){
                        props.changeSkill(props.skill._id, percentage)
                    }
                }}
                 variant="primary" onClick={handleClose}>
                    soumettre
                </Button>
            </Modal.Footer>
        </Modal>

    </>
}