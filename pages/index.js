import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
 <Head>
   <title>Ninja List | Home </title>
 </Head>
      <h1 className={styles.title}>home page</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae eius eligendi corrupti, sapiente culpa facilis ipsum, quia blanditiis animi rerum accusamus fuga delectus numquam temporibus. Mollitia odio nemo itaque voluptas!</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae eius eligendi corrupti, sapiente culpa facilis ipsum, quia blanditiis animi rerum accusamus fuga delectus numquam temporibus. Mollitia odio nemo itaque voluptas!</p>
      <h2><Link href="/ninjas">
        <a className={styles.btn}>
        See listings</a>
        </Link></h2>
     
    </>
  )
}
