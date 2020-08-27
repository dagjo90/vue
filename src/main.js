import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid,GridColumn, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { DataSource, DataSourceInstaller  } from '@progress/kendo-datasource-vue-wrapper'
import { Spreadsheet, SpreadsheetSheet, SpreadsheetInstaller } from '@progress/kendo-spreadsheet-vue-wrapper'

import { Chart,
  ChartSeriesItem,
  Sparkline,
  SparklineSeriesItem,
  StockChart,
  ChartInstaller } from '@progress/kendo-charts-vue-wrapper'

  import { Scheduler } from '@progress/kendo-scheduler-vue-wrapper'
import { SchedulerResource } from '@progress/kendo-scheduler-vue-wrapper'
import { SchedulerView } from '@progress/kendo-scheduler-vue-wrapper'
import { SchedulerInstaller } from '@progress/kendo-scheduler-vue-wrapper'




Vue.config.productionTip = false
Vue.use(DataSourceInstaller);
Vue.use(DataSource);

Vue.use(GridInstaller)
Vue.use(Grid)
Vue.use(GridColumn);

Vue.use(SpreadsheetInstaller);
Vue.use(SpreadsheetSheet);
Vue.use(Spreadsheet);
Vue.use(ChartInstaller)
Vue.use(Chart)
Vue.use(ChartSeriesItem)
Vue.use(Sparkline)
Vue.use(SparklineSeriesItem)
Vue.use(StockChart)


Vue.use(Scheduler)
Vue.use(SchedulerResource)
Vue.use(SchedulerView)
Vue.use(SchedulerInstaller)


Vue.use(VueAxios, axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
