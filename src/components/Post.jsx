
import styles from './Post.module.css'


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/50035007?v=4" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Isaac Zidoldo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>


                <time title='07 de junho ร s 20h54' dateTime='2022-05-11'>Publicado hรก 1h</time>

                

            </header>

            <div className={styles.content}>
                    
                    <p>Fala galeraa ๐</p>

                    <p>Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐</p>

                    <p> <a href=""> ๐  jane.design/doctorcare</a></p>

                    <p> 
                    <a href=""> #novoprojeto </a>{' '}
                    <a href=""> #nlw </a>{' '}
                    <a href="">  #rocketseat</a>{' '}
                    </p>
                    
                </div>

        </article>
    )
}