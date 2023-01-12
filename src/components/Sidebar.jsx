import {Outline} from '../assets/content/Outline';
import {useParams} from 'react-router-dom';
// 

const Sidebar = () => {
    
    const param = useParams();
    
    return (
        <ul>
            { 
                Outline.map(element => {
                    return (
                        param.topic === element.link ? 
                    <li key={element.link}>
                        <a style={{fontWeight : 'bold',fontSize: '17px'}} href={`/tutorials/${element.link}`}>{element.topic}</a>
                        <hr style={{color:'white', margin : '5px', borderTop: '2px solid lightgreen'}}/>
                    </li>
                    :
                    <li key={element.link}>
                        <a href={`/tutorials/${element.link}`}>{element.topic}</a>
                        <hr style={{color:'white', margin : '5px', borderTop: '2px solid lightgreen'}}/>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default Sidebar;