<template>
  <div class="main">
    <el-row>
      <el-col :span="16" :offset="4">
        <el-card>
          <h1>Analyse</h1>
        </el-card>

        <el-form :label-position="labelPosition" label-width="0px" :model="settings" ref="newAnalysisForm" :rules="rules">
          
          <el-card>
            <p>Database</p>
            <el-form-item label="" prop="db">
              <el-select v-model="selectedDb" placeholder="Choose Database">
                <template v-for="db in dbList">
                  <el-option :label="db" :value="db" :key="db"></el-option>
                </template>
              </el-select>
            </el-form-item>
            <el-button-group>
              <template v-for="(setting, index) in settings">
                <el-button @click="setting.show = !setting.show" :class="btnClass(index)" type="info">{{index}}</el-button>

              </template>
            </el-button-group>
          </el-card>

          <transition name="el-fade-in">
            <el-card v-if="settings.polGroup.show">
              <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.polGroup.show=false"><i class="el-icon-circle-close-outline"></i></el-button>
              <p>Pol Group</p>
              <!-- <el-form-item label="" prop="db">
                <el-select v-model="selectedDb" placeholder="Choose Database">
                  <template v-for="db in dbList">
                    <el-option :label="db" :value="db" :key="db"></el-option>
                  </template>
                </el-select>
              </el-form-item> -->
            </el-card>
          </transition>

          <transition name="el-fade-in">
            <el-card v-if="settings.pageGroup.show">
              <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.pageGroup.show=false"><i class="el-icon-circle-close-outline"></i></el-button>
              <p>Page Group</p>
            </el-card>
          </transition>

          <transition name="el-fade-in">
            <el-card v-if="settings.geo.show">
              <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.geo.show=false"><i class="el-icon-circle-close-outline"></i></el-button>
              <p>Geo</p>
            </el-card>
          </transition>

          <transition name="el-fade-in">
            <el-card v-if="settings.minLikes.show">
              <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.minLikes.show=false"><i class="el-icon-circle-close-outline"></i></el-button>
              <p>Min Likes</p>
              <div class="block">
                <el-slider
                  v-model="settings.minLikes.value"
                  max="30"
                  show-input>
                </el-slider>
              </div>              
            </el-card>
          </transition>

          <transition name="el-fade-in">
            <el-card v-if="settings.messageType.show">
              <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.messageType.show=false"><i class="el-icon-circle-close-outline"></i></el-button>
              <p>Message Type</p>
              <el-button-group>
                  <el-button>All</el-button>
                  <el-button @click="settings.messageType.value.post = !settings.messageType.post">Post</el-button>
                  <el-button @click="settings.messageType.value.comment = !settings.messageType.comment">Comment</el-button>
                  <el-button @click="settings.messageType.value.reaction = !settings.messageType.reaction">Reaction</el-button>
              </el-button-group>
              
            </el-card>
          </transition>

          <transition name="el-fade-in">
            <el-card v-if="settings.date.show">
              <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.date.show=false"><i class="el-icon-circle-close-outline"></i></el-button>
              <p>Date</p>
            </el-card>
          </transition>

          <transition name="el-fade-in">
            <el-card v-if="settings.reactions.show">
              <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.reactions.show=false"><i class="el-icon-circle-close-outline"></i></el-button>
              <p>Reactions</p>
            </el-card>
          </transition>

          
        </el-form>
      </el-col>
    </el-row>



    <!-- <p>
      <a class="btn btn-lg btn-default" role="button"
          href="http://pythonhosted.org/Flask-Bootstrap" >Show docs</a>
    </p> -->
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      dbList: ['AT_1', 'AT_2', 'AT_3'],
      selectedDb: '',
      labelPosition: 'right',
      settings: {
        polGroup: {
          show: false
        },
        pageGroup: {
          show: false
        },
        geo: {
          show: false
        },
        minLikes: {
          show: false,
          value: 0
        },
        messageType: {
          show: false,
          value: {
            all: true,
            post: false,
            comment: false,
            reaction: false
          }
        },
        date: {
          show: false
        },
        reactions: {
          show: false
        }

      }
    }
  },
  methods: {
    btnClass: function (setting) {
      if (this.settings[setting].show) {
        return 'settingActive'
      } else {
        return 'settingPassive'
      }
    }
  }
}
</script>

<style>

.el-card {
  margin: 10px 0;
}

.settingActive {
  opacity: 1;
}

.settingPassive {
  opacity: 0.6;

}

</style>
