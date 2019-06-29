import React from 'react';

const Like = ({liked, id, onClick}) => {
    let classes = liked? 'fa fa-heart' : 'fa fa-heart-o';
    return ( <i className={classes} style={{cursor: 'pointer'}} onClick={() => onClick(id)} ></i>
    );
}
 
export default Like;
