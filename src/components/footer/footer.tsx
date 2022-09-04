import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <h2>email</h2>
                <h3>sasha-perchugov2@mail.ru</h3>
            </div>
            <div className={styles.links}>
                <h2>number</h2>
                <h3>+7 927 446 74 19</h3>
            </div>
            <div className={styles.links}>
                <h2>telegram</h2>
                <h3>@Alex_un_de_r</h3>
            </div>
        </footer>
    );
};

export default Footer;