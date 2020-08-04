import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://pm1.narvii.com/6499/d213a8b0a1f2b086e0d83c9b8ebd72a8baf6b5c5_00.jpg" alt="Deidara"/>
                <div>
                    <strong>Deidara</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por umas das minhas explosões. 
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;