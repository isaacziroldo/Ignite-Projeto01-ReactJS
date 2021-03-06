import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar(props){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt="" 
            />
            <div className={styles.profile}>

                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/50035007?v=4" alt="" />
                <strong>Isaac Ziroldo</strong>
                <span>Web Developer</span>

            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}