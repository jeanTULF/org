import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='hhttps://www.facebook.com/jean.polo.3762/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.linkedin.com/in/jean-marcos-polo-parker-087951271/'>
                <img src="/img/linkedin.svg" alt='LinkedIn' className="linkedin" />
            </a>
            <a href='https://www.instagram.com/jeanmarcos_pp09/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Jean Polo</strong>
    </footer>
}

export default Footer