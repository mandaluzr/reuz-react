import React from 'react';
import pablo from "../../assets/pablo.png";
import PhotoLoader from '../photoLoader/photoLoader'; 
import { useParams } from 'react-router';
const ProductImages = ({ descData, setDescData, secondAction}) => {

    const params = useParams();
    const productId = params.id;

    return (
        <div className="main_form_container">
            <div className="form_container">
                <div className="form_title1">
                    <h1><b>Sell your product with Reuz</b></h1>
                </div>
                <div className="form_title2">
                    <h2>Description</h2>
                </div>
                <form >
                    <div className="form_body">
                        <textarea
                            placeholder="Short description of your product"
                            className="form_full_input1"
                            rows="8"
                            type="text"
                            onChange={(e) =>
                                setDescData({ ...descData, description: e.target.value })
                            }
                        />
                        <div className="form_title2">
                            <h2>Pictures</h2>
                        </div>
                        <PhotoLoader productId={productId} />
                        <button className="button_a" onClick={secondAction}>
                            <h1 className="button_content">Create Listing</h1>
                        </button>
                    </div>
                </form>
            </div>
            <div className="box_pablito">
                <img src={pablo} alt="pablo" className="pablito" />
            </div>
        </div>
    )
}
export default ProductImages;