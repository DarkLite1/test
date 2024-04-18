<template>
  <q-page>
    <div class="q-pa-md col-8 q-gutter-md">
      <h4 class="q-mb-xs">{{ $t('page.home.title.safetyCourses') }}</h4>
      <p class="col-12">{{ $t('page.home.paragraph.intro') }}</p>
    </div>

    <div class="row justify-center q-gutter-md">
      <q-card class="bg-secondary">
        <q-card-section>
          <div class="text-h6">E-learning for employees</div>
          <div class="text-subtitle2">
            For people with a Heidelberg Materials contract.
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-sm">
          <q-btn
            class="bg-primary text-white"
            href="https://google.com"
            target="_blank"
          >
            <q-icon left size="3em" name="map" />
            <div>Workday</div>
          </q-btn>
          <q-btn
            class="bg-primary text-white"
            href="https://google.com"
            target="_blank"
          >
            <q-icon left size="3em" name="map" />
            <div>E-learning</div>
          </q-btn>
        </q-card-section>
      </q-card>

      <q-card class="bg-secondary">
        <q-card-section>
          <div class="text-h6">E-learning for contractors</div>
          <div class="text-subtitle2">
            For externals, contractors, suppliers, ...
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-sm">
          <q-btn
            class="bg-primary text-white"
            href="https://google.com"
            target="_blank"
          >
            <q-icon left size="3em" name="map" />
            <div>Login</div>
          </q-btn>
          <q-btn
            class="bg-primary text-white"
            href="https://google.com"
            target="_blank"
          >
            <q-icon left size="3em" name="map" />
            <div>Register</div>
          </q-btn>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
