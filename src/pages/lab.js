import React from "react"
import Header from "../components/header";
import { Link } from "gatsby"

import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/styles.css";

import preview_dark_n_light from "../images/preview_dark_n_light.png";
import javaLogo from "../images/software-development-logos/png/003-java.png";
import stockExchange from "../images/stock_exchange.jpg";

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


const SecondPage = () => (
  <>
    <Header />
      <section  id="presentation" className="blockA">
      <SEO title="Page two" />

        <h1>The Gedev's Lab</h1>
        <p>Welcome to my laboratory, here is the place where I will show actual projects I am actually working on.</p>
        <p>It can be as much big projects as small ones just to test some new code.</p>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src={stockExchange} alt="stock exchange image" />
            <Card.Body>
              <Card.Title>Trading helper</Card.Title>
              <Card.Text>
                A very light programm to help to calculate the purchase yield after buying a stock.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={javaLogo} />
            <Card.Body>
              <Card.Title>Project</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={javaLogo} />
            <Card.Body>
              <Card.Title>Project</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>



        <CardGroup>
          <Card>
            <Card.Img variant="top" src={javaLogo} />
            <Card.Body>
              <Card.Title>Project</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={javaLogo} />
            <Card.Body>
              <Card.Title>Project</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={javaLogo} />
            <Card.Body>
              <Card.Title>Project</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>


        <Link to="/">Go back to the homepage</Link>
      </section>


  </>
)

export default SecondPage
