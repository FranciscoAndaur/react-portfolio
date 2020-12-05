import React from 'react';

import CardInfo from '../Components/CardInfo'

const Card = (props) => {
        
    return(
            <div className="d-inline-block f-card" onClick={(e) => props.click(props.item)}>
                <img className="f-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
            </div>
        )
    }

export default Card