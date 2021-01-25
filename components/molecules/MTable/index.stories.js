import MTable from '.'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Molecule/Table',
  component: MTable,
  description:
    'The completed documentation will sooner release. This docs is about Table Molecule',
  argTypes: {},
})

const wrapper = {
  components: {
    MTable,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-table v-bind="$props"></m-table>',
})

export const Playground = Template.bind({})
Playground.args = {
  tableData: [
    {
      name: 'John',
      lastName: 'Doe',
      age: 22,
      address: '221B Baker Street',
      city: 'London',
    },
    {
      name: 'John',
      lastName: 'Doe',
      age: 22,
      address: '221B Baker Street',
      city: 'London',
    },
    {
      name: 'John',
      lastName: 'Doe',
      age: 22,
      address: '221B Baker Street',
      city: 'London',
    },
    {
      name: 'John',
      lastName: 'Doe',
      age: 22,
      address: '221B Baker Street',
      city: 'London',
    },
    {
      name: 'John',
      lastName: 'Doe',
      age: 22,
      address: '221B Baker Street',
      city: 'London',
    },
    {
      name: 'John',
      lastName: 'Doe',
      age: 22,
      address: '221B Baker Street',
      city: 'London',
    },
  ],
}

export const Default = () => ({
  ...wrapper,
  template: `
      <m-table>
        <template slot="caption">How I chose to spend my money</template>

        <template slot="head">
          <a-table-row>
            <a-table-cell heading>Purchase</a-table-cell>
            <a-table-cell heading>Location</a-table-cell>
            <a-table-cell heading>Date</a-table-cell>
            <a-table-cell heading>Evaluation</a-table-cell>
            <a-table-cell heading nowrap>Cost (£)</a-table-cell>
          </a-table-row>
        </template>

        <template slot="body">
          <a-table-row>
            <a-table-cell>Haircut</a-table-cell>
            <a-table-cell>Hairdresser</a-table-cell>
            <a-table-cell>12/09</a-table-cell>
            <a-table-cell>Great idea</a-table-cell>
            <a-table-cell>30</a-table-cell>
          </a-table-row>

          <a-table-row>
            <a-table-cell>Lasagna</a-table-cell>
            <a-table-cell>Restaurant</a-table-cell>
            <a-table-cell>12/09</a-table-cell>
            <a-table-cell>Regrets</a-table-cell>
            <a-table-cell>18</a-table-cell>
          </a-table-row>

          <a-table-row>
            <a-table-cell>Shoes</a-table-cell>
            <a-table-cell>Shoeshop</a-table-cell>
            <a-table-cell>13/09</a-table-cell>
            <a-table-cell>Big regrets</a-table-cell>
            <a-table-cell>65</a-table-cell>
          </a-table-row>

          <a-table-row>
            <a-table-cell>Toothpaste</a-table-cell>
            <a-table-cell>Supermarket</a-table-cell>
            <a-table-cell>13/09</a-table-cell>
            <a-table-cell>Good</a-table-cell>
            <a-table-cell>5</a-table-cell>
          </a-table-row>
        </template>

        <template slot="foot">
          <a-table-row>
            <a-table-cell colspan="4" textAlign="center" fontWeight="bold">SUM</a-table-cell>
            <a-table-cell>118</a-table-cell>
          </a-table-row>
        </template>
      </m-table>
    `,
})
