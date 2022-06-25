import Image from 'next/image'
import { links } from '../utils/constants'
import Link from 'next/link';
export default function header() {
    return (
        <div className="container navigation-header">
        <div className="row">
          <div className="col-2">
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
              
          </div>
          <div className="col-10">
            <ul className="nav" role="navigation">
              { links.map( (link) => {
                const {id, text, url} = link;
                  return (
                  <li key={id}><Link href={url}><a>{text}</a></Link></li>  
                  )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
}
