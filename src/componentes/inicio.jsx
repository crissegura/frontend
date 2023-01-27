import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';



const Inicio = ( ) => {

    return(
        <div className="pageInicio">
            <div className="div1Inicio">
                <h1 className="h1Inicio">
                    Bienvenidos a 
                    <br />
                    <span className="span">
                        WWW.CSDESARROLLOWEB.COM
                    </span> 
                </h1>
            </div>
            <div className="introPlanes">
                <h3 className='h3Into'>¿Necesitás un sitio web?</h3>
                <h5 className='h5InPlanes'>Si tenés un emprendimiento, un negocio, un restaurante o simplemente querés un sitio web, estás en el lugar correcto. En <span className='spanIntro'>CS DESARROLLO WEB</span> contamos con la experiencia y la calidad para desarrollar tu sitio. Te invitamos a que conozcas nuestros planes!
                </h5>
            </div>
            <div className="planes">
                <div className="plan">
                <Card className='card'>
                    <Card.Img variant="top" src='' />
                    <Card.Body>
                        <Card.Title>
                            Plan catálogo
                        </Card.Title>
                        <Card.Text>
                        Ideal para bares, restoranes, emprendimientos.
                        Mirá un ejemplo haciendo click  <a href="https://muestra-bares.vercel.app/" target='-'>acá.</a>
                        </Card.Text>
                        <a href="/plancatalogo"> 
                            <Button>
                                Más información
                            </Button>
                        </a>
                    </Card.Body>
                </Card>
                </div>
                <div>
                    <Card className='card'>
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>
                                Plan básico
                            </Card.Title>
                            <Card.Text>
                                Cuenta con hasta 4 secciones, como por ejemplo: inicio, sobre nosotros, productos y contacto.
                            </Card.Text>
                            <a href="/planbasico"> 
                            <Button>
                                Más información
                            </Button>
                        </a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="plan">
                    <Card className='card'>
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>
                                Plan e-commerce
                            </Card.Title>
                            <Card.Text>
                                Cuenta con hasta 6 secciones, a elección y conexión para pagar con mercadopago.
                            </Card.Text>
                            <a href="/planecommerce"> 
                            <Button>
                                Más información
                            </Button>
                        </a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="elegirnos">
                <div className="textylisEl">
                    <div className="lista">
                        <h4 className="h4elegirnos"> ¡Algunos motivos para elegirnos! </h4>
                        <ul>
                            <li> 🚀 Precios accesibles</li>
                            <li> 🚀 Atención personalizada</li>
                            <li> 🚀 Te enseñamos a auto-administrar tu página</li>
                            <li> 🚀 Trabajos profesionales de excelente calidad</li>
                            <li> 🚀 Matenimiento gratis durante los primeros 6 meses</li>
                            <li> 🚀 Adaptamos tu web 100% a tu gusto, no usamos plantillas</li>
                            <li> 🚀 Te enseñamos a que puedas comprar tu dominio a parte, gratis</li>
                            <li> 🚀 Vas a poder visualizar perfectamente tu página en cualquier dispositivo móvil</li>
                        </ul>
                    </div>
                    <div>
                        <img 
                            src=''
                            alt="Imagen contrato"
                            className="imgElegirnos"
                        />
                    </div>
                </div>
            </div>
            <div className="irApresupuesto">
                <h3 className='h3BP'>¿Estás buscando un presupuesto? </h3>
                <div className="divPresupuesto">
                    <h5 className='h5SoliPres'>Dejanos tu datos de contacto y contanos un poco de la web que querés diseñar. En menos de 24hs nos vamos a estar comunicando con vos! Tené en cuenta que una vez hecho el presupuesto, es válido por una semana. </h5>
                    
                    <a href="/presupuesto">
                        <Button>
                            Solicitar presupuestOOOOO
                        </Button>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Inicio;