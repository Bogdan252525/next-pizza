export const categories = [
	{
		name: 'Пиццы',
	},
	{
		name: 'Завтрак',
	},
	{
		name: 'Закуски',
	},
	{
		name: 'Коктейли',
	},
	{
		name: 'Напитки',
	},
]

export const ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
      '/images/ingredients/cheese-border.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
      '/images/ingredients/creamy-mozzarella.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl: '/images/ingredients/cheddar-and-parmesan-cheeses.png',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
      '/images/ingredients/hot-jalapeno-pepper.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl: '/images/ingredients/tender-chicken.png',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl: '/images/ingredients/champignons.png',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl: '/images/ingredients/ham.png',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl: '/images/ingredients/spicy-pepperony.png',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl: '/images/ingredients/spicy-chorizo.png',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl: '/images/ingredients/pickled-cucumbers.png',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: '/images/ingredients/fresh-tomatoes.png',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl: '/images/ingredients/red-onion.png',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl: '/images/ingredients/juicy-pineapples.png',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
      '/images/ingredients/italian-herbs.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl: '/images/ingredients/.png',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl: '/images/ingredients/feta-cheese-cubes.png',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl:
      '/images/ingredients/meatballs.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
	{
		name: 'Омлет с ветчиной и грибами',
		imageUrl:
			'/images/products/omelette-with-ham-and-mushrooms.webp',
		categoryId: 2,
	},
	{
		name: 'Омлет с пепперони',
		imageUrl:
			'/images/products/omelette-with-pepperoni.webp',
		categoryId: 2,
	},
	{
		name: 'Кофе Латте',
		imageUrl:
			'/images/products/coffee-latte.webp',
		categoryId: 2,
	},
	{
		name: 'Дэнвич ветчина и сыр',
		imageUrl:
			'/images/products/danwich-ham-and-cheese.webp',
		categoryId: 3,
	},
	{
		name: 'Куриные наггетсы',
		imageUrl:
			'/images/products/chicken-nuggets.webp',
		categoryId: 3,
	},
	{
		name: 'Картофель из печи с соусом 🌱',
		imageUrl:
			'/images/products/oven-baked-potatoes-with-sauce.webp',
		categoryId: 3,
	},
	{
		name: 'Додстер',
		imageUrl:
			'/images/products/dodster.webp',
		categoryId: 3,
	},
	{
		name: 'Острый Додстер 🌶️🌶️',
		imageUrl:
			'/images/products/sharp-dodster.webp',
		categoryId: 3,
	},
	{
		name: 'Банановый молочный коктейль',
		imageUrl:
			'/images/products/banana-milkshake.webp',
		categoryId: 4,
	},
	{
		name: 'Карамельное яблоко молочный коктейль',
		imageUrl:
			'/images/products/caramel-apple-milkshake.webp',
		categoryId: 4,
	},
	{
		name: 'Молочный коктейль с печеньем Орео',
		imageUrl:
			'/images/products/oreo-cookie-milkshake.webp',
		categoryId: 4,
	},
	{
		name: 'Классический молочный коктейль 👶',
		imageUrl:
			'/images/products/classic-milkshake.webp',
		categoryId: 4,
	},
	{
		name: 'Ирландский Капучино',
		imageUrl:
			'/images/products/irish-cappuccino.webp',
		categoryId: 5,
	},
	{
		name: 'Кофе Карамельный капучино',
		imageUrl:
			'/images/products/coffee-caramel-cappuccino.webp',
		categoryId: 5,
	},
	{
		name: 'Кофе Кокосовый латте',
		imageUrl:
			'/images/products/coffee-coconut-latte.webp',
		categoryId: 5,
	},
	{
		name: 'Кофе Американо',
		imageUrl:
			'/images/products/americano-coffee.webp',
		categoryId: 5,
	},
	{
		name: 'Кофе Латте',
		imageUrl:
			'/images/products/coffee-latte.webp',
		categoryId: 5,
	},
]