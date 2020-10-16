import React from 'react'
import Tabs from "../Tabs/Tabs";
import TabMobile from "../TabMobile/TabMobile";
import Thumbnail from "../Thumbnail/Thumbnail";
import ProductPrice from "../ProductPrice/ProductPrice";
import Button from "../Button/Button";
import { useProduct} from '../../context/useProduct';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import useViewport from "../../atom/useViewport";
import "./ProductContainer.css";

const ProductContainer = () => {
    const {products} = useProduct();
    const { width } = useViewport();
    if(products.length === 0) {
        return null;
    }
    const tabItems = [
        {
          id: 1,
          title: 'Description',
          content: products.description,
        },
        {
          id: 2,
          title: 'Caractéristiques',
          content: products.attributes,
        },
        {
          id: 3,
          title: 'Plus d\'infos',
          content: products.more_info,
        }
      ];
    return (
        <div className="product-container">
            <Row>
                <Col xs={12} lg={6}>
                    <Thumbnail {...products} />
                </Col>
                <Col xs={12} lg={6}>
                    <h1 className="product_title">{products.name}</h1>
                    <h2 className="product_subtitle">{products.description_short}</h2>
                    {/*<Tabs tabItems={tabItems} />*/}
                    
                    {width < 992 ? <TabMobile tabItems={tabItems} /> : <Tabs tabItems={tabItems} /> }

                    <div className="product-price__wrapper">
                        <ProductPrice prices={products.prices}/>
                        <Button withIcon title="Ajouter au panier" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductContainer
