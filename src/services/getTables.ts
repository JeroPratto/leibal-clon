import type { Product } from '../models/productModel'

const getTables = (): Product[] => {
	const tables = [
		{
			urlImgMain: '/productImages/tables-main-0.webp',
			urlImgSecond: '/productImages/tables-secondary-0.webp',
			title: 'Meta Side Table',
			by: '$550 USD',
			date: 'NEW TENDENCY',
			tag: 'SIDE TABLES',
			key: '0',
		},
		{
			urlImgMain: '/productImages/tables-main-1.webp',
			urlImgSecond: '/productImages/tables-secondary-1.webp',
			title: 'Clerici Table',
			by: '$3500 USD',
			date: 'MATTIAZZI',
			tag: 'DINING TABLES',
			key: '1',
		},
		{
			urlImgMain: '/productImages/tables-main-2.webp',
			urlImgSecond: '/productImages/tables-secondary-2.webp',
			title: 'PK61',
			by: '$6256 USD',
			date: 'FRITZ HANSEN',
			tag: 'COFFEE TABLES',
			key: '2',
		},
		{
			urlImgMain: '/productImages/tables-main-3.webp',
			urlImgSecond: '/productImages/tables-secondary-3.webp',
			title: 'CH327 Dining Table',
			by: '$5930 USD',
			date: 'CARL HANSEN & SON',
			tag: 'DINING TABLES',
			key: '3',
		},
		{
			urlImgMain: '/productImages/tables-main-4.webp',
			urlImgSecond: '/productImages/tables-secondary-4.webp',
			title: 'Vassoio Coffee Table',
			by: '$8000 USD',
			date: 'ESTUDIO PERSONA',
			tag: 'COFFEE TABLES',
			key: '4',
		},
	]
	return tables
}

export default getTables
