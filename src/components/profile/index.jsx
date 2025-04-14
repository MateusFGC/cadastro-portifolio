import { useState } from 'react';

import Title from '../title'
import ButtonProfile from './ButtonProfile'
import ProfileSection from './ProfileSection'
import './style.module.css'

export default function ({title, tech, number, email, imagem}){

    // [valor, funçãoModificadora]
    const [followText, setFollowText] = useState("Fallow")

    // para aparecer o alerta quando o botão follow for clicado
    function heandleClick (ev){
        alert("Voçê esta seguindo agora!")   
        setFollowText("Following")
     
    }
    return (<>
                        <button onClick={heandleClick}> {followText} </button>

        <article>
            <header>
                <img src={imagem} alt={title} style={{width:"200px"}} />
                <Title>{title}
                    <button onClick={heandleClick}> {followText} </button>
                </Title>
            </header>
            <section>
                <hr />
                <ProfileSection>{tech}</ProfileSection>
                <hr />
                <ProfileSection>{number}</ProfileSection>
                <hr />
                <ProfileSection>{email}</ProfileSection>
                <hr />
            </section>
            <section className='ClassButton'>  
                    
                    <ButtonProfile>GitHub</ButtonProfile> 
                    <ButtonProfile>Linkedin</ButtonProfile> 
                    <ButtonProfile>Twtter</ButtonProfile> 
                             
            </section>
        </article>
    </>)
}