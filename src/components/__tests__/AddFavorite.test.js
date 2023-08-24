import AddFavorite from '../AddFavorite.vue'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { describe, expect, it, beforeEach } from 'vitest'
import { ProductMock } from '../__mocks__/ProductMock'
import { useFavoriteStore } from '@/store/FavoriteStore'

describe('AddFavorite', () => {
	let wrapper
	const OhVueIcon = {
		template: '<div></div>',
	}
	beforeEach(() => {
		setActivePinia(createPinia())
		wrapper = mount(AddFavorite, {
			props: {
				id: '1',
				product: ProductMock(),
			},
			global: {
				components: {
					'v-icon': OhVueIcon,
				},
			},
		})
	})
	it('should pass props successfully', () => {
		expect(wrapper.vm.props.product).toEqual(ProductMock())
		expect(wrapper.vm.props.id).toEqual('1')
	})
	it('should render a single button', () => {
		const buttons = wrapper.findAll('.favoriteBtn')
		expect(buttons.length).toBe(1)
	})
	it('should render the add favorite button when the product is not in the store', async () => {
		const store = useFavoriteStore()
		expect(store.favorites.length).toBe(0)
		const addFavoriteButton = wrapper.find('[data-test-id="addFavoriteButton"]')
		expect(addFavoriteButton.exists()).toBe(true)
	})
	it('should changes favorite status and buttons on button click', async () => {
		// expect default stauts = false && button = addFavoriteButton
		const addButton = wrapper.find('[data-test-id="addFavoriteButton"]')
		expect(addButton.exists()).toBe(true)
		expect(wrapper.vm.inFavorite).toBe(false)

		// click on button
		await addButton.trigger('click')

		// expect change status and button
		const deleteButton = wrapper.find('[data-test-id="deleteFavoriteButton"]')
		expect(deleteButton.exists())
		expect(wrapper.vm.inFavorite).toBe(true)
	})
})
