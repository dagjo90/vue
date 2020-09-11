<template>
  <div>
   <!-- <button v-on:click='test()'>test</button> -->

      <kendo-tabstrip 
        style="width:950px; margin: 25px auto;"
      >
        <ul>
            <li class="k-state-active">
                Liste
            </li>
            <li>
                Ajouter
            </li>

        </ul>
        <div>
          <kendo-grid :data-source="posts"
                :height='500'
                :pageable='true'
                :sortable='true'
                :resizable="true"
                :toolbar="['pdf', 'excel']"
                :pdf-all-pages="true"
                :pdf-avoid-links="true"
                :pdf-paper-size="'A4'"
                :pdf-margin="{ top: '2cm', left: '1cm', right: '1cm', bottom: '1cm' }"
                :pdf-landscape="true"
                :pdf-repeat-headers="true"
                :pdf-scale="0.8"
                :filterable-mode="'row'"
                style="width:900px; margin: 25px auto;"

                :excel-file-name="'Kendo UI Grid Export.xlsx'"
                :excel-proxy-URL="'http://195.5.84.3:8820/Sports/rest/SportsService/AdvIndex'"
                :excel-filterable="true"
               >
      
                <kendo-grid-column :field="'Idxagr'"
                                  :width="50"
                                  ></kendo-grid-column>

                <kendo-grid-column :field="'Libidx'" :width='200'>
                </kendo-grid-column>

 
          </kendo-grid>        
          </div>

        <div>
<div class="row example-wrapper">
                <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
                    <div class="card">
                        <div class="card-block">
                            <form class="k-form" @submit="handleSubmit" style ="margin-bottom:25px;">
                                <fieldset>
                                    <legend>Créer un nouvel index</legend>
                                    <div class="mb-3">
                                        <k-input
                                            :name="'Idx'"
                                            :style='{ width: "100%" }'
                                            :label="'Idx'"
                                            :pattern="'[A-Za-z]+'"
                                            :min-length="2"
                                            :required="true"
                                        >
                                        </k-input>
                                    </div>
                                    <div class="mb-3">
                                        <k-input
                                            :name="'Libelled'"
                                            :style="{ width: '100%' }"
                                            :label="'Libelle'"
                                            :required="true"
                                            :min-length="6"
                                            :max-length="18"
                                        />
                                    </div>
                                    
                                </fieldset>
                                <input type="submit" class="k-button k-primary" style ="margin-top:25px;"  value="Créer" />
                            </form>
                        </div>
                    </div>
                </div>
               <div v-if="success"
                        class="alert alert-success"
                        
                        :style="{ position: 'absolute' }"
                    >
                        Ajout réussi !
                </div>
            </div> 

        </div>

    </kendo-tabstrip>



      
  </div>
</template>

<script>
import axios from 'axios'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

export default {
  name: 'Grid',
  data() {
    return{ 
      posts:[], 
      success: false,
    }
  },
    mounted:function(){
      axios.get('http://195.5.84.3:8820/Sports/rest/SportsService/AdvIndex').then(reponse => this.posts = reponse.data.dsAdvIndex.ttindex)
  },
  methods: {
         handleSubmit (event) {
            event.preventDefault();
            this.success = true;
            setTimeout(() => { this.success = false; }, 3000);
        },
        search(e){
          e.preventDefault;
        }
  }
}

</script>

