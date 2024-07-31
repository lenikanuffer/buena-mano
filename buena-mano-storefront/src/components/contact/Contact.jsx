import { Whatsapp} from '../../assets/icons/icons';
import DistributorsList from '../distributors/Distributors';
import './Contact.css'

function Contact() {
    return (
    <>
       <main>
        <div className='flex flex-col items-center'>
            <h1 className='text-sm text-center'>ENCUENTRANOS EN</h1>
            <p className='text-sm text-center m-8'>Avenida Comercio 1926, Playa Hermosa, Pichilemu, Chile</p>
            <div >
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.9286447159902!2d-72.02717718813726!3d-34.403159546822536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9661571a5d53b399%3A0x313e5c7f6587a787!2sBuenamano%20Helados!5e0!3m2!1sen!2sde!4v1722419681368!5m2!1sen!2sde" 
            width="350" 
            height="250" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className='flex rounded-md'></iframe>
            </div>
            <p className='text-sm m-8'>Visítanos en nuestra fábrica donde puedes disfrutar de nuestros helados, cafés y snacks.  </p>
        </div>

        <div className='opening-hours flex flex-col text-sm items-center mx-8 mb-8'>
            <ul>
                <li>Lunes: 12:30 - 18:30</li>
                <li>Martes: 12:30 - 18:30</li>
                <li>Miércoles: cerrado</li>
                <li>Jueves: 12:30 - 18:30</li>
                <li>Viernes: 12:30 - 19:00</li>
                <li>Sábado: 12:30 - 19:00</li>
                <li>Domingo: 12:30 - 18:30</li>
            </ul>
        </div>

        <div className='contacto-personas'>
        <h1 className='text-sm text-center'>PEDIDOS A DOMICILIO</h1>
        <div className='text-sm mx-8 mt-4'>
        <p>Ofrecemos envío a domicilio para la zona de Pichilemu urbano y alrededores</p>
        <p>Consulta precios y disponibilidad en nuestro Whatsapp:</p>
        </div>
        <div className='flex justify-center m-4 gap-4 items-center'>
        <Whatsapp />
        <p className='text-sm'>+56986203042</p>
        </div>
        
        </div>
       </main>
       <aside>

       <div className='flex flex-col items-center'>
            <h1 className='text-sm text-center'>PUNTOS DE VENTA</h1>
            <p className='text-sm text-center m-8'>También puedes disfrutar nuestros helados en otros locales dentro de la región: </p>
            <DistributorsList />
            <p className='disclaimer text-center m-8'>*Puntos de venta independiente. Precios, formatos y sabores disponibles pueden variar.</p>

        </div>

        
       </aside>
       </> 
    )
}

export default Contact