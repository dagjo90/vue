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
import { LayoutInstaller, TabStrip } from '@progress/kendo-layout-vue-wrapper'
import { Input } from '@progress/kendo-vue-inputs';
import { Button,
  ButtonGroup,
  ButtonGroupButton,
  ToolBar,
  ToolBarItem,
  ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'

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
Vue.use(TabStrip);
Vue.use(GridInstaller);
Vue.use(Grid);
Vue.use(GridColumn);
Vue.component('k-input', Input);
Vue.use(LayoutInstaller);

Vue.use(SpreadsheetInstaller);
Vue.use(SpreadsheetSheet);
Vue.use(Spreadsheet);
Vue.use(ChartInstaller);
Vue.use(Chart);
Vue.use(ChartSeriesItem)
Vue.use(Sparkline)
Vue.use(SparklineSeriesItem)
Vue.use(StockChart)

Vue.use(ButtonsInstaller);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(ButtonGroupButton);
Vue.use(ToolBar);
Vue.use(ToolBarItem);

Vue.use(Scheduler)
Vue.use(SchedulerResource)
Vue.use(SchedulerView)
Vue.use(SchedulerInstaller)


Vue.use(VueAxios, axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
