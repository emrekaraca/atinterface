<template>
  <div>
    <!-- The top-level el-form element wraps the form and enables validation -->
    <!-- The :model-attribute is ElementUI-specific and enables automatic form-reset -->
    <!-- The ref-attribute identifies the form -->
    <!-- The :rules-attribute is ElementUI-specific and sets the validation-rules-object that should be used for validation -->
    <!-- Read more about ElementUI-Form: http://element.eleme.io/#/en-US/component/form -->
    <el-form label-width="150px" :model="project" ref="newProjectForm" :rules="collectionRules">
      <el-card>
        <h1>Collection</h1>
      </el-card>
      
      <el-card>
        <el-row>

          <el-col :span="12">

            <!-- The prop-attribute is ElementUI-specific and identifies which validation rule should be applied to the form item -->
            <el-form-item label="Project Title:" prop="title">

              <!-- The v-model attribute is the standard VueJS-way for 2-way-data-binding -->
              <el-input v-model="project.title"></el-input>
            </el-form-item>

            <el-form-item label="Facebook Page List:" prop="pageList">
              <el-input type="textarea" :rows="6" v-model="project.pageList"></el-input>
            </el-form-item>

            <el-form-item label="Country:" prop="country">
              <el-select v-model="project.country" placeholder="Choose country">
                <template v-for="country in countryList">
                  <el-option :label="country" :value="country" :key="country"></el-option>
                </template>
              </el-select>              
            </el-form-item>

            <el-form-item label="Start Date" prop="start">
              <el-date-picker type="date" placeholder="Start Date" v-model="project.start" style="width: 100%;"></el-date-picker>
            </el-form-item>

            <el-form-item label="End Date" prop="end">
              <el-date-picker type="date" placeholder="End Date" v-model="project.end" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="11">
            <el-form-item label="Database name:" prop="dbName">
              <el-input v-model="project.dbName"></el-input>
            </el-form-item>
            <el-form-item label="App ID:" prop="appID">
              <el-input v-model="project.appID"></el-input>
            </el-form-item>
            <el-form-item label="App secret:" prop="appSecret">
              <el-input v-model="project.appSecret"></el-input>
            </el-form-item>              
          </el-col>

        </el-row>
      </el-card>

      <!-- This trigger-button is styled with reusable styles in App.vue -->
      <el-button class="runBtn" @click="submitForm('newProjectForm')">Kør indsamling</el-button>
    </el-form>

    <!-- This transition-wrapper is styled in App.vue -->
    <transition name="fade">

        <!-- The Modal is shown, when a task is sent - More Info: https://github.com/euvl/vue-js-modal/ -->
        <modal name="settings"
            :width="500"
            height="auto"
            :scrollable="true">
            <div class="modalDiv">
              <h4>Your settings:</h4>
              <br>
              <p>Project Title: {{projectCopy.title}}</p>
              <p>Number of Facebook Pages: {{projectCopy.pageList.split('\n').filter((x) => x !== '').length}}</p>
              <p>Country: {{projectCopy.country}}</p>
              <p>Time Periods: {{projectCopy.start.substring(0,10)}} - {{projectCopy.end.substring(0,10)}}</p>
              <p>dbName: {{projectCopy.dbName}}</p>
              <p>App ID: {{projectCopy.appID}}</p>
              <p>App Secret: {{projectCopy.appSecret}}</p>          
            </div>
        </modal>
    </transition>    

    
  </div>
</template>

<script>
// The data-flow is currently handled as follows:
// The "project"-object is modeled from the form.
// When the task is sent, the "project"-object is copied to the "projectCopy"-object.
// The "project"-object is then reset to empty.
// The "projectCopy"-object is then displayed in the Modal (and will later be handled by the task-sending-function)

export default {
  data () {
    return {
      project: {
        title: '',
        pageList: '',
        country: '',
        start: '',
        end: '',
        dbName: '',
        appID: '',
        appSecret: ''
      },
      projectCopy: {
        title: '',
        pageList: '',
        country: '',
        start: '',
        end: '',
        dbName: '',
        appID: '',
        appSecret: ''
      },
      // The rules object is the set of rules for the ElementUI-form-validation
      collectionRules: {
        title: [
          { required: true, message: 'This field has to be filled', trigger: 'change' }
        ],
        pageList: [
          { required: true, message: 'This field has to be filled', trigger: 'change' }
        ],
        country: [
          { required: true, message: 'This field has to be filled', trigger: 'change' }
        ],
        start: [
          { required: true, type: 'date', message: 'This field has to be filled', trigger: 'change' }
        ],
        end: [
          { required: true, type: 'date', message: 'This field has to be filled', trigger: 'change' }
        ],
        dbName: [
          { required: true, message: 'This field has to be filled', trigger: 'change' }
        ],
        appID: [
          { required: true, message: 'This field has to be filled', trigger: 'change' }
        ],
        appSecret: [
          { required: true, message: 'This field has to be filled', trigger: 'change' }
        ]
      },
      countryList: ['Danmark', 'Tyskland', 'Norge']
    }
  },
  methods: {
      // The submitForm-function is taken from the ElementUI-documentation and customized
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.sendTask() // trigger custom sendTask-function
          this.resetForm(formName) // trigger built-in resetForm-function, which sets all fields in the "project"-object to empty
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    sendTask: function () {
      // assign deep copy of "project"-object to "projectCopy"-object
      this.projectCopy = JSON.parse(JSON.stringify(this.project))
      this.showModal() // trigger settings-modal
    },
    showModal: function () { this.$modal.show('settings') },
    hideModal: function () { this.$modal.hide('settings') }
  }
}
</script>

<!-- The "scoped" attribute limits this CSS to this component only -->
<style scoped>

</style>
