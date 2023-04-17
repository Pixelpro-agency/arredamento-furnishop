// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'caratteristiche',
    href: 'caratteristiche',
  },
  {
    name: 'contatti',
    href: 'contatti',
  },
];

export const hero = {
  title: 'Mobili di alta qualità a prezzi convenienti',
  subtitle:
    'Abbiamo soluzioni personalizzate per ogni spazio della tua casa: dal soggiorno alla camera da letto',
  buttonText: 'Acquista ora',
};

export const stats = [
  {
    value: '7',
    text: 'Anni di Esperienza',
  },
  {
    value: '25',
    text: 'Punti Vendita',
  },
  {
    value: '10k+',
    text: 'Mobili venduti',
  },
  {
    value: '260+',
    text: 'Possibili Combinazioni',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'Creiamo la tua casa più estetica',
  subtitle:
    'Furniture power è un software con servizi per il sistema di gestione aziendale multiuso',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Servizio Preventivi',
      subtitle:
        'A volte le funzionalità richiedono una breve descrizione. Raccontaci le tue esigenze',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Realizzazione Mobili su Progetto',
      subtitle:
        'A volte le funzionalità richiedono una breve descrizione. Raccontaci le tue esigenze',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Il miglior produttore di mobili a tua disposizione',
    subtitle:
      'Furnitre power è un software con servizi per un sistema di gestione aziendale multiuso, specialmente per coloro che gestiscono due o più attività.',
  },
};

export const newInStore = {
  title: 'Nuovi Arrivi',
  subtitle: 'Acquista subito gli ultimi articoli a prezzi promozionali',
  link: 'Seleziona tutto',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'sedie',
      image: <ChairImg />,
    },
    {
      name: 'letti',
      image: <BedImg />,
    },
    {
      name: 'credenze',
      image: <CupboardImg />,
    },
    {
      name: 'illuminazione',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: 'I Nostri Prodotti',
  subtitle:
    'I prodotti che forniamo sono selezionati tra i migliori prodotti esistenti con la qualità numero 1 al mondo, tutto questo per te',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Plafoniera',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Sedia in Legno',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Armadio portacarte',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Primavera di Ole Gundorse',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Sedia a dondolo',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Scrivania ad angolo XORA',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Legno della serie Foresta Nera',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Armadio portacarte',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Primavera di Ole Gundorse',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Plafoniera',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Sedia in Legno',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Armadio portacarte',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Primavera di Ole Gundorse',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Scrivania ad angolo XORA',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Legno della serie Foresta Nera',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Armadio portacarte',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Primavera di Ole Gundorse',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'Cosa le persone dicono di noi',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Manager of The New York Times',
      message:
        '“Hanno un tocco perfetto per creare qualcosa di così professionale, interessante e utile per molte persone”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'Manager of The New York Times',
      message:
        '“Hanno un tocco perfetto per creare qualcosa di così professionale, interessante e utile per molte persone.”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Manager of The New York Times',
      message:
        '“Hanno un tocco perfetto per creare qualcosa di così professionale, interessante e utile per molte persone.”',
    },
  ],
};

export const newsletter = {
  title: 'Ottieni maggiori sconti sul tuo ordine',
  subtitle: 'Unisciti alla nostra mailing list',
  placeholder: 'Il tuo indirizzo email',
  buttonText: 'Acquista ora',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'Pixelpro 2023 - All Rights Reserved.',
};
