import type { Product } from '@/models/productModel'
import getProducts from './getProducts'
import getTables from './getTables'

class PostService {
	private Products: Product[]
	private TableProducts: Product[]

	constructor() {
		this.Products = getProducts()
		this.TableProducts = getTables()
	}

	getProducts() {
		return this.Products
	}
	getTableProducts() {
		return this.TableProducts
	}
	getProductById(id: string) {
		const productId = this.Products.filter((product) => product.key === id)
		return productId[0]
	}
}

export default PostService
