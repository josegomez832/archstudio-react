import React, {useState} from 'react'
import Image from 'next/image'
import { links } from '../utils/constants'
import {FiMenu} from 'react-icons/fi'
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
 
    return (
      <Container>
        <Row>
          <Col xs={6} md={2}>
          <Link href="/">
              <a>
                  <Image
                  src="/ArchLogo.svg"
                  alt="Arch Studio Houston"
                  width={96}
                  height={40}
                />
              </a>
            </Link>
          </Col>
          <Col>
          <ul className="nav" role="navigation">
                { links.map( (link) => {
                  const {id, text, url} = link;
                    return (
                    <li key={id}><Link href={url}><a>{text}</a></Link></li>  
                    )
                })}
              </ul>
          </Col>
        </Row>
      
              </Container>
    )
}
