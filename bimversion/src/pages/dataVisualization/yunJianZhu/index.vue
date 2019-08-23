<!--suppress ALL -->
<template>

  <v-item-group>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex
          xs12
          md4
        >
          <v-item>
            <v-card>
              <v-img
                :src="require('@/pages/dataVisualization/yunJianZhu/photo/show_01.png')"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{card_text1}}</h3>
                  <div> {{ card_title1 }}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange" @click="output1()">发布</v-btn>
                <v-btn flat color="orange" @click="output1()">预览</v-btn>
                <!--使用超链接进行跳转<a href="http://localhost:10000/inquiry/paomap">Explore</a>-->
              </v-card-actions>
            </v-card>
          </v-item>
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-item>
            <v-card>
              <v-img
                :src="require('@/pages/dataVisualization/yunJianZhu/photo/show_02.png')"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{card_text2}}</h3>
                  <div> {{ card_title2 }}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange" @click="output2()">发布</v-btn>
                <v-btn flat color="orange" @click="output2()">预览</v-btn>
                <!--使用超链接进行跳转<a href="http://localhost:10000/inquiry/paomap">Explore</a>-->
              </v-card-actions>
            </v-card>
          </v-item>
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-item>
            <v-card>
              <v-img
                :src="require('@/pages/dataVisualization/yunJianZhu/photo/show_03.png')"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{card_text3}}</h3>
                  <div> {{ card_title3 }}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange" @click="output3()">发布</v-btn>
                <v-btn flat color="orange" @click="output3()">预览</v-btn>
                <!--使用超链接进行跳转<a href="http://localhost:10000/inquiry/paomap">Explore</a>-->
              </v-card-actions>
            </v-card>
          </v-item>
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-item>
            <v-card>
              <v-img
                :src="require('@/pages/dataVisualization/yunJianZhu/photo/show_04.png')"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{card_text4}}</h3>
                  <div> {{ card_title4 }}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange" @click="output4()">发布</v-btn>

                <v-btn flat color="orange" @click="output4()">预览</v-btn>

                <!--使用超链接进行跳转<a href="http://localhost:10000/inquiry/paomap">Explore</a>-->
              </v-card-actions>
            </v-card>
          </v-item>
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-item>
            <v-card>
              <v-img
                :src="require('@/pages/dataVisualization/yunJianZhu/photo/show_05.png')"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{card_text5}}</h3>
                  <div> {{ card_title5 }}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange" @click="output5()">发布</v-btn>
                <v-btn flat color="orange" @click="output5()">预览</v-btn>
                <!--使用超链接进行跳转<a href="http://localhost:10000/inquiry/paomap">Explore</a>-->
              </v-card-actions>
            </v-card>
          </v-item>
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-item>
            <v-card>
              <v-img
                :src="require('@/pages/dataVisualization/yunJianZhu/photo/show_06.png')"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{card_text6}}</h3>
                  <div> {{ card_title6 }}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange" @click="output6()">发布</v-btn>
                <v-btn flat color="orange" @click="output6()">预览</v-btn>
                <!--使用超链接进行跳转<a href="http://localhost:10000/inquiry/paomap">Explore</a>-->
              </v-card-actions>
            </v-card>
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>

  <!--  <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div> {{ card_text }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>-->
</template>

<script>
  export default {
    data() {
      return {
        card_text1: '宏观信息总览',
        card_text2: '建筑行业产值',
        card_text3: '建筑市场开放度',
        card_text4: '建筑企业活跃度',
        card_text5: '建筑从业人员',
        card_text6: '两房分析',
      };
    },
    methods: {
      output1() {
        window.open(this.$api.heatmap);
      }, output2() {
        window.open(this.$api.paomap);
      }, output3() {
        window.open(this.$api.flyline);
      }, output4() {
        // 请求企业分析
        window.open(this.$api.capanalysis);
      },output5() {
        //从业人员分析
        window.open(this.$api.employee);
      },
      output6() {
        // 两房分析
        window.open(this.$api.house);
      },
    }
  };
</script>
