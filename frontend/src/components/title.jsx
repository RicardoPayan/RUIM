import Nav from 'react-bootstrap/Nav';

function Title (props){
    return(
        <>
            <Nav>
                
                <div className="w-100">
                    <center>
                        <h1 className='mt-4 ms-4 w-100 text-dark'>{props.title}</h1>
                    </center>
                </div>
                
            </Nav>
            <div className="ms-2 ps-5 pe-5"><hr/></div>
        </>
    )
}

export default Title;