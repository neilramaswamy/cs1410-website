import { StaffMember } from 'data/staff'
import styles from './StaffCard.module.scss'

export const StaffCard = (props: StaffMember): JSX.Element => {

    return (
        <header className={styles.container}>
            <img src={props.url}/>
            <h4>{props.name}</h4>
            <h5>{props.pronouns}</h5>
            <h6>{props.bio}</h6>
            <h6>Favorite arcade game: {props.fav}</h6>
        </header>
    )
}
