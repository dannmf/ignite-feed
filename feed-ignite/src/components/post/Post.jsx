import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/dannmf.png" />
                    <div className={styles.authorInfo}>
                        <strong>Daniel Manoel</strong>
                        <span>Front-End Developer</span>
                    </div>
                </div>
                <time title='1 de Julho as 16h30' dateTime="2023-07-01 13:28:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 👋</p>
                <p>Acabei de subir mais um projeto no meu portifólio.</p>
                <p> <a href="">dannmf.com</a></p>
                <p><a href="">#react #ignite #rocketseat</a></p>
            </div>
        </article>
    )
}