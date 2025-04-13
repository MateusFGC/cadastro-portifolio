import './index.css'

export default function ({title, tech, number, email, imagem}){
    return (<>
        <article>
            <header>
                <img src={imagem} alt={title} style={{width:"200px"}} />
                <h1>{title}</h1>
            </header>
            <section>
                <hr />
                <h3>{tech}</h3>
                <hr />
                <h3>{number}</h3>
                <hr />
                <h3>{email}</h3>
                <hr />
            </section>
            <section className='ClassButton'>            
                    <button>GitHub</button> 
                    <button>Linkedin</button> 
                    <button>Twtter</button>            
            </section>
        </article>
    </>)
}