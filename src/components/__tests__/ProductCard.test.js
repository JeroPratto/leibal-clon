import { describe, beforeEach, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductCard from '../ProductCard.vue'
import { ProductMock } from '../__mocks__/ProductMock'
import router from '@/router'

describe('ProductCard', () => {
	let wrapper
	beforeEach(() => {
		wrapper = mount(ProductCard, {
			global: {
				plugins: [router],
			},
			props: {
				product: ProductMock(),
			},
		})
	})
	it('should pass props successfully', () => {
		expect(wrapper.vm.product).toEqual(ProductMock())
	})
	it('should render props correctly', () => {
		const mock = ProductMock()
		expect(wrapper.text()).toContain(mock.date)
		expect(wrapper.text()).toContain(mock.tag)
		expect(wrapper.text()).toContain(mock.title)
		expect(wrapper.text()).toContain(mock.by)
	})
	it('the link should have the correct parameters', () => {
		const { key } = ProductMock()
		const link = wrapper.find('a')
		const linkMock = `/product/${key}`
		// create url for get pathname
		const url = new URL(link.element.href)
		expect(url.pathname).toEqual(linkMock)
	})
})
