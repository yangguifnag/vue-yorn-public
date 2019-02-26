import Vue from 'vue'

import Iicon from './i-icon'
import Itext from './i-vtext'
import Icol from './i-col'

import Itable from '@/components/tables/baseTable.vue'
import Iselect from '@/components/select/baseSelect.vue'
import typeSelect from '@/components/select/typeSelect.vue'
import baseInput from '@/components/input/baseInput.vue'
import dateInput from '@/components/input/dateInput.vue'
import panel from '@/components/layout/panel.vue'
import formItem from '@/components/layout/index.vue'
import Icontainer from '@/components/layout/container.vue'

Vue.component('i-icon', Iicon)
Vue.component('i-text', Itext)
Vue.component('i-col', Icol)

Vue.component('i-table', Itable)


Vue.component('i-select', Iselect)
Vue.component('t-select', typeSelect)


Vue.component('i-input', baseInput)

Vue.component('i-date-input', dateInput)
Vue.component('i-panel', panel)
Vue.component('i-container', Icontainer)
Vue.component('i-logo', () => import('@/components/base/i-logo'))

Vue.component('y-item', formItem)
