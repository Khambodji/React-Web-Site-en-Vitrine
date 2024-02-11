import React from 'react';
import "./FaqAccordion.css";
import Accordion from 'react-bootstrap/Accordion';

export default function FaqAccordion() {
  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          Frequently asked questions
        </h2>
        <p className="text-center mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet
          libero veniam eius suscipit velit doloremque illo ipsum nisi quae
          dolorum, quisquam dolor vitae alias dolore sed magnam. Tenetur,
          expedita.
        </p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>First question</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur voluptatem impedit animi dolor temporibus provident
              veniam, quidem suscipit nesciunt quis nihil obcaecati aut optio
              accusamus, nulla fugiat quisquam sint, reprehenderit dolorem
              laborum facere magnam consequuntur. Voluptatum aut possimus nulla
              mollitia.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Second question</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur voluptatem impedit animi dolor temporibus provident
              veniam, quidem suscipit nesciunt quis nihil obcaecati aut optio
              accusamus, nulla fugiat quisquam sint, reprehenderit dolorem
              laborum facere magnam consequuntur. Voluptatum aut possimus nulla
              mollitia.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Third question</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur voluptatem impedit animi dolor temporibus provident
              veniam, quidem suscipit nesciunt quis nihil obcaecati aut optio
              accusamus, nulla fugiat quisquam sint, reprehenderit dolorem
              laborum facere magnam consequuntur. Voluptatum aut possimus nulla
              mollitia.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Fourth question</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur voluptatem impedit animi dolor temporibus provident
              veniam, quidem suscipit nesciunt quis nihil obcaecati aut optio
              accusamus, nulla fugiat quisquam sint, reprehenderit dolorem
              laborum facere magnam consequuntur. Voluptatum aut possimus nulla
              mollitia.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

 