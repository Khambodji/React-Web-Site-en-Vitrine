import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import ChooseSection from '../../components/ChooseSection/ChooseSection'
import StartCoursesImg from '../../utils/images/10.png'
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion'
import { Card } from 'react-bootstrap'
import BlogImg1 from '../../utils/images/11.png';
import BlogImg2 from "../../utils/images/12.png";
import BlogImg3 from "../../utils/images/13.png";

const blogs = [
  {
    id: 1,
    img: [BlogImg1],
    title: "Blog1",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus facilis eligendi possimus aut enim a pariatur, deleniti
            explicabo magnam vel consequatur quasi veritatis corporis ut fugiat
            unde? Consequuntur, odit animi.`,
  },
  {
    id: 2,
    img: [BlogImg2],
    title: "Blog2",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus facilis eligendi possimus aut enim a pariatur, deleniti
            explicabo magnam vel consequatur quasi veritatis corporis ut fugiat
            unde? Consequuntur, odit animi.`,
  },
  {
    id: 3,
    img: [BlogImg3],
    title: "Blog3",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus facilis eligendi possimus aut enim a pariatur, deleniti
            explicabo magnam vel consequatur quasi veritatis corporis ut fugiat
            unde? Consequuntur, odit animi.`,
  },
];


export default function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold">React Univerty London</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus facilis eligendi possimus aut enim a pariatur, deleniti
            explicabo magnam vel consequatur quasi veritatis corporis ut fugiat
            unde? Consequuntur, odit animi.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Our Courses
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="py-5">
        <ChooseSection />
      </div>
      <div className="py-5 bg-ligth">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">2024 start courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit ipsam repellendus consequuntur repudiandae,
                necessitatibus temporibus et commodi vitae autem praesentium
                dolor unde, assumenda adipisci. Quis sit sapiente odio repellat
                nam!
              </p>
              <Link to="/courses">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Lear More{" "}
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={StartCoursesImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <FaqAccordion />
      </div>
      <div className="blog-section text-ligth py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">
            Latest on the blog
          </h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4 ">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type="button" className="btn btn-danger btn-lg mt-5">
              Read more Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
