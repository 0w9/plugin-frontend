import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Build your landing page.<br />
        Completely by AI.
      </h1>

      <h1 className={styles.subheader}>
        We made a Figma Plugin, that allows you to easily generate <br />
        full landing pages using AI. All we need is a two-sentence <br />
        description of your vison.
      </h1>


      <div className={styles.button_container}>
        
        <div className={styles.button_subcontainer}>

         <div className={styles.button}>
            <a className={styles.button_text}>
              Start your  next design.
            </a>          
          </div> 

          <div className={styles.button_shadow} />     
        </div>
      </div>

      

    </div>
  )
}

/*

          <div className={styles.button_shadow_container}>
            <div className={styles.button_shadow} />
          </div>

          <div className={styles.red_blob}>
        <svg width="329" height="501" viewBox="0 0 329 501" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.121338 0.983307C49.6546 10.1822 84.8291 12.3428 129.306 36.5099C179.455 63.7588 224.282 98.6066 254.61 146.955C292.371 207.153 346.967 277.169 322 343.7C296.908 410.566 206.427 419.415 141.336 448.807C90.6764 471.682 54.3501 509.07 -0.121323 498L-0.121338 389.5V326V156.983V103.5V69V36.5099V0.983307Z" fill="#371717"/>
        </svg>
      </div>

      <div className={styles.blue_blob}>
        <svg width="265" height="499" viewBox="0 0 265 499" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M265 0C224.838 9.19851 196.457 11.359 160.571 35.5252C120.108 62.773 83.9391 97.6194 59.4687 145.966C29.0012 206.162 -15.0497 276.175 5.09479 342.703C25.3407 409.567 98.3457 418.415 150.864 447.806C191.739 470.681 221.049 508.067 265 496.997L265 388.501V325.004V155.994V102.513V68.014V35.5252V0Z" fill="#3A698A"/>
        </svg>
      </div>

          */
