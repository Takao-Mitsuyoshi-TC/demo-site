<script lang="ts" setup>
const auth = useAuth();

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field label="ID" :model-value="`${auth.user_id}`" clearable></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field label="EMail" type="email" :model-value="`${auth.email}`" clearable></v-text-field>
      </v-col>
    </v-row>

  </v-container>
  
</template>