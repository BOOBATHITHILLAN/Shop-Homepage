import Header from "./components/Header";
import Footer from "./components/Footer";



function App(props) {
    const { notes } = props;

   

   

    function Handleevent(event){
        
        
        if(event.target.innerHTML==='Add to cart'){
            let Id=event.target.id;            
            let Button=document.getElementById(`${Id}`);
            Button.classList.add('disabled');
            let Addcart=document.getElementById(`addcart`);
            let AddcartValue=Number(Addcart.innerHTML);
            Addcart.innerHTML=AddcartValue+1
            
           
        }
        else if(event.target.innerHTML.includes('Cart')){
           
            
            // let Button=document.getElementById(`${id}`);
            // Button.classList.remove('disabled');
            // let Addcart=document.getElementById(`addcart`);
            // let AddcartValue=Number(Addcart.innerHTML);
            // Addcart.innerHTML=AddcartValue-1
        }
        
        
        
    }

    function ProductName({ notes }){
        if (notes.name !== 'Fancy Product') {
            return (
                <div className="col mb-5">
                    <div className="card h-100">

                        <div className="badge bg-dark text-white position-absolute" >Sale</div>

                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                        <div className="card-body p-4">
                            <div className="text-center">


                                <h5 className="fw-bolder">{notes.name}</h5>

                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                </div>

                                <span className="text-muted text-decoration-line-through">{notes.price1}</span>
                                {notes.price2}
                            </div>
                        </div>

                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#addcart" id={notes.id} onClick={Handleevent}>{notes.linkname}</a></div>
                        </div>
                    </div>
                </div>
            )
        }
            return (
                <div className="col mb-5">
                    <div className="card h-100">

                        <div className="badge bg-dark text-white position-absolute" >Sale</div>

                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                        <div className="card-body p-4">
                            <div className="text-center">


                                <h5 className="fw-bolder">{notes.name}</h5>

                                {notes.price1}
                                {notes.price2}
                            </div>
                        </div>

                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" id={notes.id} href="#addcart" onClick={Handleevent}>{notes.linkname}</a></div>
                        </div>
                    </div>
                </div>
            )
        

    }

    return (
        <div className="App">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#h!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#h!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#h!">About</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#href" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">All Products</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div>
                            <form className="d-flex">
                                <button className="btn btn-outline-dark" type="submit" onClick={Handleevent}>
                                    <i className="bi-cart-fill me-1"></i>
                                    Cart
                                    <span className="badge bg-dark text-white ms-1 rounded-pill" id='addcart'>0</span>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </nav>


            <Header />

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


                        {notes.map(note =>
                            <ProductName key={note.id} notes={note} />
                            
                        )}

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default App;
