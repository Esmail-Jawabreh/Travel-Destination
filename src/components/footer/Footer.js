import { React } from "react";
import './Footer.css';

function Footer() {
    return (
        <div class='footer'>
            <h5>© 2023 All Rights Reserved.</h5>

            <div class="wrapper">
                <div class="social-icons">
                    <a class="social-icon mail" href="mailto:esmailjawabreh@gmail.com" target="_blank" rel="author">
                        <i class="fa-sharp fa-solid fa-envelope"></i>
                    </a>

                    <a class="social-icon instagram" href="https://www.instagram.com/esmail.sudgi/" target="_blank"
                        rel="author">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a class="social-icon github" href="https://github.com/Esmail-Jawabreh" target="_blank" rel="author">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;