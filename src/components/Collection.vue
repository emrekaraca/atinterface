<template>
  <div class="main">
    <br>
    <b-row>
      <b-col></b-col>

      <b-col>

        <b-form-group id="projectTitle"
                      label="Project Title:" label-for="projectTitle"
                      description="Description">
          <b-form-input id="projectTitle"
                        type="text" v-model="project.title" required
                        placeholder="Enter new peoject title"
          ></b-form-input>
        </b-form-group>


        <b-form-group id="pageList"
                      label="Facebook Page List:" label-for="pageList"
                      description="Description">
          <b-form-textarea id="pageList"
                        v-model="project.pageList" required
                        placeholder="Enter Facebook pages"
                        :rows="4"
                        :max-rows="10"
          ></b-form-textarea>
        </b-form-group>


        <b-form-select v-model="project.country" :options="countryList" class="mb-3">
        </b-form-select>

      </b-col>

      <b-col>
        <h5>Valgrit</h5>
        <b-form-group id="dbName"
                      label="Database navn:" label-for="dbName"
                      description="Description">
          <b-form-input id="dbName"
                        type="text" v-model="project.dbName" required
                        placeholder="Enter db name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="appID"
                      label="App ID:" label-for="appID"
                      description="Description">
          <b-form-input id="appID"
                        type="text" v-model="project.appID" required
                        placeholder="Enter App ID"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="appSecret"
                      label="App secret:" label-for="appSecret"
                      description="Description">
          <b-form-input id="appSecret"
                        type="text" v-model="project.appSecret" required
                        placeholder="Enter db name"
          ></b-form-input>
        </b-form-group>

      </b-col>

      <b-col></b-col>

    </b-row>

    <br>

    <b-row>
      <b-col></b-col>
      <b-col>
        <b-button style="width: 100%" @click="sendTask()">Send Task</b-button>
      </b-col>
      <b-col></b-col>
    </b-row>

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
        dbName: '',
        appID: '',
        AppSecret: ''
      },
      projectCopy: {
        title: '',
        pageList: '',
        country: '',
        dbName: '',
        appID: '',
        AppSecret: ''
      },
      countryList: ['Danmark', 'Tyskland', 'Norge']
    }
  },
  methods: {
    sendTask: function () {
      this.projectCopy = JSON.parse(JSON.stringify(this.project))
      this.project = {
        title: '',
        pageList: '',
        country: '',
        dbName: '',
        appID: '',
        AppSecret: ''
      }
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
</style>
