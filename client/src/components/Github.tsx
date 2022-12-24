import { adjaccent, secondary } from "./colors"

export const Github = (props: { github: github }): JSX.Element => {
    return <>
        <a className="w-100" href={props.github.url} target= '_blank' style={{textDecoration:'none'}} rel="noreferrer">
        <div className="d-flex justify-content-between px-2 py-1  mt-2" style={{ width: '99%', borderRadius: 5, backgroundColor: adjaccent, color: secondary }} >
            <h6 style={{ fontSize: 13, width: 70 }}>
                {props.github.nom}
            </h6>
            <h6 style={{ fontSize: 13, width: 20 }}>
                {props.github.stars}
            </h6>
            <h6 style={{ fontSize: 10, width: 20 }}>
                {props.github.watchers}
            </h6>
            <h6 style={{ fontSize: 13 }}>
                {props.github.forks}
            </h6>
        </div>
        </a>
    </>
}