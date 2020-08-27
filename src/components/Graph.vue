<template>    
    <div>
    <kendo-datasource ref="datasource"
                      :transport-read-data-type="'json'"
                      :transport-read-url="'http://localhost:8080/api/backlog'"
                      :page-size='25'
>
    </kendo-datasource>
    <kendo-chart :data-source-ref="'datasource'"
                                  :legend-position="'top'"
                 :series="series"
                 :category-axis="categoryAxis"
                 :value-axis="valueAxis"
                 :theme="'sass'"
                 :pannable-lock="'y'"
                 :zoomable-mousewheel-lock="'y'"
                 :zoomable-selection-lock="'y'"
                                 :pageable='true'
>
    </kendo-chart>
    </div>
</template>

<script>
export default {
  name: 'Graph',
  data() {
    return{ 
    series: [{ color:'green', type: 'column',name: 'Estimate', field: "estimate", categoryField: "id"            
}],
     valueAxis: [{
                title: { text: "unité" },
                min: 0,
                max: 25
            }],
    }
  },
  methods: {
   
  }

}
</script>