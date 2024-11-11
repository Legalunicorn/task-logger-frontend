import "./footer.scss"
const Footer = () => {
    return (
        <footer>
            <h4>Created by LegalUnicorn</h4>
            <div className="footer-content">
                <section>
                    <p>About</p>
                    <p>This is my first project with a spring based API. Its a purpose to put my learning of Hibernate mappings between entities into practice.</p>
                </section>
                <section>
                    <p>Source code</p>
                    <a target="_blank" href="https://github.com/Legalunicorn/task-logger-frontend">Frontend (React)</a>
                    <br></br>
                    <a target="_blanK" href="https://github.com/Legalunicorn/spring_logger">Backend (Spring Boot)</a>
                </section>

            </div>



        </footer>
    );
}

export default Footer;