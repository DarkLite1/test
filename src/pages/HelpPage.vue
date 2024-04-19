<template>
  <q-page>
    <div class="q-pa-md col-8 q-gutter-md">
      <h4 class="q-mb-xs">{{ $t('page.help.title.hereToHelp') }}</h4>
      <p class="col-12">{{ $t('page.help.paragraph.intro') }}</p>
    </div>

    <div class="container">
      <q-card
        v-for="contact in $tm('page.help.contacts')"
        :key="contact"
        class="bg-secondary col-7"
      >
        <q-card-section>
          <div class="text-h6">{{ $rt(contact.title) }}</div>

          <!-- <div class="text-h6">{{ $rt(contact.title) }}</div> -->
          <div class="text-subtitle2">
            <!-- <p>{{ $rt(contact.intro) }}</p> -->
            <ul>
              <li>
                <b>{{ $rt('contact.person.name') }} </b><br />
                {{ $rt('contact.person.jobTitle') }}<br />
                <q-icon name="local_phone" />
                {{ $rt('contact.person.phone') }}<br />
                <q-icon name="mail" />
                {{ $rt('contact.person.email') }}
              </li>
            </ul>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
