<template>
  <div>
 <    <button v-on:click='test()'>test</button>
      
    <kendo-datasource ref="datasource1"
                        :transport-read-url="'http://localhost:8080/api/backlog'"
                        :transport-read-data-type="'json'"
                        :page-size='25'
                        :schema-model-fields="dsSchemaFields"
                        >
    </kendo-datasource>

          <kendo-grid :data-source-ref="'datasource1'"
                :pageable='true'
                :sortable='true'
                :resizable="true"
                :toolbar="['pdf']"
                :pdf-all-pages="true"
                :pdf-avoid-links="true"
                :pdf-paper-size="'A4'"
                :pdf-margin="{ top: '2cm', left: '1cm', right: '1cm', bottom: '1cm' }"
                :pdf-landscape="true"
                :pdf-repeat-headers="true"
                :pdf-scale="0.8"
               >
        <kendo-grid-column :field="'id'" 
                           :width="120">
        </kendo-grid-column>

        <kendo-grid-column :field="'description'">

        </kendo-grid-column>

        <kendo-grid-column :field="'priority'"
                           :width="120"
                           ></kendo-grid-column>

        <kendo-grid-column :field="'status'">
        </kendo-grid-column>

        <kendo-grid-column :field="'type'"  
                           :width="120">
        </kendo-grid-column>
    </kendo-grid>
      
  </div>
</template>

<script>
import axios from 'axios'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

export default {
  name: 'Grid',
  data() {
    return{ dsSchemaFields: {
                id: { type: "number" },
                description: { type: "string" },
                priority: { type: "string" },
                status: { type: "string" },
                type: { type: "string" }
            }

    
    }
  },
  methods: {
    test(){
      axios.get('http://localhost:8080/api/backlog').then(reponse => this.posts = reponse.data)
ponent only -->

