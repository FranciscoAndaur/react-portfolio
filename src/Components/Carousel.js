import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
//need to import images from assets images 1000 x 1600 px TODO
import DevDream from '../assets/inages/DevDream.png';
import EventGenerator from '../assets/inages/EventGenerator.png';
import Linkedin from '../assets/inages/Linkedin.png';
import Komorebi from '../assets/inages/Komorebi.png';

import Card from '../Components/Card'


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Komorebi',
                    subTitle: 'Plant Catalogue and Care app.',
                    imgSrc: Komorebi,
                    link: 'https://github.com/FranciscoAndaur/new-leaf',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Linked in',
                    subTitle: 'Hit me up, on Linked-in.',
                    imgSrc: Linkedin,
                    link: 'https://www.linkedin.com/in/franciscoandaur/',
                    selected: false   
                },
                {
                    id: 2,
                    title: 'DevDream',
                    subTitle: 'Instagram for dreams.',
                    imgSrc: DevDream,
                    link: 'https://vimeo.com/manage/470795692/general',
                    selected: false   
                },
                {
                    id: 3,
                    title: 'Event Generator',
                    subTitle: 'Event Generator',
                    imgSrc: EventGenerator,
                    link: 'https://github.com/FranciscoAndaur/kfc-front-end',
                    selected: false   
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id)
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
    
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
    
}

export default Carousel