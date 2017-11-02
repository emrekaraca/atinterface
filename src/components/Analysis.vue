<template>
  <div class="main">
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
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.polGroup.show=false"><i class="el-icon-circle-close-outline closeBtn"></i></el-button>
          <p>Pol Group</p>
          <el-row>
            <template v-for="(group, index) in settings.polGroup.value">
              <el-col :span="20">
                <el-card>

                  <el-form-item label="Name:" prop="name">
                    <el-input v-model="group.name"></el-input>
                  </el-form-item>
                  

                </el-card>
              </el-col>
              <el-col :span="2">
                <span @click="settings.polGroup.value.splice(index, 1)" v-if="index>0"><i class="el-icon-circle-close removePolGroup"></i></span>
                <span @click="settings.polGroup.value.push({'name': 'test'})" v-if="index === settings.polGroup.value.length-1"><i class="el-icon-circle-plus addPolGroup"></i></span>
              </el-col>

            </template>

          </el-row>

        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.pageGroup.show">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.pageGroup.show=false"><i class="el-icon-circle-close-outline closeBtn"></i></el-button>
          <p>Page Group</p>
          <el-form-item label="" prop="db">
            <el-select v-model="settings.pageGroup.value" placeholder="Choose Database">
              <template v-for="db in dbList.filter((x) => x!==selectedDb)">
                <el-option :label="db" :value="db" :key="db"></el-option>
              </template>
            </el-select>
          </el-form-item>
          
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.geo.show">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.geo.show=false"><i class="el-icon-circle-close-outline closeBtn"></i></el-button>
          <p>Geo is activated.</p>
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.minLikes.show">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.minLikes.show=false"><i class="el-icon-circle-close-outline closeBtn"></i></el-button>
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
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.messageType.show=false"><i class="el-icon-circle-close-outline closeBtn"></i></el-button>
          <p>Message Type</p>
          <el-button-group>
              <el-button :class="messageTypeAllClass">All</el-button>
              <el-button @click="settings.messageType.value.post = !settings.messageType.value.post" :class="messageTypeClass('post')">Post</el-button>
              <el-button @click="settings.messageType.value.comment = !settings.messageType.value.comment" :class="messageTypeClass('comment')">Comment</el-button>
              <el-button @click="settings.messageType.value.reaction = !settings.messageType.value.reaction" :class="messageTypeClass('reaction')">Reaction</el-button>
          </el-button-group>
          
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.reactions.show">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.reactions.show=false"><i class="el-icon-circle-close-outline closeBtn"></i></el-button>
          <p>Reactions</p>
          <el-button round :class="reactionsAllClass">All</el-button>
          <template v-for="reaction in reactions">
            <img :src="reactionPic(reaction)" 
              :alt="reaction" 
              width="40px" 
              style="transform: translateY(14px)" 
              :class="reactionClass(reaction)" 
              :key="reaction" 
              @click="settings.reactions.value[reaction] = !settings.reactions.value[reaction]; setReactionsAll()">
          </template>
          
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.date.show">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.date.show=false"><i class="el-icon-circle-close-outline closeBtn"></i></el-button>
          <p>Date</p>
          <el-form-item label="">
            <el-row>
              <el-col :span="11">
                <el-date-picker type="date" placeholder="Start Date" v-model="settings.date.start" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-date-picker type="date" placeholder="End Date" v-model="settings.date.end" style="width: 100%;" prop="end"></el-date-picker>
              </el-col>
            </el-row>
          </el-form-item>
          
        </el-card>
      </transition>

      <el-button class="runBtn">Start</el-button>



      
    </el-form>



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
      reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
      selectedDb: '',
      labelPosition: 'right',
      settings: {
        polGroup: {
          show: false,
          value: [
            {
              name: '',
              party: ''
            }
          ]
        },
        pageGroup: {
          show: false,
          value: ''
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
            post: false,
            comment: false,
            reaction: false
          }
        },
        reactions: {
          show: false,
          value: {
            like: false,
            love: false,
            haha: false,
            wow: false,
            sad: false,
            angry: false
          }
        },
        date: {
          show: false
        }
      }
    }
  },
  methods: {
    reactionPic: (reaction) => require('./../assets/reactions/' + reaction + '.png'),
    reactionClass: function (reaction) {
      if (this.settings.reactions.value[reaction]) {
        return 'settingActive'
      } else {
        return 'settingPassive'
      }
    },
    messageTypeClass: function (messageType) {
      if (this.settings.messageType.value[messageType]) {
        return 'settingActive'
      } else {
        return 'settingPassive'
      }
    },
    btnClass: function (setting) {
      if (this.settings[setting].show) {
        return 'settingActive'
      } else {
        return 'settingPassive'
      }
    }
  },
  computed: {
    reactionsAllClass: function () {
      if (this.settings.reactions.value.like === false &&
        this.settings.reactions.value.love === false &&
        this.settings.reactions.value.haha === false &&
        this.settings.reactions.value.wow === false &&
        this.settings.reactions.value.sad === false &&
        this.settings.reactions.value.angry === false) {
        return 'settingActive'
      } else {
        return 'settingPassive'
      }
    },
    messageTypeAllClass: function () {
      if (this.settings.messageType.value.post === false &&
        this.settings.messageType.value.comment === false &&
        this.settings.messageType.value.reaction === false) {
        return 'settingActive'
      } else {
        return 'settingPassive'
      }
    }
  }
}
</script>

<style scoped>

.settingActive {
  opacity: 1;
}

.settingPassive {
  opacity: 0.4;
}

.line {
  text-align: center;
}

.runBtn {
  width: 100%;
}

.addPolGroup {
  color: green;
  font-size: 30px;
  transform: translateY(15px);
}

.removePolGroup {
  color: red;
  font-size: 30px;
  transform: translateY(15px)
}

.closeBtn {
  font-size: 30px;
}

</style>
