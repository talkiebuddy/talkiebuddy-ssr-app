<template>
  <div
    :class="['m-table', stickyHeader ? 'm-table--sticky-header' : '']"
    :style="maxHeight ? `max-height: ${maxHeight}rem` : null"
  >
    <div class="m-table__inner">
      <table class="m-table__main">
        <slot></slot>
        <caption class="m-table__caption">
          <slot name="caption"></slot>
        </caption>

        <thead class="m-table__head">
          <slot name="head"></slot>
          <template v-if="tableData.length">
            <a-table-row :row="tableHeaders" :heading="true"></a-table-row>
          </template>
        </thead>

        <tbody class="m-table__body">
          <slot name="body"></slot>
          <template v-if="tableData.length">
            <a-table-row
              v-for="(row, $index) in tableRows"
              :key="$index"
              :row="row"
            ></a-table-row>
          </template>
        </tbody>

        <tfoot class="m-table__foot">
          <slot name="foot"></slot>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MTable',
  props: {
    /** Enable/Disable sticky header for the table */
    stickyHeader: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: Number,
      default: null,
    },
    tableData: {
      type: [Array, Object],
      default: () => [],
    },
  },
  // data: () => {
  //   return {
  //     data: this.tableData,
  //   }
  // },
  computed: {
    tableHeaders() {
      return Object.keys(this.tableData[0]).map((header, index) => {
        return {
          key: index,
          value: header
            .replace(/([A-Z]+)/g, ' $1')
            .replace(/([A-Z][a-z])/g, ' $1'),
        }
      })
    },
    tableRows() {
      return this.tableData.map((obj, idx) => {
        return Object.keys(obj).map((key, idx2) => {
          return {
            key,
            value: Object.values(obj)[idx2],
          }
        })
      })
    },
    // tableHeaders() {
    //   return Object.keys(this.tableData[0]).map((header, index) => {
    //     return {
    //       index: index,
    //       value:
    //     }
    //   })
    // }
  },
}
</script>

<style lang="scss">
.m-table {
  $this: &;

  max-width: 100%;
  display: inline-flex;
  overflow: auto;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0.7rem;
    height: 0.7rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__main {
    border-collapse: collapse;
  }

  &--stick-header {
    #{$this}__head .a-table-cell {
      position: sticky;
      top: 0;
      z-index: 10;
      max-height: 200px;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        top: -1px;
        height: calc(100% + 2px);
        border-bottom: 0.1rem solid $color-neutralGrayLighter;
        border-top: 0.1rem solid $color-neutralGrayLighter;
      }
    }
  }
}
</style>
