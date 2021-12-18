const Heart = (props) => {
    return ( 
        <i 
        onClick={props.onLike}
        style={{cursor: 'pointer'}} 
        className={props.liked ? "fa fa-heart" : "fa fa-heart-o"}  
        aria-hidden="true"></i>
     );
}
 
export default Heart;
