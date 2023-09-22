import { CheckSquare, CircleNotch, List, Square } from 'phosphor-react'
import styles from './Box.module.css'
import { useState } from 'react'

export function Box() {
    const [buttonType, setButtonType] = useState('primary')
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [movable, setMovable] = useState(false)

    const setLoadingOption = (value) => {
        if (value) {
            setLoading(true)
            setMovable(false)
        } else {
            setLoading(false)
        }
    }

    const setMovableOption = (value) => {
        if (value) {
            setLoading(false)
            setMovable(true)
        } else {
            setMovable(false)
        }
    }

    return (
        <article className={styles.container}>
            <header>
                <button onClick={() => setButtonType('primary')} className={[buttonType == 'primary' ? styles.active : {}]}>BOTÃO PRIMÁRIO</button>
                <button onClick={() => setButtonType('secondary')} className={[buttonType == 'secondary' ? styles.active : {}]}>BOTÃO SECUNDÁRIO</button>
                <button onClick={() => setButtonType('tertiary')} className={[buttonType == 'tertiary' ? styles.active : {}]}>BOTÃO TERCIÁRIO</button>
            </header>
            <div className={styles.content}>
                <div className={styles.example}>
                    <button disabled={disabled} className={`${styles[buttonType]} ${loading && styles.buttonLoading} ${movable && styles.buttonMovable}`}>
                        {loading && <CircleNotch className={styles.loading} size={18} />}
                        {movable && <List size={18} />}
                        INTERAJA COMIGO
                    </button>
                </div>
                <div className={styles.options}>
                    <div>
                        {!disabled && <Square size={17} onClick={() => setDisabled(true)} />}
                        {disabled && <CheckSquare size={17} onClick={() => setDisabled(false)} />}
                        <span>DISABLED</span>
                    </div>
                    <div>
                        {!loading && <Square size={17} onClick={() => setLoadingOption(true)} />}
                        {loading && <CheckSquare size={17} onClick={() => setLoadingOption(false)} />}
                        <span>LOADING</span>
                    </div>
                    <div>
                        {!movable && <Square size={17} onClick={() => setMovableOption(true)} />}
                        {movable && <CheckSquare size={17} onClick={() => setMovableOption(false)} />}
                        <span>MOVABLE</span>
                    </div>
                </div>
            </div>
        </article>
    )
}