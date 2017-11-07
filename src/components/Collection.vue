<template>
  <div class="main">
    <el-form label-width="150px" :model="project" ref="newProjectForm" :rules="rules">
      <el-card>
        <h1>Collection</h1>
      </el-card>
      
      <el-card>
        <el-row>

          <el-col :span="12">
            <el-form-item label="Project Title:" prop="title">
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

      <el-button class="runBtn" @click="submitForm('newProjectForm')">Kør indsamling</el-button>
    </el-form>

      
    <transition name="fade">
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
      rules: {
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.sendTask()
          this.resetForm(formName)
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
      this.projectCopy = JSON.parse(JSON.stringify(this.project))
      this.showModal()
    },
    showModal: function () { this.$modal.show('settings') },
    hideModal: function () { this.$modal.hide('settings') }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modalDiv {
  padding: 15px;
}

.line {
  text-align: center;
}

.runBtn {
  width: 100%;
}
</style>
