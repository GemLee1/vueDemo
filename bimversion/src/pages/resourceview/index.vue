<template>

  <div id="app">
    <div>
      <Header></Header>
    </div>
    <div>
      <controlpanel1></controlpanel1>
    </div>
    <div>
        <md-table v-model="users" md-card>
          <md-table-toolbar>
            <h1 class="md-title">最近数据源</h1>
          </md-table-toolbar>
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
            <md-table-cell md-label="type" md-sort-by="type">{{ item.type }}</md-table-cell>
            <md-table-cell md-label="filename" md-sort-by="title">{{ item.title }}</md-table-cell>
          </md-table-row>
        </md-table>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/layout/header/index2'
  import controlpanel1 from '../controlpanel/index1';
  export default {
    components: { Header,controlpanel1 },
    name: 'resouceview',
    data: () => ({
      users: [
        {
          id: 1,
          name: 'Shawna Dubbin',
          email: 'sdubbin0@geocities.com',
          type: 'csv',
          title: 'Assistant Media Planner'
        },
        {
          id: 2,
          name: 'Odette Demageard',
          email: 'odemageard1@spotify.com',
          type: 'csv',
          title: 'Account Coordinator'
        },
        {
          id: 3,
          name: 'Lonnie Izkovitz',
          email: 'lizkovitz3@youtu.be',
          type: 'txt',
          title: 'Operator'
        },
        {
          id: 4,
          name: 'Thatcher Stave',
          email: 'tstave4@reference.com',
          type: 'excel',
          title: 'Software Test Engineer III'
        },
        {
          id: 5,
          name: 'Clarinda Marieton',
          email: 'cmarietonh@theatlantic.com',
          type: 'doc',
          title: 'Paralegal'
        }
      ]
    })
  }
</script>
