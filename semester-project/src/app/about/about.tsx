import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './about.module.css'

export default function About() {
  return (
    <>
    <div className={styles.topPart}>
    <div className={styles.welcomeContainer}>
      <h1 id={styles.welcomeTitle}>Welcome to EcoSpark – </h1><p>Pioneering Tomorrow's Drive</p>
      <p id={styles.welcomeText}>EcoSpark is not merely an electric car company; we are the architects of a cleaner, greener automotive landscape. Our commitment extends beyond manufacturing electric vehicles; we are crafting a tomorrow where transportation is synonymous with environmental responsibility and cutting-edge technology.</p>
    </div>
    <img src='/images/image 33.png' id={styles.mainImage}></img>
    </div>
    
    <div className={styles.boxContainer}>
      <div className={styles.hashtagBox}>
        <h1 className={styles.hashtagTitle}>#Strategy</h1>
        <p className={styles.hashtagText}>At EcoSpark, strategy is not just a plan; it's a commitment to innovation and adaptability. We are strategically positioned to lead the charge towards a zero-emission world, investing in cutting-edge technologies and sustainable practices. Our commitment to strategic excellence ensures that every EcoSpark vehicle is not just an automobile but a step towards a cleaner and brighter future.</p>
      </div>
      <div className={styles.hashtagBox}>
        <h1 className={styles.hashtagTitle}>#Integrity</h1>
        <p className={styles.hashtagText}>Integrity is the heartbeat of EcoSpark. We believe in transparency, accountability, and ethical business practices. Our commitment to integrity extends from the design board to the showroom, ensuring that our customers experience not only the thrill of driving an electric vehicle but also the peace of mind that comes with knowing they have made a responsible choice.</p>
      </div>
      <div className={styles.hashtagBox}>
        <h1 className={styles.hashtagTitle}>#Diversity</h1>
        <p className={styles.hashtagText}>Diversity is our strength at Ecospark. We celebrate the richness of ideas, perspectives, and experiences that a diverse team brings. From our manufacturing facilities to the executive boardroom, we foster an environment that values inclusivity, equality, and the power of different voices coming together to drive innovation.</p>
      </div>
    </div>
  </>
  );
}