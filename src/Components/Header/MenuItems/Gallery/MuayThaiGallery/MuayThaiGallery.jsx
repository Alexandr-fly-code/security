import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import {images} from './images/allImages';
import MenuGallery from '../MenuGallery/MenuGallery';

const propTypes = {
    
};


class MuayThaiGallery extends PureComponent {
    render() {
        return (
            <div className='container'>
            <MenuGallery/>

            <ImageGallery items={images} autoPlay={true} showBullets={true} showIndex={true} />
                            {/* {massImage.map(el => <ul>
            
                                <li><img src={el} alt=""/></li>
                                
                                </ul>)} */}
                        </div>
        );
    }
}


MuayThaiGallery.propTypes = propTypes;


export default MuayThaiGallery;
