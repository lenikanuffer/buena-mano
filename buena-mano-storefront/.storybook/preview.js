import 'tailwindcss/tailwind.css';
import '../src/index.css';
import '../src/components/productCard/ProductCard.css';
import '../src/components/snackCard/SnackCard.css';
import '../src/components/productPage/ProductPage.css';
import '../src/components/horeca/Horeca.css';
import '../src/components/home/Home.css';
import '../src/components/header/Header.css';
import '../src/components/contact/Contact.css';
import '../src/components/footer/Footer.css';




/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
