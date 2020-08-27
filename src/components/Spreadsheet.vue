<template>
  <div>
  
    <kendo-datasource ref="datasource1"
                        :transport-read-url="'http://localhost:8080/api/backlog'"
                        :transport-read-data-type="'json'"
                        >
    </kendo-datasource>
    <kendo-spreadsheet 
                    ref="spreadsheet" 
                    :columns="12" 
                    :rows="100"
                    >
        <kendo-spreadsheet-sheet 
                    :name="'Backlog'" 
                    :data-source-ref="'datasource1'" 
                    :rows="rows"
                    :columns="columns"
                    >
        </kendo-spreadsheet-sheet>
    </kendo-spreadsheet>

  </div>

</template>

<script>
export default {
  name: 'Spreadsheet',
   mounted () {
        var spreadsheet = this.$refs.spreadsheet.kendoWidget();
        spreadsheet.element.css('height', '800px');
        spreadsheet.element.css('width', '100%');
        spreadsheet.resize();
        // spreadsheet.sheetByIndex(0).setDataSource(this.datasource);
    },
  data() {
    return{ 

        /*stylisation des cellulles */
rows: [{
                height: 40,
                cells: [{
                    bold: "true",
                    background: "#9c27b0",
                    textAlign: "center",
                    color: "white"
                },{
                    bold: "true",
                    background: "#9c27b0",
                    textAlign: "center",
                    color: "white"
                },{
                    bold: "true",
                    background: "blue",
                    textAlign: "center",
                    color: "red",
                },{
                    bold: "true",
                    background: "#9c27b0",
                    textAlign: "center",
                    color: "white"
                },{
                    bold: "true",
                    background: "gray",
                    textAlign: "center",
                    color: "white"
                },{
                    bold: "true",
                    background: "#9c27b0",
                    textAlign: "center",
                    color: "white"
                },{
                    bold: "true",
                    background: "#9c27b0",
                    textAlign: "center",
                    color: "white"
                }]
            }],
            columns: [
                { width: 100 },
                { width: 100 },
                { width: 180 },
                { width: 180 },
                { width: 450 }
            ],
    
    }
  },
  methods: {
   
  }

}


</script>