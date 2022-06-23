import s from '../../styles/preloader.module.css'
type Props = {}

const ProgressBar = (props: Props) => {
    return (
        <div className={s.progress}>
            <div className={s.progressValue}></div>
        </div>
    )
}

export default ProgressBar