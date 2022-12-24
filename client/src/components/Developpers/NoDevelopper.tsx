import { secondary, accent } from "../colors"

export const NoDevelopper = (): JSX.Element => {
    return <>
        <div className='row gx-4 gy-4 pt-5' style={{ width: '90%', maxWidth: '1000px', height: '80%', overflow: 'scroll' }}>
            <div className="col col-md-5 col-12  ">
                <div className="card" style={{ width: '100%', height: 400, background: `linear-gradient(to bottom,${secondary}, ${accent} )` }}>
                    <div className="d-flex justify-content-center">
                        <div className='bg-light' style={{ width: 150, height: 150, borderRadius: '50%', marginTop: -50 }} />
                    </div>

                    <div className=' d-flex flex-column justify-content-center' style={{ height: 350, width: '100%' }}>

                        <div className="ms-3">
                            <div className="bg-light mb-1 rounded" style={{ width: '80%', height: 15 }}></div>
                            <div className="bg-light mb-1 rounded" style={{ width: '50%', height: 15 }}></div>
                            <div className="bg-light mb-1 rounded" style={{ width: '30%', height: 15 }}></div>
                            <div className="bg-light mb-1 rounded" style={{ width: '60%', height: 15 }}></div>

                            <div className="w-50 d-flex justify-content-between">
                                <div className="mt-4 circle bg-light" style={{ width: 35, height: 35, borderRadius: '50%' }}></div>
                                <div className="mt-4 circle bg-light" style={{ width: 35, height: 35, borderRadius: '50%' }}></div>
                                <div className="mt-4 circle bg-light" style={{ width: 35, height: 35, borderRadius: '50%' }}></div>
                                <div className="mt-4 circle bg-light" style={{ width: 35, height: 35, borderRadius: '50%' }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col col-md-7 col-12 ">
                <div className="card d-flex justify-content-center align-items-center" style={{ width: '100%', height: 400,background: `linear-gradient(to bottom,${secondary}, ${accent} )` }}>
                    <h3 className='text-light'>Choisissez un developpeur</h3>
                </div>
            </div>
        </div>
    </>
} 