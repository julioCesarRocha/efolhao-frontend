<template>
  <v-card width="800" class="mx-auto">
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
        <v-list-item v-else :key="item.nome" mandatory>
          <!-- <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar> -->
          <v-list-item-content>
            <v-list-item-title v-html="item.nome"></v-list-item-title>
            <!-- <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
import Usuario from "../services/usuario";

  export default {
    data: () => {
      return {
        header: 'Pacientes' ,
        items: [],
      }
    },
    mounted() {
    this.fetchPatients();
  },
  methods: {
    async fetchPatients() {
      try {
        const response = await Usuario.getPacientes();
        this.items = response.data;
        console.log(this.items);
      } catch (error) {
        console.error(error);
      }
    },
  },
  }
</script>

<!-- <script>
import Usuario from "../services/usuario";

export default {
  data() {
    return {
      headers: [
        {
          text: 'Nome',
          value: 'nome',
        },
        {
          text: 'Idade',
          value: 'idade',
        },
      ],
      patients: [],
    };
  },
  mounted() {
    this.fetchPatients();
  },
  methods: {
    async fetchPatients() {
      try {
        const response = await Usuario.getPacientes();
        this.patients = response.data;
        console.log(this.patients);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script> -->