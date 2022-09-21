import './App.css';
import {  UncontrolledCarousel, Card , CardImg , CardBody, CardTitle, CardText } from 'reactstrap';


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
  <><nav class="navbar navbar-expand-lg bg-light" >
  <div class="container-fluid">   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="App.js">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#cnube">¿Que es la computacion en la nube?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#mnube">Modelos de la nube</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#SNUBE">Servicios en la nube</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Funcionalidad de los Cloud services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Empresas de Cloud Services</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
 <UncontrolledCarousel items={[
    {
      altText: 'Slide 1',
      caption: 'Amazon Web Services',
      key: 1,
      src: 'https://cloudcomputinggate.com/wp-content/uploads/2022/03/AWS-Cloud-Foundation.jpg'
    },
    {
      altText: 'Slide 2',
      caption: '¿Que es la computacion en la nube?',
      key: 2,
      src: 'https://tienda.digital/wp-content/uploads/2021/09/Que-es-Cloud-Computing.jpg'
    },
    {
      altText: 'Slide 3',
      caption: 'Cloud computing',
      key: 3,
      src: 'https://itvalhalla.com/wp-content/uploads/2019/09/cloud-services-difference_network-coverage.jpg'
    }
  ]}/>

<Card className="my-2">
    
    <CardBody id='cnube'>
      <CardTitle tag="h5">
        <h1>¿Que es la computacion en la nube?</h1>
      </CardTitle>
      <CardText>
      La computación en la nube (o cloud computing, en inglés) o conocida también como servicios en la nube, es una tecnología que permite acceder remotamente, de cualquier lugar del mundo y en cualquier momento, a softwares,
      almacenamiento de archivos y procesamiento de datos a través de Internet, sin la necesidad de conectarse a un ordenador personal o servidor local
      </CardText>
      <CardText>
      En pocas palabras, la computación en la nube utiliza la conectividad y gran escala on demand del Internet para hospedar muchos recursos, programas e información, y 
      permite que el usuario ingrese a ellos través de cualquier ordenador, tablet o celular.
      </CardText>
      
    </CardBody>
    <CardImg
      alt="Card image cap"
      bottom
      src="https://www.ealde.es/wp-content/uploads/2019/03/cloud-computing.jpg"
      style={{
        height: 500
      }}
      width="70%"
    />

  </Card>
  <Card className="my-2" >
    <CardBody id='mnube'>
      <CardTitle tag="h5">
       <h1> Modelos de implementación de la computacion en la nube</h1>
      </CardTitle>
     
      <CardText>
      <ul>
        <li><h2>Nube privada</h2></li>
        <p>El modelo de nube privada o También se conoce como "nube interna" y se refiere a la capacidad de ingresar a cierta información dentro de una determinada frontera u organización.
           La plataforma en la nube se implementa en un entorno seguro basado en la nube que está protegido por potentes firewalls y bajo la supervisión del 
           departamento de TI de una organización. La nube privada ofrece una mayor flexibilidad de control sobre los recursos de la nube es decir en pocas palabras 
           hace referencia a la capacidad de acceder a sistemas y se los recursos de computación en nube que se usan exclusivamente en una misma empresa u organización.</p>
        <h6>Ventajas de la nube privada</h6>
        <ul>
          <li>Mejor control</li>
          <li>Seguridad y privacidad de datos</li>
          <li>Admite sistemas heredados</li>
          <li>Capacidad de personalizacion</li>
        </ul>
        <li><h2>Nube pública</h2></li> 
        <p>Cuando una organización implementa un modelo de nube pública, toda la infraestructura de hardware, software y soporte es propiedad del proveedor de servicios que la administra y la 
          proporciona exclusivamente por Internet. Puede acceder a estos servicios y administrar la cuenta mediante un navegador web. Estas nubes publucas están disponibles para 
          todo aquel que desee utilizarlos o comprarlos. Pueden ser gratuitos o venderse a petición. 
          lo que permite a los clientes pagar solo por el uso que hacen de ciclos de CPU, el almacenamiento o el ancho de banda que consumen.</p>
          <h6>Ventajas de la nube publica</h6>
        <ul>
          <li>Inversion minima</li>
          <li>Sin costo de instalacion</li>
          <li>La gestión de la infraestructura no es necesaria</li>
          <li>Escalabilidad dinámica</li>
        </ul>
       <li><h2>Nube hibrida</h2></li>
       <p>Un modelo de computación en nube híbrido combina las nubes públicas y privadas para compartir datos y aplicaciones. Las nubes híbridas conectan la infraestructura y 
        las aplicaciones entre recursos en nube con los recursos existentesque no se encuentran en la nube. Este enfoque le aporta a su empresa más flexibilidad y más opciones de 
        implementación. Con una solución híbrida, puede alojar la aplicación en un entorno seguro mientras aprovecha los ahorros de costos de la nube pública. Las organizaciones pueden 
        mover datos y aplicaciones entre diferentes nubes mediante una combinación de dos o más métodos de implementación en la nube, según sus necesidades. </p>  
        <h6>Ventajas de la nube Hibrida</h6>
        <ul>
          <li>Flexibilidad </li>
          <li>Mayor Control</li>
          <li>Mejores Costos</li>
          <li>Mejor seguridad</li>
          
        </ul>


       </ul>
      </CardText>
    </CardBody>
    <CardImg
      alt="Card image cap"
      bottom
      src="http://latixns.mx/wp-content/uploads/2017/08/cuales-son-las-diferencias-entre-nube-hibrida-privada-y-publica.jpg"
      style={{
        height: 500
      }}
      width="100%"
    />
  </Card>
  <Card className="my-2" >
    <CardBody id='mnube'>
      <CardTitle tag="h5" id='SNUBE'>
       <h1> Servicios de implementación de la computacion en la nube</h1>
       </CardTitle>
       <CardText>
       <ul>
        <li><h2>Infraestructura como servicio (IaaS)</h2></li>
        <p>Cunado nos referimos a Iass estamos hablando de infraestructuras como servicio. Las empresas contratan la infraestructura de hardware a un tercero a cambio de
           una cuota o alquiler.La contratación de este hardware permite elegir la capacidad de proceso (procesadores), 
          la memoria a utilizar (memoria RAM) y el espacio de almacenamiento (disco duro).
          IaaS ofrece también servicios de virtualización como máquinas virtuales, cortafuegos, sistemas de backups o balanceadores de carga.
          IaaS es la base del servicio y contiene los bloques fundamentales para la TI en la nube, pues proporciona los servicios y estructuras necesarios sobre los cuales se 
          construyen los otros servicios.</p>
        <li><h2> Plataforma como Servicio  (PaaS)</h2></li>
        <p>El servicio PaaS ofrece plataformas como servicios. En estas plataformas se pueden lanzar aplicaciones como bases de datos, middleware, herramientas de desarrollo, 
          servicios de inteligencia empresarial, etc.Este tipo de servicios es el ideal para los desarrolladores que sólo quieran centrarse en la implementación y administración 
          de sus aplicaciones. Al no tener que preocuparse por los recursos de hardware y software (sistemas operativo), mejoran su eficacia, centrándose sólo en la parte que les
         interesa.PaaS es la más complicada de entender debido a que el término plataforma puede confundirse con software. Una plataforma es un software de por sí, que permite desarrollar
          aplicaciones.</p>
        <li><h2>Software como servicio (SaaS)</h2></li>
        <p>Este modelo de software como infraestructura, aloja el software de la empresa, así como sus datos, en servidores externos a la misma, y paga una cuota por su utilización. Cualquier empleado de una empresa podrá acceder desde cualquier lugara las aplicaciones de la empresa sin necesidad de instalarlas en un equipo local. Cuando hablamos de software 
        en la nube estamos hablando de SaaS.Con un SaaS la preocupación de la empresa será sólo cómo utilizar los programas de software necesarios para su funcionamiento, 
        olvidándose del resto de recursos. El hardware requerido, sistemas operativos, aplicaciones, etc. </p>
       </ul>
      
       </CardText>
    </CardBody>
    <CardImg
      alt="Card image cap"
      bottom
      src="https://www.stackscale.com/wp-content/uploads/2020/04/modelos-servicios-cloud-iaas-paas-saas-stackscale.jpg"
      style={{
        height: 500
      }}
      width="100%"
    />
  </Card>    
</>



  
)}


export default App;
