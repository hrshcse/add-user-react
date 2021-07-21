import './ErrorModule.css'
function ErrorModule(props){
    const Close =()=>{
        props.eData();
    }
return(
    <div className="error_module" onClick={Close}>
    <div className="error_main">
        <header className="error_header">
            {props.datae.title}
        </header>
        <h5 className="error_message">
            {props.datae.message}
        </h5>
        <button className="error_button" onClick={Close}>Close</button>
    </div>
    </div>
)
}

export default ErrorModule;