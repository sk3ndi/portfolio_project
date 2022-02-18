<template>
  <section id="works" class="uk-section uk-padding-remove-vertical" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
    <div class="uk-container">
      <div class="uk-flex-middle uk-flex-center uk-text-center uk-grid uk-grid-large uk-height-viewport " uk-grid> <!-- ::::  acts as row  ::: !-->
          <div class="uk-width-3-5@m uk-animation-scale-up uk-animation">
             <h1 class="uk-margin-top uk-margin-large-bottom title">My Previous Works</h1>

               <div v-for="infos in get_active_tab_content" :key="infos.name" class="uk-child-width-1-4@s uk-child-width-1-2 uk-grid uk-flex-center uk-animation-scale-up" uk-grid>

                  <div class="" v-for="info_list in infos.work_lists" :key="info_list.title" >
                      <div class="uk-inline uk-transition-toggle">
                        <img :src="get_img_url(info_list.img)" :alt="info_list.name" />

                        <!--  Image Overlay  !-->
                        <div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-default">
                          <!-- Overlay  Context !-->
                          <div class="uk-position-center">
                            <div class="uk-transition-slide-top-small">
                              <h5 class="uk-margin-small uk-text-uppercase">{{ info_list.title }}</h5>
                            </div>
                            <div class="uk-transition-slide-bottom-small">
                              <a v-if="infos.name === work_category" :href="get_img_url(info_list.url)" class="uk-button uk-button-gold" target="_blank">Click Here</a>
                              <a v-else :href="info_list.url" class="uk-button uk-button-gold" target="_blank">Click Here</a>
                            </div>
                          </div>
                        </div>

                      </div>
                  </div>

               </div>

               <div class="uk-margin-medium-top">
                  <ul id="site_tabs" class="uk-flex-center uk-subnav">

                    <!-- Get the Work CategoryName as Tabs !-->
                    <li v-for="tab in work_category_data" :key="tab.name" >
                      <a v-on:click.stop.prevent="work_active_tab(tab.id)" href="" >{{tab.name}}</a>
                    </li>

                  </ul>
              </div>

          </div>
      </div>
    </div>
  </section>
</template>

<script>
import web_data from "./data/webData.json";
//import axios from "axios";

export default {
  data() {
    return {
      work_category_data: web_data.work_category,
      work_tab_switcher: 1,
      work_category: 'Web Design'
    };
  },

  //async created() {
    //try {
    //  const res = await axios.get(`src/components/data/webData.json`);
      //  console.log(res.date);
    //} catch (error) {
      //  console.log(error);
    //}
  //},

  computed: {
    // Toggle Current Work Category
    get_active_tab_content: function () {
      return this.work_category_data.filter( items => items.id === this.work_tab_switcher )
      //return true
    }
  },

  methods: {
    // Work Tabs Active Toggles
    work_active_tab: function (tabNumber) {
      this.work_tab_switcher = tabNumber;
    },
    // Get Images link Dynamically
    get_img_url(index) {
      return require('@/assets/img/'+index)
    },
  },

};
</script>
