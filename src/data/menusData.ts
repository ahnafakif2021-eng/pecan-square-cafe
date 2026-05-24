import { MenuItem } from '../types';

export const MENUS_DATA: MenuItem[] = [
  // MIDDAY MENU (Lunch hours)
  {
    id: 'm1',
    name: 'Texas Iberico Coppa',
    description: 'Bespoke house-cured Texas pork collar, whole grain artisan mustard, garden pickles, grilled sourdough.',
    price: '$18',
    tags: ['DF'],
    category: 'midday',
    pairing: 'Roselle Cosmo'
  },
  {
    id: 'm2',
    name: 'Kohlrabi Caesar',
    description: 'Crisp julienned kohlrabi, delicate Little Gem lettuces, anchovy-garlic emulsion, sourdough croutons, shaved Parmesan Reggiano.',
    price: '$16',
    tags: ['V'],
    category: 'midday'
  },
  {
    id: 'm3',
    name: 'Local Lettuces',
    description: 'Fresh local farm lettuces, shaved radishes, fine herbs, citrus-shallot vinaigrette.',
    price: '$14',
    tags: ['V', 'VE', 'GF', 'DF'],
    category: 'midday'
  },
  {
    id: 'm4',
    name: 'The PSC Burger',
    description: 'Dry-aged local beef patty, melted white cheddar, house secret sauce, sweet caramelized red onions, toasted brioche bun, side of crispy Hand-Cut Frites.',
    price: '$21',
    category: 'midday',
    pairing: 'Pecan Square House Red'
  },
  {
    id: 'm5',
    name: 'Spring Vegetable Fritters',
    description: 'Crisp golden fritters made with sweet peas, zucchini, and mint, accompanied by a seasoned lemon-dill yogurt dip.',
    price: '$15',
    tags: ['V'],
    category: 'midday'
  },
  {
    id: 'm6',
    name: 'Wood Oven Roasted Chicken (Half)',
    description: 'Perfectly charred half chicken with scallion scape, Bloomsdale spinach, and zesty Salsa Verde drizzle.',
    price: '$28',
    tags: ['GF', 'DF'],
    category: 'midday'
  },

  // ALL DAY MENU (Full Dinner & General Offerings)
  {
    id: 'a1',
    name: 'Texas Iberico Coppa',
    description: 'Premium house-cured local charcuterie, served with whole grain mustard seed, quick-pickled spring root vegetables, crisp olive oil crostini.',
    price: '$19',
    tags: ['DF'],
    category: 'allday',
    pairing: 'Negroni Blanco'
  },
  {
    id: 'a2',
    name: 'Kohlrabi Caesar',
    description: 'Julienned crisp kohlrabi, classic creamy Caesar dressing, toasted artisan croutons, salted capers, aged Pecorino Romano.',
    price: '$16',
    tags: ['V'],
    category: 'allday'
  },
  {
    id: 'a3',
    name: 'Local Lettuces with Fine Herbs',
    description: 'Fresh heritage green lettuces, garden-picked tarragon, dill, crisp radishes, lemon vinaigrette dressing.',
    price: '$14',
    tags: ['V', 'VE', 'GF', 'DF'],
    category: 'allday'
  },
  {
    id: 'a4',
    name: 'Spring Onion Pizza',
    description: 'Wood-fired sourdough crust, house-made sweet onion jam, buffalo mozzarella, wild charred spring onions, garlic confit, fresh yard herbs.',
    price: '$22',
    tags: ['V'],
    category: 'allday',
    pairing: 'Citrine Spritz'
  },
  {
    id: 'a5',
    name: 'The PSC Burger & Hand-Cut Frites',
    description: 'Pan-seared premium dry-aged beef, cave-aged cheddar, house-pickled cucumbers, sweet caramelized onion, toasted brioche, served with salted hand-cut russet frites.',
    price: '$22',
    category: 'allday'
  },
  {
    id: 'a6',
    name: 'Spring Vegetable Fritters with Mint Yogurt',
    description: 'Delicately fried local asparagus and sweet pea fritters, fresh garden dill, lemon zest yoghurt dip.',
    price: '$15',
    tags: ['V'],
    category: 'allday'
  },
  {
    id: 'a7',
    name: 'Wood Oven Roasted Chicken',
    description: 'Spit-fired yard bird breast and leg, robust herbal Salsa Verde, blistered scallion scape, pan juices, Bloomsdale spinach.',
    price: '$32',
    tags: ['GF', 'DF'],
    category: 'allday',
    pairing: 'Austin Hill Country Pinot Noir'
  },
  {
    id: 'a8',
    name: 'Red Snapper with Bloomsdale Spinach',
    description: 'Cast-iron seared Gulf red snapper, tender buttery Bloomsdale spinach, citrus emulsion juice, topped with crispy mustard greens.',
    price: '$38',
    tags: ['GF'],
    category: 'allday'
  },
  {
    id: 'a9',
    name: 'Tuna Conserva',
    description: 'Slow olive-oil poached bluefin tuna, sea salt, baby fingerling potatoes, tender green beans, shaved shallot, soft-boiled farm pasture egg.',
    price: '$26',
    tags: ['GF', 'DF'],
    category: 'allday'
  },

  // BRUNCH MENU
  {
    id: 'b1',
    name: 'Brunch Kohlrabi Caesar',
    description: 'Crisp kohlrabi and greens, loaded Caesar emulsion, soft run egg, parmesan shards, garlic croutons.',
    price: '$17',
    tags: ['V'],
    category: 'brunch'
  },
  {
    id: 'b2',
    name: 'Brunch Local Lettuces',
    description: 'Shaved radishes, fresh garden herbs, lemon vinaigrette, avocado dressing.',
    price: '$15',
    tags: ['V', 'VE', 'GF', 'DF'],
    category: 'brunch'
  },
  {
    id: 'b3',
    name: 'Spring Fritter Benedict',
    description: 'Crisp spring vegetable fritters, two poached pasture eggs, tarragon hollandaise, Bloomsdale spinach bed.',
    price: '$19',
    tags: ['V', 'GF'],
    category: 'brunch',
    pairing: 'Citrine Spritz'
  },
  {
    id: 'b4',
    name: 'Brunch PSC Burger',
    description: 'Aged beef, sharp white cheddar, crispy bacon, fried sun-up egg, secret sauce, on a brioche bun with hand-cut frites.',
    price: '$24',
    category: 'brunch'
  },
  {
    id: 'b5',
    name: 'Brunch Spring Onion Pizza',
    description: 'Wood-fired garlic crust, charred spring onions, mozzarella, cream cheese, topped with two sunny-side up yard eggs.',
    price: '$23',
    tags: ['V'],
    category: 'brunch'
  },

  // WINE & BEVERAGES
  {
    id: 'w1',
    name: 'Roselle Cosmo',
    description: 'Local Austin citrus vodka, house-infused roselle wild hibiscus cordial, fresh cranberry squeeze, fresh key lime.',
    price: '$16',
    category: 'wine'
  },
  {
    id: 'w2',
    name: 'Citrine Spritz',
    description: 'White port, home-cooked lemon-orange syrup, dry prosecco sparkling wine, splash of soda, fresh garden mint leaf.',
    price: '$15',
    category: 'wine'
  },
  {
    id: 'w3',
    name: 'Negroni Blanco',
    description: 'Dry Texas botanical gin, cocchi americano white vermouth, luxardo bitter bianco, fresh lemon oil twist.',
    price: '$16',
    category: 'wine'
  },
  {
    id: 'w4',
    name: 'Pecan Square House Red',
    description: 'Texas Hill Country Sangiovese blend. Medium-bodied, balanced acidity, ripe cherries, and earthy oak spice.',
    price: '$14 / $54',
    category: 'wine'
  },
  {
    id: 'w5',
    name: 'Austin Hill Proper Pinot Noir',
    description: 'Vibrant Oregon valley Pinot Noir. Complex notes of dark boysenberry, forest floor, and silky, structured tannins.',
    price: '$17 / $66',
    category: 'wine'
  },
  {
    id: 'w6',
    name: 'Willamette Valley Chardonnay',
    description: 'Bright clean-cut white wine, orchard apples, light toast, crisp lingering finish.',
    price: '$15 / $58',
    category: 'wine'
  },

  // DESSERT
  {
    id: 'd1',
    name: 'Warm Pecan Square Tart',
    description: 'Signature rich tart made with Texas Hill Country pecans, Kentucky bourbon caramel filling, local vanilla bean gelato scooped on top.',
    price: '$12',
    tags: ['V'],
    category: 'dessert'
  },
  {
    id: 'd2',
    name: 'Roselle Hibiscus Panna Cotta',
    description: 'Silky farm-cream panna cotta infused with roselle blossom syrup, fresh wild berries, delicate mint crystal dust.',
    price: '$11',
    tags: ['V', 'GF'],
    category: 'dessert'
  },
  {
    id: 'd3',
    name: 'Warm Citrus Olive Oil Cake',
    description: 'Moist extra-virgin olive oil cake, aromatic blood orange maceration sauce, hand-whipped vanilla bean mascarpone.',
    price: '$10',
    tags: ['V'],
    category: 'dessert'
  }
];
