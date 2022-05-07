import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (

        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between javascript and nodejs.</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Javascript</h3>
                            <p>Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM. 	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </p>
                            <h3>NodeJS</h3>
                            <p>
                                NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                            </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> When should you use nodejs and when should you use mongodb</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <p>MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>SQL</h3>
                            <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Follows ACID property.</p>
                            <h3>NoSQL</h3>
                            <p>Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable.Follows CAP(consistency, availability, partition tolerance)</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> What is the purpose of jwt and how does it work.</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;