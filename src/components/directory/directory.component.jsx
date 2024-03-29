import React from 'react';

import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){

    super();

    this.state = {
        sections: [
            {
                title: 'HATS',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
              },
              {
                title: 'JACKETS',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: ''
              },
              {
                title: 'SNEAKERS',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: ''
              },
              {
                title: 'WOMENS',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: ''
              },
              {
                title: 'MENS',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: ''
              }
        ]
    }
    }

    render(){
        return (

            <div className='directory-menu'>
                {
                   this.state.sections.map(({id, ...otherSectionProps}) => (
                       <MenuItem key={id} {...otherSectionProps}/>
                   ))   
                }

            </div>
        )
    }
}

export default Directory;