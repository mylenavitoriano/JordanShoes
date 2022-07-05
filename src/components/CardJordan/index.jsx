import styles from './styles.module.scss'

export default function CardJordan(props) {
    return(
        <div className={styles.cardJordan}>
            <img src={props.img} alt="" />
        </div>
    )
}