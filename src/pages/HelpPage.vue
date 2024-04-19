<template>
  <q-page>
    <div class="q-pa-md col-8 q-gutter-md">
      <h4 class="q-mb-xs">{{ $t('page.help.title.hereToHelp') }}</h4>
      <p class="col-12">{{ $t('page.help.paragraph.intro') }}</p>
    </div>

    <div class="row justify-center q-gutter-">
      <q-card class="bg-secondary col-7">
        <q-card-section>
          <div class="text-h6">{{ $t('page.help.Contact1.title') }}</div>
          <div class="text-subtitle2">
            <p>{{ $t('page.help.Contact1.intro') }}</p>
            <ul>
              <li>
                <b>{{ $t('page.help.Contact1.person.name') }} </b><br />
                {{ $t('page.help.Contact1.person.jobTitle') }}<br />
                <q-icon name="local_phone" />
                {{ $t('page.help.Contact1.person.phone') }}<br />
                <q-icon name="mail" />
                {{ $t('page.help.Contact1.person.email') }}
              </li>
            </ul>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-sm"> </q-card-section>
      </q-card>

      <q-card class="bg-secondary col-7">
        <q-card-section>
          <div class="text-h6">{{ $t('page.help.Contact2.title') }}</div>
          <div class="text-subtitle2">
            <p>{{ $t('page.help.Contact2.intro') }}</p>
            <ul>
              <li>
                <b>{{ $t('page.help.Contact2.person.name') }} </b><br />
                {{ $t('page.help.Contact2.person.jobTitle') }}<br />
                <q-icon name="local_phone" />
                {{ $t('page.help.Contact2.person.phone') }}<br />
                <q-icon name="mail" />
                {{ $t('page.help.Contact2.person.email') }}
              </li>
            </ul>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-sm"> </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
