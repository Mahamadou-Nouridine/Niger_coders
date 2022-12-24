import { accent, primary, secondary } from "../colors"

export const Developper = (props: { developper: dev, selectdev: (dev: dev) => void }): JSX.Element => {

    return <>
        <div className=" d-flex justify-content-between rounded p-1 m-1" style={{ backgroundColor: secondary, color: primary }}>
            {props.developper.photo ? <img className='rounded' style={{ width: 135, height: 135 }} src={`http://localhost:3600/uploads/${props.developper.photo}`} alt="" />
                : <div className='bg-secondary text-light d-flex justify-content-center align-items-center rounded' style={{ width: 135, height: 135, }} >
                    <h1>{props.developper.name[0]}</h1>
                </div>}
            <div  style={{width:150}}>
                <h6>
                    {props.developper.name}
                </h6>
                <h6>
                    {
                        props.developper.experiences?.length ?
                            <>
                                {
                                props.developper.experiences[props.developper.experiences?.length - 1].job 
                                ? props.developper.experiences[props.developper.experiences?.length - 1].job 
                                : 'travail non defini'}
                            </>
                            : 'travail non defini'
                    }

                </h6>
                <h6>
                    {
                    props.developper.location ? 
                    props.developper.location 
                    : 'lieu non defini'
                    }
                </h6>
                <button onClick={() => props.selectdev(props.developper)} className='btn btn-outline-success' style={{ }} >voir</button>
            </div>
        </div>
    </>
}