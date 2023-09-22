import { CheckSquare, Square } from 'phosphor-react'
import styles from './Box.module.css'

export function Box() {
    return (
        <article className={styles.container}>
            <header>
                <button className={styles.active}>BOTÃO PRIMÁRIO</button>
                <button>BOTÃO SECUNDÁRIO</button>
                <button>BOTÃO TERCIÁRIO</button>
            </header>
            <div className={styles.content}>
                <div className={styles.example}>
                    <button>INTERAJA COMIGO</button>
                </div>
                <div className={styles.options}>
                    <div>
                        <Square size={17} />
                        <span>DISABLED</span>
                    </div>
                    <div>
                        <Square size={17} />
                        <span>LOADING</span>
                    </div>
                    <div>
                        <Square size={17} />
                        <span>MOVABLE</span>
                    </div>
                </div>
            </div>
        </article>
    )
}