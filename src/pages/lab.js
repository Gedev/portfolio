import React from "react"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Header from "../components/header";
import { Link } from "gatsby"

import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/styles.css";

import javaLogo from "../images/software-development-logos/png/003-java-redim.png";
import stockExchange from "../images/stock_exchange_redim.jpg";

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


const SecondPage = () => (
  <>
    <Header />
      <section  id="presentation" className="blockA">
      <SEO title="Page two" />

        <h1>The Gedev's Lab</h1>
        <p>Welcome to my laboratory, here is the place where I will show actual projects I am actually working on.</p>
        <p>It can be as much big projects as small ones just to test some new code.</p>


        <CardDeck>
          <div data-sal="slide-up"
               data-sal-delay="1200"
               data-sal-easing="ease"
               data-sal-duration="1000">
            <Card>
              <Card.Img variant="top" src={stockExchange} alt="stock exchange image" />
              <Card.Body>
                <Card.Title>Trading helper</Card.Title>
                <Card.Text>
                  A very light program to help to calculate the purchase yield of a stock.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                In progress<ProgressBar striped variant="success" animated now={100} />
              </Card.Footer>
            </Card>
          </div>

          <div data-sal="slide-up"
               data-sal-delay="200"
               data-sal-easing="ease"
               data-sal-duration="1000">
            <Card>
              <Card.Img variant="top" src={javaLogo} />
              <Card.Body>
                <Card.Title>Project</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional

                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </div>

          <div data-sal="slide-up"
               data-sal-delay="200"
               data-sal-easing="ease"
               data-sal-duration="1000">
            <Card>
              <Card.Img variant="top" src={javaLogo} />
              <Card.Body>
                <Card.Title>Project</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional

                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </div>

        </CardDeck>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={javaLogo} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={javaLogo} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
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
              <Card.Title>Card title</Card.Title>
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
        </CardDeck>


        <Link to="/">Go back to the homepage</Link>
      </section>


  </>
)

export default SecondPage
