<template>
  <div>
    <el-card>
      <h1>Analysis</h1>
    </el-card>

    <!-- The el-form is described in more detail in Collection.vue -->
    <!-- Read more about ElementUI-Form: http://element.eleme.io/#/en-US/component/form -->
    <el-form label-width="0px" :model="settings" ref="newAnalysisForm" :rules="analysisRules">
      
      <el-card>
        <p>Choose your database</p>
        <el-form-item prop="selectedDb">
          <el-select v-model="settings.selectedDb" placeholder="Choose Database">
            <template v-for="db in dbList">
              <el-option :label="db" :value="db" :key="db"></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-card>

      <!-- All setting-cards are wrapped with v-if's and transition-wrappers.  -->
      <!-- If the setting is within the selectedSettings-Array, it is shown - otherwise it is hidden. -->
      <!-- The data-flow is explained in the script-block -->

      <transition name="el-fade-in">
        <el-card v-if="settings.selectedDb">
          <p>Select your settings</p>
          <el-checkbox-group v-model="settings.selectedOptions">
            <el-checkbox-button v-for="(setting, index) in settings.options" :label="index" :key="index">{{index}}</el-checkbox-button>
          </el-checkbox-group>          
        </el-card>
      </transition>

      <!-- This setting has three nested layers of cards. -->
      <!-- There are currently a lot of inline-stylings - this should be improved. -->
      <!-- The 2nd- and 3rd level cards are generated with the native VueJS v-for-directive -->
      <!-- Read more about v-for here: https://vuejs.org/v2/guide/list.html -->
      <transition name="el-fade-in">
        <el-card v-if="settings.selectedOptions.includes('polGroup')">
          <!-- This button takes out this setting from the selectedSettings-Array. It is repeated for each setting. It should be made reusable. -->
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.selectedOptions = settings.selectedOptions.filter((x)=>x!=='polGroup')"><i class="el-icon-circle-close-outline roundBtn"></i></el-button>
          <p>Pol Group</p>
          <el-row>
            <template v-for="(group, index) in settings.options.polGroup.value">
              <el-col :span="22" :offset="1">
                <el-card style="position: relative">

                  <el-button style="position: absolute; right: 1%; top: 1%; color: grey" type="text" @click="settings.options.polGroup.value.splice(index, 1)" v-if="index>0">
                    <i class="el-icon-circle-close-outline roundBtn"></i>
                  </el-button>

                  <p>Name:</p>
                  <el-form-item>
                    <el-input v-model="group.name"></el-input>
                  </el-form-item>

                  <template v-for="(defintion, index2) in group.definitions">
                  
                    <el-card :key="defintion" style="position: relative">
                      <el-button style="position: absolute; right: 1%; top: 1%; color: grey" type="text" @click="group.definitions.splice(index2, 1)" v-if="index2>0">
                        <i class="el-icon-circle-close-outline roundBtn"></i>
                      </el-button>
                      
                      <p>Parties</p>
                      <el-checkbox-group v-model="defintion.list" prop="parties">
                        <el-checkbox-button v-for="party in parties" :label="party" :key="party">{{party}}</el-checkbox-button>
                      </el-checkbox-group>          

                      <p>Minimum / Maximum</p>
                      <el-input-number v-model="defintion.min" controls-position="right" @change="handleChange" :min="0" :max="Math.min(defintion.max, 100)"></el-input-number>
                      <el-input-number v-model="defintion.max" controls-position="right" @change="handleChange" :min="Math.max(0, defintion.min)" :max="100"></el-input-number>
                    </el-card>

                  </template>
                  <el-row>
                    <el-col :span="24" style="text-align: center">
                      <el-button @click="group.definitions.push({'list': [], 'min': 0, 'max': 100})" type="text"><i class="el-icon-circle-plus addBtn roundBtn addPolGroup"></i></el-button>     
                    </el-col>
                  </el-row>
               
                </el-card>
              </el-col>
            </template>
            <el-col :span="24" style="text-align: center">
              <el-button @click="addPolGroupItem()" type="text"><i class="el-icon-circle-plus addBtn roundBtn addPolGroup"></i></el-button>
            </el-col>
          </el-row>
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.selectedOptions.includes('pageGroup')">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.selectedOptions = settings.selectedOptions.filter((x)=>x!=='pageGroup')"><i class="el-icon-circle-close-outline roundBtn"></i></el-button>
          <p>Page Group</p>
          <el-form-item label="" prop="db">
            <el-select v-model="settings.options.pageGroup.value" placeholder="Choose Database">
              <!-- The dbList is filtered, so that the selectedDB (from above) is not offered here -->
              <template v-for="db in dbList.filter((x) => x!==settings.selectedDb)">
                <el-option :label="db" :value="db" :key="db"></el-option>
              </template>
            </el-select>
          </el-form-item>
          
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.selectedOptions.includes('geo')">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.selectedOptions = settings.selectedOptions.filter((x)=>x!=='geo')"><i class="el-icon-circle-close-outline roundBtn"></i></el-button>
          <p>Geo is activated.</p>
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.selectedOptions.includes('minLikes')">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.selectedOptions = settings.selectedOptions.filter((x)=>x!=='minLikes')"><i class="el-icon-circle-close-outline roundBtn"></i></el-button>
          <p>Min Likes</p>
          <div class="block">
            <el-slider
              v-model="settings.options.minLikes.value"
              :max="30"
              show-input>
            </el-slider>
          </div>              
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.selectedOptions.includes('messageType')">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.selectedOptions = settings.selectedOptions.filter((x)=>x!=='messageType')"><i class="el-icon-circle-close-outline roundBtn"></i></el-button>
          <p>Message Type</p>
          <el-button-group>
              <el-button :class="messageTypeAllClass" @click="setMessageTypeAll()">All</el-button>
              <el-button @click="settings.options.messageType.value.post = !settings.options.messageType.value.post" :class="messageTypeClass('post')">Post</el-button>
              <el-button @click="settings.options.messageType.value.comment = !settings.options.messageType.value.comment" :class="messageTypeClass('comment')">Comment</el-button>
              <el-button @click="settings.options.messageType.value.reaction = !settings.options.messageType.value.reaction" :class="messageTypeClass('reaction')">Reaction</el-button>
          </el-button-group>
          
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.selectedOptions.includes('reactions')">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.selectedOptions = settings.selectedOptions.filter((x)=>x!=='reactions')"><i class="el-icon-circle-close-outline roundBtn"></i></el-button>
          <p>Reactions</p>
          <el-button round :class="reactionsAllClass" @click="setReactionsAll()">All</el-button>
          <template v-for="reaction in reactions">
            <img :src="reactionPic(reaction)" 
              :alt="reaction" 
              width="40px" 
              style="transform: translateY(14px)" 
              :class="reactionClass(reaction)" 
              :key="reaction" 
              @click="settings.options.reactions.value[reaction] = !settings.options.reactions.value[reaction]">
          </template>
          
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-card v-if="settings.selectedOptions.includes('date')">
          <el-button style="float: right; padding: 3px 0; color: grey" type="text" @click="settings.selectedOptions = settings.selectedOptions.filter((x)=>x!=='date')"><i class="el-icon-circle-close-outline roundBtn"></i></el-button>
          <p>Date</p>
          <el-form-item label="">
            <el-row>
              <el-col :span="11">
                <el-date-picker type="date" placeholder="Start Date" v-model="settings.options.date.start" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-date-picker type="date" placeholder="End Date" v-model="settings.options.date.end" style="width: 100%;" prop="end"></el-date-picker>
              </el-col>
            </el-row>
          </el-form-item>
          
        </el-card>
      </transition>

      <transition name="el-fade-in">
        <el-button class="runBtn" @click="submitForm('newAnalysisForm')" v-if="settings.selectedDb">Start Analysis</el-button>
      </transition>



      
    </el-form>


    <transition name="fade">
        <modal name="settings"
            :width="500"
            height="auto"
            :scrollable="true">
            <div class="modalDiv">
              <h4>Your settings:</h4>
              <p>Database: {{settingsCopy.selectedDb}}</p>
              <p v-if="settingsCopy.selectedOptions.includes('polGroup')">Number of polGroup-settings: {{settingsCopy.options.polGroup.value.length}}</p>
              <p v-if="settingsCopy.selectedOptions.includes('pageGroup')">page Group: {{settingsCopy.options.pageGroup.value}}</p>
              <p v-if="settingsCopy.selectedOptions.includes('geo')">Geo-setting is selected</p>
              <p v-if="settingsCopy.selectedOptions.includes('minLikes')">MinLikes is set to {{settingsCopy.options.minLikes.value}}</p>
              <p v-if="settingsCopy.selectedOptions.includes('messageType')">Selected Message Types: <template v-for="(messageType, index) in settingsCopy.options.messageType.value"><span v-if="messageType">{{index}} </span></template></p>
              <p v-if="settingsCopy.selectedOptions.includes('reactions')">Selected Reaction Types: <template v-for="(reaction, index) in settingsCopy.options.reactions.value"><span v-if="reaction">{{index}} </span></template></p>
              <p v-if="settingsCopy.selectedOptions.includes('date')">Time Period is set to: {{settingsCopy.options.date.start.substring(0,10)}} - {{settingsCopy.options.date.end.substring(0,10)}}</p>
            </div>
        </modal>
    </transition>    
    



    <!-- <p>
      <a class="btn btn-lg btn-default" role="button"
          href="http://pythonhosted.org/Flask-Bootstrap" >Show docs</a>
    </p> -->
  </div>
  
</template>

<script>
// The data-flow is currently handled as follows:
// The component is initialized with an empty "settings"-object
// At mounted(), the "settings"-object is copied into the "settingsTemplate"-object
// All form actions are modeled in the "settings"-object
// When the form is sent, the "settings"-object is copied to the "settingsCopy"-object
// The "settingsCopy"-object is then used to show the settings in the modal
// At the same time the "settings"-object is reset by copying the "settingsTemplate"-object into it
// All of this is done, so that the "settings"-object is only defined once.
// Otherwise future changes would necessitate edits in multiple places

export default {
  data () {
    return {
      dbList: ['AT_1', 'AT_2', 'AT_3'], // DummyList
      parties: ['A', 'AA', 'B', 'C', 'D', 'F', 'I', 'O', 'OE', 'V'],
      reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
      settings: {
        selectedDb: '',
        selectedOptions: [],
        options: {
          polGroup: {
            value: [
              {
                name: '',
                definitions: [
                  {
                    list: [],
                    min: 0,
                    max: 100
                  }
                ]
              }
            ]
          },
          pageGroup: {
            value: ''
          },
          geo: {
          },
          minLikes: {
            value: 0
          },
          messageType: {
            value: {
              post: false,
              comment: false,
              reaction: false
            }
          },
          reactions: {
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
            start: '',
            end: ''
          }
        }
      },
      settingsCopy: {
        selectedOptions: [] // this field has to be present from the beginning, because the modal has v-if's on this array.
      },
      settingsTemplate: {},
      // The rules object is the set of rules for the ElementUI-form-validation
      analysisRules: {
        selectedDb: [
          { required: true, message: 'This field has to be filled', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    createSettingsTemplate: function () { this.settingsTemplate = JSON.parse(JSON.stringify(this.settings)) },
    createSettingsCopy: function () { this.settingsCopy = JSON.parse(JSON.stringify(this.settings)) },
    resetSettings: function () { this.settings = JSON.parse(JSON.stringify(this.settingsTemplate)) },
    addPolGroupItem: function () {
      let newItem = {
        name: '',
        definitions: [
          {
            list: [],
            min: 0,
            max: 100
          }
        ]
      }
      this.settings.options.polGroup.value.push(newItem)
    },
    // The submitForm-function is taken from the ElementUI-documentation and customized

    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        let self = this
        if (valid) {
          this.sendAnalysis() // trigger custom sendAnalysis-function
          self.resetSettings() // trigger custom reset-function
          console.log('submitted!!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    sendAnalysis: function () {
      // assign deep copy of "project"-object to "projectCopy"-object
      this.settingsCopy = JSON.parse(JSON.stringify(this.settings))
      this.showModal() // trigger settings-modal
    },
    showModal: function () { this.$modal.show('settings') },
    hideModal: function () { this.$modal.hide('settings') },
    reactionPic: (reaction) => require('./../assets/reactions/' + reaction + '.png'),
    reactionClass: function (reaction) {
      if (this.settings.options.reactions.value[reaction]) {
        return 'settingActive'
      } else {
        return 'settingPassive'
      }
    },
    messageTypeClass: function (messageType) {
      if (this.settings.options.messageType.value[messageType]) {
        return 'settingActive'
      } else {
        return 'settingPassive'
      }
    },
    setMessageTypeAll: function () {
      this.settings.options.messageType.value.post = false
      this.settings.options.messageType.value.comment = false
      this.settings.options.messageType.value.reaction = false
    },
    setReactionsAll: function () {
      this.settings.options.reactions.value.like = false
      this.settings.options.reactions.value.love = false
      this.settings.options.reactions.value.haha = false
      this.settings.options.reactions.value.wow = false
      this.settings.options.reactions.value.sad = false
      this.settings.options.reactions.value.angry = false
    }
  },
  computed: {
    reactionsAllClass: function () {
      if (this.settings.options.reactions.value.like === false &&
        this.settings.options.reactions.value.love === false &&
        this.settings.options.reactions.value.haha === false &&
        this.settings.options.reactions.value.wow === false &&
        this.settings.options.reactions.value.sad === false &&
        this.settings.options.reactions.value.angry === false) {
        return 'settingActive'
      } else {
        return 'settingPassive'
      }
    },
    messageTypeAllClass: function () {
      if (this.settings.options.messageType.value.post === false &&
        this.settings.options.messageType.value.comment === false &&
        this.settings.options.messageType.value.reaction === false) {
        return 'settingActive'
      } else {
        return 'settingPassive'
      }
    }
  },
  mounted () {
    this.createSettingsTemplate()
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

.addPolGroup {
  transform: translateY(15px);
}

</style>
