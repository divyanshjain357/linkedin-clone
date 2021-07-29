const PageList = (props) =>{
    return (
        <div>
        <img src={props.logo} alt="" />
        <div>
            <strong>{props.name}</strong>
            <small>{props.company_type} - {props.followers_count} followers</small>
        </div>
            <i className="fas fa-eye" style={{marginRight:"5px"}}></i>
    </div>
    );
}
export default PageList;