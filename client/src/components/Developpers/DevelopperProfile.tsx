export const DevelopperProfile = (): JSX.Element => {
    return <>
        <div className='row gx-4 gy-4' style={{ width: '90%', maxWidth: '1000px', height: 400, marginTop: 100 }}>
            <div className="col col-md-5 col-12  ">
                <div className="card bg-success" style={{ width: '100%', height: 400 }}>
                    <div className="d-flex justify-content-center">
                        <img style={{ width: 150, height: 150, borderRadius: '50%', marginTop: -50 }} width={100} src={('images/img.jpg')} alt="" />
                    </div>

                    <div className=' d-flex flex-column justify-content-center' style={{ height: 350, width: '100%' }}>

                        <div className="ms-3">
                            <h5>
                                Nom: Nouridine
                            </h5>
                            <h5>
                                City: Niamey
                            </h5>
                            <h5>
                                Company: Codeloccol
                            </h5>
                            <h5>
                                bio: I love Coding
                            </h5>
                            <div className="w-50 d-flex justify-content-between">
                                <h3 className="mt-4">
                                    <i className="bi bi-github"></i>
                                </h3>
                                <h3 className="mt-4">
                                    <i className="bi bi-linkedin"></i>
                                </h3>
                                <h3 className="mt-4">
                                    <i className="bi bi-facebook"></i>
                                </h3>
                                <h3 className="mt-4">
                                    <i className="bi bi-twitter"></i>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col col-md-7 col-12 ">
                <div className="card bg-warning" style={{ width: '100%', height: 400 }}>
                    <ul className="nav d-flex justify-content-around nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style={{ fontSize: 9 }}>Expériences</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button style={{ fontSize: 9, width: 70 }} className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#experience" type="button" role="tab" aria-controls="experience" aria-selected="false">Skills</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button style={{ fontSize: 9 }} className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">Education</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button style={{ fontSize: 9 }} className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#github" type="button" role="tab" aria-controls="github" aria-selected="false">Github</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button style={{ fontSize: 9 }} className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#post" type="button" role="tab" aria-controls="post" aria-selected="false">Posts</button>
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
                            <div className="bg-primary d-flex flex-column align-items-center " style={{ width: '100%', height: 335, overflow: 'scroll' }}>
                                <div className="d-flex justify-content-between px-2 py-1 bg-light mt-2" style={{ width: '99%', borderRadius: 5 }} >
                                    <h6 style={{ fontSize: 13 }}>
                                        Codeloccol
                                    </h6>
                                    <h6 style={{ fontSize: 13 }}>
                                        Staff
                                    </h6>
                                    <h6 style={{ fontSize: 10, width: 60 }}>
                                        10/01/22 to 10/01/22
                                    </h6>
                                    <h6 style={{ fontSize: 13 }}>
                                        Sadoré
                                    </h6>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="profile-tab" tabIndex={1}>

                            <div className="bg-primary d-flex flex-column align-items-center " style={{ width: '100%', height: 367, overflow: 'scroll' }}>

                                <div className="w-100 mt-2">
                                    HTML
                                    <div className="  px-2 py-1 bg-light mt-2" style={{ width: '99%', borderRadius: 5, fontSize: 5, fontWeight: 'bold', textAlign: "center" }} >
                                        99%
                                    </div>
                                </div>
                                <div className="w-100 mt-2">
                                    CSS
                                    <div className="  px-2 py-1 bg-light mt-2" style={{ width: '75%', borderRadius: 5, fontSize: 5, fontWeight: 'bold', textAlign: "center" }} >
                                        75%
                                    </div>
                                </div>
                                <div className="w-100 mt-2">
                                    Javascript
                                    <div className="  px-2 py-1 bg-light mt-2" style={{ width: '90%', borderRadius: 5, fontSize: 5, fontWeight: 'bold', textAlign: "center" }} >
                                        90%
                                    </div>
                                </div>

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
                            <div className="bg-primary d-flex flex-column align-items-center " style={{ width: '100%', height: 335, overflow: 'scroll' }}>
                                <div className="d-flex justify-content-between px-2 py-1 bg-light mt-2" style={{ width: '99%', borderRadius: 5 }} >
                                    <h6 style={{ fontSize: 13 }}>
                                        Codeloccol
                                    </h6>
                                    <h6 style={{ fontSize: 13 }}>
                                        Dev Fullstack
                                    </h6>
                                    <h6 style={{ fontSize: 10, width: 60 }}>
                                        10/01/22 to 10/01/22
                                    </h6>
                                    <h6 style={{ fontSize: 13 }}>
                                        Sadoré
                                    </h6>
                                </div>

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
                            <div className="bg-primary d-flex flex-column align-items-center " style={{ width: '100%', height: 335, overflow: 'scroll' }}>
                                <div className="d-flex justify-content-between px-2 py-1 bg-light mt-2" style={{ width: '99%', borderRadius: 5 }} >
                                    <h6 style={{ fontSize: 13, width: 70 }}>
                                        Bizibizi
                                    </h6>
                                    <h6 style={{ fontSize: 13, width: 20 }}>
                                        10
                                    </h6>
                                    <h6 style={{ fontSize: 10, width: 20 }}>
                                        10
                                    </h6>
                                    <h6 style={{ fontSize: 13 }}>
                                        20
                                    </h6>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade" id="post" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={3}>
                            <div className="w-100 bg-danger d-flex flex-column align-items-center" style={{ height: 367, overflow: 'scroll' }}>
                                <div className="card mt-2 ps-1 pt-2 bg-info" style={{ width: '98%' }}>
                                    <h6>Is Html and Css coding language?</h6>
                                    <p className="text-secondary">posted on 2022/08/29</p>
                                    <div className='d-flex'>
                                        <div className="likes d-flex ">
                                            <h5><i className="bi bi-hand-thumbs-up me-2"></i></h5>
                                            <h5><i className="bi bi-hand-thumbs-down me-2"></i></h5>
                                        </div>
                                        <button className="btn btn-primary me-2 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">commenter <span className="bg-light text-dark rounded">2</span></button>
                                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog  modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Is Html and Css coding language?</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <form action="">
                                                        <div className="modal-body">
                                                            <div className="mb-3">
                                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">annuler</button>
                                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">envoyer</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-2 ps-1 pt-2 bg-info" style={{ width: '98%' }}>
                                    <h6>How to get a file from a html input tag?</h6>
                                    <p className="text-secondary">posted on 2022/08/29</p>
                                    <div className='d-flex'>
                                        <div className="likes d-flex ">
                                            <h5><i className="bi bi-hand-thumbs-up me-2"></i></h5>
                                            <h5><i className="bi bi-hand-thumbs-down me-2"></i></h5>
                                        </div>
                                        <button className="btn btn-primary me-2 mb-2" data-bs-toggle="modal" data-bs-target="#element1">commenter <span className="bg-light text-dark rounded">2</span></button>
                                        <div className="modal fade" id="element1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="element1" aria-hidden="true">
                                            <div className="modal-dialog  modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="element1">How to get a file from a html input tag?</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <form action="">
                                                        <div className="modal-body">
                                                            <div className="mb-3">
                                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">annuler</button>
                                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">envoyer</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}