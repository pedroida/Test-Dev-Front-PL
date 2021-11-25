<template>
  <table width="100%">
    <thead>
    <tr>
      <th v-for="(header, index) in headers" :key="`header-${index}`">
        {{ header.title }}
      </th>
      <th v-if="hasActions">Ações</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in mappedItems" :key="`mapped-item-${index}`">
      <td v-for="(tableItem, index) in item.tableItem" :key="`table-item-${index}`">
        {{ tableItem }}
      </td>
      <td v-if="hasActions" class="action-column">
        <slot name="action" :item="item.item"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export interface IDataTableHeader {
  title: string
  value: string
}

export default defineComponent({
  name: 'DataTable',

  props: {
    headers: {
      type: Array,
      required: true
    },

    items: {
      type: Array,
      required: true
    },

    hasActions: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },

  computed: {
    mappedItems () {
      return this.items.map((item: any) => {
        return {
          tableItem: this.headers.map((header: any) => item[header.value]),
          item
        }
      })
    }
  }
})
</script>

<style scoped>
table {
  border-collapse: collapse
}
th {
  text-align: left;
  font-size: 1.2em;
}

td, th {
  padding: 1.5em;
}

thead tr th {
  border-bottom: 2px solid #ADB5BD;
}

tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}

.action-column {
  padding-top: .5em;
  padding-bottom: .5em;
}
</style>
