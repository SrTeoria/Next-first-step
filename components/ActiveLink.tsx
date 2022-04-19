import { useRouter } from "next/router"
import Link from "next/link"
import * as React from 'react'



const style: React.CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

interface Props {
  menu: {text: string; href: string}[];
}


export const ActiveLink: React.FC<Props> = ({ menu }) => {


  const { asPath } = useRouter()

  return (
    <>
      {
        menu && menu.map(({ text, href}) => {
          return(
            <Link key={href} href={ href }>
              <a style={ asPath === href ? style : undefined }>{ text }</a>
            </Link>
          )
        })
      }
    </>
  )
}