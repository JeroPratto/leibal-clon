import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import ProductCardMain from '../ProductCardMain.vue'
import { ProductMock } from '../__mocks__/ProductMock'
import router from '@/router'
describe('ProductCardMain', () => {
	let wrapper
	beforeEach(() => {
		wrapper = mount(ProductCardMain, {
			props: {
				product: ProductMock(),
			},
			global: {
				plugins: [router],
			},
		})
	})
	it('should render props correctly', () => {
		const mock = ProductMock()
		expect(wrapper.text()).toContain(mock.date)
		expect(wrapper.text()).toContain(mock.by)
		expect(wrapper.text()).toContain(mock.tag)
		expect(wrapper.text()).toContain(mock.title)
	})
	it('the link should have the correct parameters', () => {
		const { key } = ProductMock()
		const link = wrapper.find('a')
		const linkMock = `/product/${key}`
		const url = new URL(link.element.href)
		expect(url.pathname).toEqual(linkMock)
	})
})
