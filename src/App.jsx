import Profile from "./components/profile";
import Marcia from './assets/Gemini_Marcia.jpg'
import Carlos from './assets/Gemini_Carlos.jpg'
import Bruna from './assets/Gemini_Bruna.jpg'



export default function () {
   return (
        <>
            <Profile
            imagem={Marcia}
            title="Marcia cruz" 
            tech="Front-end React" 
            number="19-9-2122-6523"
            email="Marcia.cruz@gmail.com"/>

            <Profile 
            imagem={Carlos}
            title="Carlos Alfredo" 
            tech="Back-end PHP " 
            number="19-8-3333-3333"
            email="Carlos.Alfredo@hotmail.com"/>

            <Profile 
            imagem={Bruna}
            title="Bruna Rafaela" 
            tech="Tech lead" 
            number="19-8-4444-4444"
            email="Bruna.Rafaela@gmail.com"/>

        </>
    
    )
}