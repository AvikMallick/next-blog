import Menu from '@/components/Menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa
              ipsa nemo aliquid porro laudantium mollitia! Iste harum deserunt,
              voluptas voluptatem error minima totam. Corrupti numquam vitae vel
              ipsa officiis?
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa
              ipsa nemo aliquid porro laudantium mollitia! Iste harum deserunt,
              voluptas voluptatem error minima totam. Corrupti numquam vitae vel
              ipsa officiis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa
              ipsa nemo aliquid porro laudantium mollitia! Iste harum deserunt,
              voluptas voluptatem error minima totam. Corrupti numquam vitae vel
              ipsa officiis?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default SinglePage;