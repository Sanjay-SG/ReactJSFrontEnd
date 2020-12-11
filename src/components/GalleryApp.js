import React, { useEffect } from "react"
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import img1 from "D://Projects/React/website1/website1/src/img/img2.jpg"
import GallerImgs from "./GalleryImgs";
import GalleryImgs from "./GalleryImgs";
import "./GalleryApp.css"

const GalleryApp = () =>
{
    useEffect(() =>
    {
        document.title = "Gallery"
    }, []);

    const nCard = (val) =>
    {
        console.log(val);
        return(
            <Card>
                <CardImg className="photo" top width="100%" src={val.img} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{val.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{val.sub_title}</CardSubtitle>
                <CardText>{val.text}</CardText>
                <Button color="primary">More</Button>
                </CardBody>
            </Card>  
        );
    }

    return(
        <>
            <h4>Gallery</h4>
            {/* <Card>
                <CardImg top width="100%" src={img1} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">Button</Button>
                </CardBody>
            </Card>           */}

            {/* <Card>
                <CardImg top width="100%" src={GalleryImgs[0].img} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{GalleryImgs[0].title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{GalleryImgs[0].sub_title}</CardSubtitle>
                <CardText>{GallerImgs[0].text}</CardText>
                <Button color="primary">Button</Button>
                </CardBody>
            </Card>   

            <Card>
                <CardImg top width="100%" src={GalleryImgs[1].img} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{GalleryImgs[1].title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{GalleryImgs[1].sub_title}</CardSubtitle>
                <CardText>{GallerImgs[1].text}</CardText>
                <Button color="primary">Button</Button>
                </CardBody>
            </Card>    */}
            
            {GalleryImgs.map(nCard)}

        </>
    )
}

export default GalleryApp;