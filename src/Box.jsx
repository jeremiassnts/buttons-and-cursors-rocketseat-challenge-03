import { CheckSquare, Square } from 'phosphor-react'
import styles from './Box.module.css'
import { useState } from 'react'

export function Box() {
    const [buttonType, setButtonType] = useState('primary')

    return (
        <article className={styles.container}>
            <header>
                <button onClick={() => setButtonType('primary')} className={[buttonType == 'primary' ? styles.active : {}]}>BOTÃO PRIMÁRIO</button>
                <button onClick={() => setButtonType('secondary')} className={[buttonType == 'secondary' ? styles.active : {}]}>BOTÃO SECUNDÁRIO</button>
                <button onClick={() => setButtonType('tertiary')} className={[buttonType == 'tertiary' ? styles.active : {}]}>BOTÃO TERCIÁRIO</button>
            </header>
            <div className={styles.content}>
                <div className={styles.example}>
                    <button className={[styles[buttonType]]}>INTERAJA COMIGO</button>
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