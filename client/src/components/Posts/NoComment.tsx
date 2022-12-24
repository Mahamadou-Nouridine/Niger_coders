import { accent, adjaccent, secondary } from "../colors"

const Comment = (): JSX.Element => {
    return <>
        <div className="mb-1 mx-2  bg-light d-flex justify-content-between mt-1 p-2 rounded align-items-center" style={{ width: '98%' }}>
            <div className="" style={{backgroundColor: adjaccent , width: 40, height: 40, borderRadius: '50%' }} ></div>
            <div style={{ width: '80%' }}>
                <div className=" rounded mb-1" style={{backgroundColor: adjaccent , width: '100%', height: 15 }}></div>
                <div className=" rounded mb-1" style={{backgroundColor: adjaccent , width: '80%', height: 15 }}></div>
                <div className=" rounded" style={{backgroundColor: adjaccent , width: '30%', height: 15 }}></div>
            </div>
        </div>
    </>
}

export const NoComment = (): JSX.Element => {
    return <>
        <div className="  card d-flex flex-column align-items-center px-2" style={{ maxWidth: 700,  height: '100%', width:'100%', minWidth: 220, overflow: 'scroll', background: `linear-gradient(to bottom,${accent}, ${secondary} )` }}>
            <div className=" mt-2 ps-1 pt-2 d-flex rounded" style={{ width: '100%', backgroundColor: secondary }}>
                <div className="d-flex align-items-center flex-column">
                    <div className='m-1 bg-light rounded' style={{ width: 100, height: 100, backgroundColor: adjaccent }} ></div>
                    <div className=" rounded mb-4" style={{ height: 15, width: '85%', backgroundColor: adjaccent  }}></div>

                </div>
                <div className='align-self-center ms-5 w-100'>
                    <div className=" rounded mb-1" style={{backgroundColor: adjaccent , height: 15, width: '99%' }}></div>
                    <div className=" rounded mb-4" style={{backgroundColor: adjaccent , height: 15, width: '85%' }}></div>
                    <div className=" rounded" style={{ backgroundColor: adjaccent ,height: 15, width: '85%' }}></div>

                </div>
            </div>
            <form className=" bg-light rounded w-100 d-flex justify-content-center mt-1 mb-1" style={{ height: 40 }}>

            </form>
            <div className="w-100" style={{ height: '100%', overflow: 'scroll' }}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <h3 className="w-100 text-center text-light" >Choisissez un Post</h3>


            </div>
        </div>
    </>
}