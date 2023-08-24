import { describe, beforeEach, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductDoubleImages from '../ProductDoubleImages.vue'
import { DoubleImagesMock } from '../__mocks__/DoubleImagesMock'

describe('ProductDoubleImages', () => {
	let wrapper
	beforeEach(() => {
		wrapper = mount(ProductDoubleImages, {
			props: { productData: DoubleImagesMock() },
		})
	})
	it('should render images correctly', () => {
		const mainImg = wrapper.find('.mainImg')
		const props = DoubleImagesMock()
		expect(mainImg.attributes('src')).toBe(props.urlImgMain)
		expect(mainImg.attributes('alt')).toBe(props.alt)

		const secondaryImg = wrapper.find('.secondImg')

		expect(secondaryImg.attributes('src')).toBe(props.urlImgSecond)
		expect(secondaryImg.attributes('alt')).toBe(props.alt)
	})
})
