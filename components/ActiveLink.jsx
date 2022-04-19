import { useRouter } from "next/router"
import Link from "next/link"


export const ActiveLink = ({ menu }) => {

  const style = {
    color: '#0070f3',
    textDecoration: 'underline'
  }

  const { asPath } = useRouter()

  return (
    <>
      {
        menu && menu.map(({ text, href, index}) => {
          return(
            <Link key={index} href={ href }>
              <a style={ asPath === href ? style : null }>{ text }</a>
            </Link>
          )
        })
      }
    </>
  )
}