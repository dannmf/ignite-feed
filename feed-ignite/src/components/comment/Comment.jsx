import {BsFillTrashFill} from 'react-icons/bs'
import {FaThumbsUp} from 'react-icons/fa'
import { Avatar } from '../avatar/Avatar'
import styles from './Comment.module.css'
export function Comment(){

    return(
        <div className={styles.comment}>
            <Avatar src="https://github.com/dannmf.png" hasBorder = {false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Adum</strong>
                            <time title='1 de Julho as 16h30' dateTime="2023-07-01 13:28:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Comentário'> 
                            <BsFillTrashFill size={20} />
                        </button>
                    </header>
                    <p>Muito bom dev, parabéns!!</p>
                </div>
                <footer className={styles.footer}>
                    <button>
                        <FaThumbsUp/>
                        Aplaudir <span>03</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}