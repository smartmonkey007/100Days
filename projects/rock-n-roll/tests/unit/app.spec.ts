import { shallowMount } from '@vue/test-utils';
import AppBar from '@/components/AppShell/AppBar.vue';

describe('AppBar.vue', () => {
  it('renders props.msg when passed', () => {
    const brandName = 'Vue Test'
    const wrapper = shallowMount(AppBar, {
      propsData: { brandName }
    })
    expect(wrapper.find('.app-name').text()).toMatch(brandName)
  })
})
