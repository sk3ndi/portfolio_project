<template>
  <section id="works" class="uk-section uk-padding-remove-vertical" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
    <div class="uk-container">
      <div class="uk-flex-middle uk-flex-center uk-text-center uk-grid uk-grid-large uk-height-viewport " uk-grid> <!-- ::::  acts as row  ::: !-->
          <div class="uk-width-3-5@m uk-animation-scale-up uk-animation">
             <h1 class="uk-margin-top uk-margin-large-bottom title">My Previous Works</h1>

               <div v-if="workTabs === 1" class="uk-child-width-1-4@s uk-child-width-1-2 uk-grid uk-flex-center uk-animation-scale-up" uk-grid>
                  <div class="">
                      <div><img src="@/assets/img/works_img_1.jpg" alt="Logo" /></div>
                  </div>

                  <div class="">
                      <div><img src="@/assets/img/works_img_2.jpg" alt="Logo" /></div>
                  </div>

                  <div class="">
                      <div><img src="@/assets/img/works_img_3.jpg" alt="Logo" /></div>
                  </div>

                  <div class="">
                      <div><img src="@/assets/img/works_img_4.jpg" alt="Logo" /></div>
                  </div>

                  <div class="">
                      <div><img src="@/assets/img/works_img_5.jpg" alt="Logo" /></div>
                  </div>

                  <div class="">
                      <div><img src="@/assets/img/works_img_6.jpg" alt="Logo" /></div>
                  </div>

                  <div class="">
                      <div><img src="@/assets/img/works_img_1.jpg" alt="Logo" /></div>
                  </div>
               </div>

               <div v-if="workTabs === 2" class="uk-child-width-1-3@s uk-child-width-1-2 uk-grid uk-animation-scale-up" uk-grid>
                  <div>
                      <div><img src="@/assets/img/works_img_1.jpg" alt="Logo" /></div>
                  </div>
               </div>

               <div class="uk-margin-medium-top">
                  <ul id="site_tabs" class="uk-flex-center uk-subnav">
                    <li><a v-on:click.stop.prevent="worksActiveTab(1)" href="" >Wordpress</a></li>
                    <li><a v-on:click.stop.prevent="worksActiveTab(2)" href="" >Web Design</a></li>
                  </ul>
              </div>

          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      workTabs: 1,
    };
  },
  methods: {
    worksActiveTab: function (tabNumber) {
      this.workTabs = tabNumber;
    },
  },
};
</script>
