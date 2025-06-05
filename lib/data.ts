import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with chocolate ganache frosting',
    price: 32.99,
    discount: 0,
    discountPrice: 32.99,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cakes',
    slug: 'chocolate-cake',
    featured: true
  },
  {
    id: '2',
    name: 'Vanilla Cupcakes',
    description: 'Fluffy vanilla cupcakes with buttercream frosting',
    price: 18.99,
    discount: 10,
    discountPrice: 17.09,
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cupcakes',
    slug: 'vanilla-cupcakes',
    new: true
  },
  {
    id: '3',
    name: 'Sourdough Bread',
    description: 'Traditional sourdough bread with a crispy crust',
    price: 7.99,
    discount: 0,
    discountPrice: 7.99,
    image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'breads',
    slug: 'sourdough-bread'
  },
  {
    id: '4',
    name: 'Chocolate Chip Cookies',
    description: 'Classic chocolate chip cookies baked to perfection',
    price: 12.99,
    discount: 15,
    discountPrice: 11.04,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cookies',
    slug: 'chocolate-chip-cookies'
  },
  {
    id: '5',
    name: 'Strawberry Cheesecake',
    description: 'Creamy cheesecake topped with fresh strawberries',
    price: 38.99,
    discount: 0,
    discountPrice: 38.99,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cakes',
    slug: 'strawberry-cheesecake',
    featured: true
  },
  {
    id: '6',
    name: 'Croissants',
    description: 'Buttery, flaky French croissants',
    price: 14.99,
    discount: 0,
    discountPrice: 14.99,
    image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pastries',
    slug: 'croissants'
  },
  {
    id: '7',
    name: 'Macarons Assortment',
    description: 'Colorful French macarons in assorted flavors',
    price: 24.99,
    discount: 5,
    discountPrice: 23.74,
    image: 'https://images.pexels.com/photos/3776937/pexels-photo-3776937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pastries',
    slug: 'macarons-assortment',
    new: true
  },
  {
    id: '8',
    name: 'Cinnamon Rolls',
    description: 'Soft cinnamon rolls with cream cheese frosting',
    price: 16.99,
    discount: 0,
    discountPrice: 16.99,
    image: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pastries',
    slug: 'cinnamon-rolls'
  },
  {
    id: '9',
    name: 'Baguette',
    description: 'Traditional French baguette with a crispy crust',
    price: 5.99,
    discount: 0,
    discountPrice: 5.99,
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'breads',
    slug: 'baguette'
  },
  {
    id: '10',
    name: 'Red Velvet Cake',
    description: 'Classic red velvet cake with cream cheese frosting',
    price: 34.99,
    discount: 10,
    discountPrice: 31.49,
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cakes',
    slug: 'red-velvet-cake'
  },
  {
    id: '11',
    name: 'Fruit Tart',
    description: 'Buttery pastry crust filled with custard and fresh fruits',
    price: 28.99,
    discount: 0,
    discountPrice: 28.99,
    image: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pastries',
    slug: 'fruit-tart'
  },
  {
    id: '12',
    name: 'Chocolate Eclairs',
    description: 'Choux pastry filled with cream and topped with chocolate',
    price: 19.99,
    discount: 0,
    discountPrice: 19.99,
    image: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pastries',
    slug: 'chocolate-eclairs',
    new: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Thompson',
    role: 'Regular Customer',
    content: 'The cakes from Sweet Delights are absolutely amazing! I ordered a custom birthday cake and everyone was impressed by both the appearance and taste. Will definitely order again.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Event Planner',
    content: 'As an event planner, I\'ve worked with many bakeries, but Sweet Delights consistently exceeds expectations. Their attention to detail and reliability make them my go-to for all events.',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Wedding Client',
    content: 'Our wedding cake was perfect! The team at Sweet Delights worked closely with us to create exactly what we envisioned. The cake was not only beautiful but delicious too.',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];