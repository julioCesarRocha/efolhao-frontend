<template>
  <v-card width="800" class="mx-auto">
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

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
  export default {
    data: () => ({
      items: [
        { header: 'Pacientes' },
        {
        //   avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            nome: 'Paciente 1',
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
        //   avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            nome: 'Paciente 2',
            subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
        //   avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            nome: 'Paciente 3',
            subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
        //   avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            nome: 'Paciente 4',
            subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
        //   avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            nome: 'Paciente 5',
            subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }),
  }
</script>