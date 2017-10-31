<template>
  <div class="main">
    <b-row>
      <b-col></b-col>

      <b-col>

        <b-form-group id="projectTitle"
                      label="Project Titel:" label-for="projectTitle"
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
                        :rows="10"
          ></b-form-textarea>
        </b-form-group>


        <b-form-select v-model="project.country" :options="countryList" class="mb-3">
        </b-form-select>

      </b-col>

      <b-col>

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

      <b-col>
        <h4>Your settings:</h4>
        <br>
        <p>Project Title: {{project.title}}</p>
        <p>Number of Facebook Pages: {{project.pageList.split('\n').filter((x) => x !== '').length}}</p>
        <p>Country: {{project.country}}</p>
        <p>dbName: {{project.dbName}}</p>
        <p>App ID: {{project.appID}}</p>
        <p>App Secret: {{project.appSecret}}</p>
      </b-col>


    </b-row>

    
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
      countryList: ['Danmark', 'Tyskland', 'Norge']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
