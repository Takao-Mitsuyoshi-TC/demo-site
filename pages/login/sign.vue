<script lang="ts" setup>
import type { LoginChallengeUserInfo, LoginInfo, ProfileInfo } from "@/interfaces/auth/LoginModel"

const auth = useAuth();

const form = ref(false);
const email = ref("");
const password = ref("");
const loading = ref(false);

const visible = ref(false);
const snackbar = ref(false);
const success = ref(false);

const errorMessage = ref("");


const challengInfo: LoginChallengeUserInfo = { email: email.value, password: password.value, login_save: 1};

const onLoginButtonClick = async () => {
  loading.value = true;

  snackbar.value = false;
  errorMessage.value = "";

  challengInfo.email = email.value;
  challengInfo.password = password.value;
  const { data, status, error } = await useLogin(challengInfo);

  if (error.value != null) {
    snackbar.value = true;
    errorMessage.value = error.value.data.errors[0].message;
  }

  if (status.value !== "pending") {
    loading.value = false;
  }

  if (status.value === "success") {
    success.value = true;

    // ログイン情報を格納
    auth.user_id = data.value.login.member_id;
    auth.grant_token = data.value.login.grant_token;

    await setLoginProfile(data.value.login as LoginInfo);

    // 画面遷移
    navigateTo("/");
  }

};

async function setLoginProfile(loginInfo : LoginInfo) {
  const { data, status, error } = await useLoginProfile();
  if (data.value.profile != null)
  {
    if (loginInfo.member_id === data.value.profile.member_id) {
      // 同じはずだが念のため
      auth.group_ids = data.value.profile.group_ids;
      auth.email = data.value.profile.email;

      // LocalStrageに格納
      localStorage.setItem("Auth", JSON.stringify(auth.$state));
    }
  }
}

function required(v: boolean) {
  return !!v || 'Field is required'
}
</script>

<template>
  <v-card-title>
    <h1 class="display-1">login</h1>
  </v-card-title>
  <v-card class="mx-auto mt-6 h-50 w-33 px-6 py-8">
    <v-form v-model="form" @submit.prevent="onLoginButtonClick">
      <v-text-field
        v-model="email"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        label="Email"
        clearable
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        :readonly="loading"
        :rules="[required]"
        label="Password"
        placeholder="Enter your password"
        clearable
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <br />
      <v-btn
        :disabled="!form"
        :loading="loading"
        color="primary"
        size="large"
        type="submit"
        variant="elevated"
        block
      >
        Sign In
      </v-btn>
    </v-form>
  </v-card>
  <v-snackbar
      v-model="snackbar"
      vertical
      color="error"
    >
      <div class="text-subtitle-1 pb-2">logion failed</div>
      <p>{{ errorMessage }}</p>
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>  
</template>