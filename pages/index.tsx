import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
    
        <iframe width={'100%'} height={'1000'} src={'/beta-app/prototype-1/WebGL/index.html'}/>
        <iframe width={'100%'} height={'1000'} src={'/beta-app/prototype-2/WebGL/index.html'}/>
   
      </>

  )
}
