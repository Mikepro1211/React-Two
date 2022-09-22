import './App.css';
import {  UncontrolledCarousel, Card , CardImg , CardBody, CardTitle, CardText, CardGroup, CardSubtitle, CardHeader } from 'reactstrap';


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
        <li class="nav-item light">
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
          <a class="nav-link" href="#Cloudservice">Funcionalidad de los Cloud services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#EmpresasC">Empresas de Cloud Services</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<center><h10>INFORMATICA EN LA NUBE</h10></center>
<br></br>
<br></br>

<br></br><br></br><br></br>
<br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br>
<br></br><br></br>
<form>
 <UncontrolledCarousel items={[
    {
      altText: 'Slide 1',
      caption: 'Amazon Web Services',
      key: 1,
      src: 'https://wallpaperaccess.com/full/3209833.jpg'
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
      src: 'https://cdn.pixabay.com/photo/2018/04/10/17/44/cloud-3308170_960_720.png'
    }
  ]}/>

<Card className="my-2">
    <br>
    </br>
    <br></br>
    <CardBody id='cnube'>
      <CardTitle tag="h5">
      <center>  <h1>¿Que es la computacion en la nube?</h1></center>
      </CardTitle>
      <br></br>
      <br></br>
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
      width="10%"
    />

  </Card>
  <Card className="my-2" >
    <CardBody id='mnube'>
      <CardTitle tag="h5">
       <center><h1> Modelos de implementación de la computacion en la nube</h1></center>
      </CardTitle>
     <br></br>
     <br></br>
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
    <CardImg width="20%"
      alt="Card image cap"
      bottom
      src="https://profile.es/wp-content/media/modelos-despliegue-cloud-hibrida-publica-privada-2048x1211.jpg"
      style={{
        height: 700
      }}
      
    />
  </Card><br></br>
        <br></br>
  <Card className="my-2" >
    <CardBody id='mnube'>
      <CardTitle tag="h5" id='SNUBE'>
        <br></br>
       <center><h1> Servicios de implementación de la computacion en la nube</h1></center>
       <br></br>
       </CardTitle>
       <CardText>
       <ul>
        
        <li><center><h2>Infraestructura como servicio (IaaS)</h2></center></li>
        <br></br>
        <br></br>
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
      src="https://i.pinimg.com/originals/35/09/ed/3509ed1672c0a989b74bd73ae5875941.jpg"
      style={{
        height: 700
      }}
      width="100%"
    />
    
  </Card>

  {/*----------------------------------------------- MI PARTE DEL TRABAJO 1-------------------------------------------------------------------- */}


<br></br>
<br></br>

  <Card className="my-2" >
    <CardBody id='Cloudservice'>
      <CardTitle tag="h5" id='Cloudservice'>
        <br></br>
       <center><h1> FUNCIONALIDAD DE LOS CLOUD SERVICES</h1></center>
       </CardTitle>
       <CardText>
       <ul>
        
          
         <br></br>
          
          
          
         

       
       
       </ul>
    
                             {/* GRUPO FUNCIONALIDAD 1 */}
       <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://th.bing.com/th/id/OIP.2CnntWlW01MjN-lYzvOuLAHaEo?pid=ImgDet&rs=1"
      top
      width="100%"
      height ="50%"
    />
    <CardBody>
      <center>
      <CardTitle tag="h5">
      Web Hosting:
      </CardTitle></center>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       
      </CardSubtitle>
      <CardText>
      la alta disponibilidad de estos servicios y su escalabilidad permiten que sean utilizados
           para el almacenamiento de sitios web y otras aplicaciones que requieren de altos niveles de confiabilidad.
      </CardText>
    
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://conocimientolibre.mx/wp-content/uploads/2019/11/Virtualizacion3.png"
      top
      width="100%"
      height ="50%"
    />
    <CardBody>
      <center><CardTitle tag="h5">
      Virtualización:
      </CardTitle></center>
      
      <CardText>
      se cuenta con todo tipo de recursos para la elaboración de todo tipo de infraestructuras virtuales. Los servicios en la nube se caracterizan 
          por adaptarse a múltiples aplicaciones e incluso generar nuevos tipos de sistemas.
      </CardText>
     
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://th.bing.com/th/id/OIP.y97BPR546GXV41DBSXVqyAHaEU?pid=ImgDet&rs=1"
      top
      width="100%"
      height ="50%"
    />
    <CardBody>
     <center> <CardTitle tag="h5">
      Rendimiento y productividad:
      </CardTitle></center>
   
      <CardText>
      la reducción en los costos de administración genera que haya un mayor rendimiento del equipo de trabajo. 
      Esto implica desarrollo más versátil y reducción de los errores administrativos
      </CardText>
      
    </CardBody>
  </Card>
  </CardGroup>
       


                                                      {/* SEGUNDO GRUPO DE INFORMACION */}

  <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://www.itfluence.com/wp-content/uploads/2019/02/desarrollo_movil-762x534.png"
      top
      width="100%"
      height ="50%"
    />
    <CardBody>
      <center>
      <CardTitle tag="h5">
      Desarrollo web y móvil:
      </CardTitle></center>
      
      <CardText>
      para este tipo de implementaciones se cuenta con características adicionales de administración y seguridad que permiten a los desarrolladores 
          construir sus aplicaciones de forma rápida y efectiva.la alta disponibilidad de estos servicios y su escalabilidad permiten que sean utilizados
           para el almacenamiento de sitios web y otras aplicaciones que requieren de altos niveles de confiabilidad.
      </CardText>
    
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://getalongwithgod-o8fw118uwfj4o.netdna-ssl.com/wp-content/uploads/2017/06/Media-Influence-Kiss-of-Death.jpg"
      top
      width="100%"
      height ="50%"
    />
    <CardBody>
      <center><CardTitle tag="h5">
      Streaming: 
      </CardTitle></center>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        
      </CardSubtitle>
      <CardText>
      cada vez es más común observar que este tipo de sistemas que requieren de alta disponibilidad y baja latencia sean alojados en la nube, donde Los archivos de música, video y otros tipos de archivos de medios se preorganizan y transmiten en paquetes secuenciales de datos, a fin de que se pueda hacer streaming de ellos de forma simultánea. Y, a diferencia de las descargas tradicionales que se guardan en tu aparato, los archivos de medios se eliminan automáticamente luego de reproducirlos.
      </CardText>
     
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://decisions.com/wp-content/uploads/2020/11/301.svg"
      top
      width="60%"
      height ="50%"
    />
    <CardBody>
      <center><CardTitle tag="h5">
      Bases de datos y almacenamiento:
      </CardTitle></center>
      
      <CardText>
      el almacenamiento es esencial. En la nube se da la característica de contar con distintos tipos de almacenamiento 
          que varían dependiendo de la implementación del usuario. Por otra parte, se dispone de bases de datos accesibles remotamente 
          con las mismas prestaciones que las instaladas localmente.
      </CardText>
      
    </CardBody>
  </Card>
  </CardGroup>
 
                        {/*                TERCER GRUPO DE INFORMACION                 */}
  <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://th.bing.com/th/id/R.7627a99e07631c5c0c1a6f3759c35c1c?rik=jEEd2Wshr%2bij7g&pid=ImgRaw&r=0"
      top
      width="100%"
      height ="50%"
    />
    <CardBody>
      <center>
      <CardTitle tag="h5">
      Servicios de software:
      </CardTitle></center>
      
      <CardText>
      el software como servicio ha sufrido una expansión abrupta en los últimos años y más desde el crecimiento del Cloud Computing. Este software como servicio pone a disposición múltiples herramientas adicionales que permiten variar la gestión de los recursos que se están generando.
Si el tema principal es hacer una comparación con los servicios locales, es posible listar todas las ventajas que motivan a que el uso del Cloud Computing se vea incrementado.
 Al utilizar este enfoque, resaltan los siguientes beneficios:
      </CardText>
    
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://image.freepik.com/vector-gratis/reduccion-costos-grafico-dibujo-mano-empresario_185038-209.jpg"
      top
      width="100%"
      height ="50%"
    />
    <CardBody>
    <center>  <CardTitle tag="h5">
      Reducción de costos: 
      </CardTitle></center>
      
      <CardText>
      los costos iniciales desaparecen cuando se hace uso de estos servicios, ya que los pagos son por consumo. Adicionalmente, lo normal es que se eviten costos de mantenimiento y de reemplazo de recursos. En la nube, 
      reemplazar un recurso equivale a generar un nuevo servidor virtual desde cero.
      </CardText>
     
    </CardBody>
  </Card>
  <Card>

    <CardImg
      alt="Card image cap"
      src="https://adywhisper.com/wp-content/uploads/2017/09/confiable.jpg"
      top
      width="60%"
      height ="50%"
    />
    <CardBody>
      <center><CardTitle tag="h5">
      Confiabilidad y disponibilidad: 
      </CardTitle></center>
       
      <CardText>
      todos los recursos que son generados son altamente confiables y pueden ser replicados de forma automática para garantizar la integridad de la información con la que se está trabajando.
Ahora que conoces acerca de Cloud Computing sus funciones y beneficios, tenemos una gran noticia para ti. Next U ha preparado dos certificaciones que te convertirán en un experto en el área: Azure y AWS. ¡Espéralas muy pronto! Y mantente conectado con nosotros para mayor información. 
      </CardText>
      
    </CardBody>
  </Card>
  </CardGroup>



   


       </CardText>
    </CardBody>
    


    
    </Card> 

                                      {/*                EMPRESAS DE CLOUD SERVICES                 */}
   
  <CardGroup id='EmpresasC'>
  <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  >
    <CardBody id='mnube'>
      <CardTitle tag="h5" id='SNUBE'>
        <br></br>
       <center><h1> PRINCIPALES EMPRESAS QUE OFRECEN CLOUD SERVICES</h1></center>
       </CardTitle>
    
       
       
       
       </CardBody>
       </Card></CardGroup>

       <CardGroup>
       
       
       
       <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  >
   <CardBody>
      <CardTitle tag="h2">
        MICROSOFT
      </CardTitle>
     <br></br>
      <CardText>
      Está en el puesto número uno por varios motivos. Ofrece servicios en las tres capas de la nube (IaaS, PaaS y SaaS). Está comprometido en ayudar en el desarrollo y la implementación de sus clientes en entornos de producción innovadores. Sus ingresos en los últimos 12 meses se estiman alrededor de 16,7 mil millones de dólares. Y por último, por la extraordinaria visión y liderazgo de su CEO Satya Nadella.
      <br></br>Azure Cloud Services para mantener las aplicaciones disponibles y redirigir el tráfico de las instancias con problemas a otras que estén funcionando bien. Una vez implementada una aplicación, Azure se encarga del resto, desde el aprovisionamiento hasta el equilibrio de carga. Sus aplicaciones cuentan con el respaldo de un extraordinario acuerdo de nivel de servicio del 99,95 %.
      </CardText>
      
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  ><CardImg
      alt="Card image cap"
      src="https://www.gizmochina.com/wp-content/uploads/2020/07/microsoft.jpg"
      top
      width="90%"
    />
  </Card> 
</CardGroup>


<CardGroup>
       <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  >
   <CardBody>
      <CardTitle tag="h2">
         AMAZON
      </CardTitle>
     <br></br>
      <CardText>
      Amazon Web Services es el rey del segundo puesto por la profundidad y amplitud de productos y servicios que ofrece. Además, de la experiencia de usuario sencilla y elegante combinada con unos precios muy competitivos. Está en el número dos, por las carencias respecto a Microsoft en aspectos de software y por los 16 mil millones en ingresos de los últimos 12 meses
      <br></br>AWS cuenta con una cantidad de servicios y de características incluidas en ellos que supera la de cualquier otro proveedor de la nube, ofreciendo desde tecnologías de infraestructura como cómputo, almacenamiento y bases de datos hasta tecnologías emergentes como aprendizaje automático e inteligencia artificial, lagos de datos y análisis e internet de las cosas. Esto hace que llevar las aplicaciones existentes a la nube sea más rápido, fácil y rentable y permite crear casi cualquier cosa que se pueda imaginar.
      </CardText>
      
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  ><CardImg
      alt="Card image cap"
      src="https://www.iltrovalavoro.org/wp-content/uploads/2018/03/amazon.png"
      top
      width="90%"
    />
  </Card> 
</CardGroup>


<CardGroup>
       <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  >
   <CardBody>
      <CardTitle tag="h2">
        IBM
      </CardTitle>
     <br></br>
      <CardText>
      Ha superado a Salesforce.com gracias a la transformación de su amplia gama de experiencia y tecnología de software desde el entorno real hasta la nube. IBM ha creado un negocio en la nube de 15.800 millones de dólares. Igual que Microsoft, IBM es uno de los proveedores de Cloud Computing que ofrece los tres servicios: IaaS, PaaS y SaaS. Esto es muy importante porque ofrece a los clientes más opciones, una integración más fluida y una mejor seguridad cibernética.
      <br></br>Los servicios de cloud para crear una estrategia de cloud híbrida que aumente la eficiencia de costes, mejore la productividad y genere oportunidades para la innovación. Con flexibilidad arquitectónica y tecnologías exponenciales como la IA, puede modernizar las aplicaciones para mejorar el retorno de la inversión, crear aplicaciones nativas en cloud y gestionarlas a escala, en la plataforma que prefiera. 
      </CardText>
      
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  ><CardImg
      alt="Card image cap"
      src="https://www.objetconnecte.com/wp-content/uploads/2017/01/IBM-1067x600.jpg"
      top
      width="90%"
    />
  </Card> 
</CardGroup>

<CardGroup>
       <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  >
   <CardBody>
      <CardTitle tag="h2">
      Salesforce.com
      </CardTitle>
     <br></br>
      <CardText>
      Sigue siendo una poderosa fuente de innovación digital. Su cuarto puesto está motivado porque debe ser capaz de salir del exitoso negocio en SaaS y dar el salto a PaaS. Debe ser su reto para poder escalar en el ranking.
      <br></br>Salesforce no es solo una plataforma de CRM. Al adquirirlo, pasa a formar parte de una comunidad inclusiva con más de 10 millones de personas innovadoras, que transforman sus comunidades y rompen con lo establecido; son los Trailblazers. Con el aprendizaje en línea gratuito de Trailhead, consiguen habilidades para mejorar sus empresas y sus carreras profesionales.
      </CardText>
      
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  ><CardImg
      alt="Card image cap"
      src="https://www.edifixio.com/sites/default/files/bannieres/header-salesforce.jpg"
      top
      width="90%"
    />
  </Card> 
</CardGroup>


<CardGroup>
       <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  >
   <CardBody>
      <CardTitle tag="h2">
      SAP
      </CardTitle>
     <br></br>
      <CardText>
      Tiene todo lo que los demás proveedores en Cloud Computing matarían por tener: proveedor de aplicaciones empresariales dentro de todas las corporaciones líderes del mundo. O lo que es lo mismo, SAP es el principal proveedor de soluciones ERP. El futuro de SAP en la nube es muy prometedor. Gracias a su solución HANA, la tecnología de procesamiento in-memory y SAP Cloud Platform, que permite desarrollar nuevas aplicaciones o módulos personalizados para cualquiera de las soluciones de SAP.
      <br></br>El ranking de mejores proveedores en Cloud Computing está en constante guerra por los primeros puestos. Todos quieren ser el preferido por las empresas para su transformación digital. Los que ganarán y tendrán mejores puestos, serán los que creen estrategias en torno a lo que los clientes quieren y necesitan.
      </CardText>
      
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: '80rem'
    }}
  ><CardImg
      alt="Card image cap"
      src="https://www.2iqresearch.com/hubfs/SAP-GR2.jpg#keepProtocol"
      top
      width="90%"
    />
  </Card> 
</CardGroup>

   </form>   
</>



  
)}


export default App;
