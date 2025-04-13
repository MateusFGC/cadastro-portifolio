import Title from '../title'
import ButtonProfile from './ButtonProfile'
import ProfileSection from './ProfileSection'
import './style.module.css'

export default function ({title, tech, number, email, imagem}){
    return (<>
        <article>
            <header>
                <img src={imagem} alt={title} style={{width:"200px"}} />
                <Title>{title}</Title>
            </header>
           
                <hr />
                <ProfileSection>{tech}</ProfileSection>
                <hr />
                <ProfileSection>{number}</ProfileSection>
                <hr />
                <ProfileSection>{email}</ProfileSection>
                <hr />
            
                <ButtonProfile >        
                    <button>GitHub</button> 
                    <button>Linkedin</button> 
                    <button>Twtter</button> 
                </ButtonProfile>             
            
        </article>
    </>)
}