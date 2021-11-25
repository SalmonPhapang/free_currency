<template>
  <div>
    <h3 class="mt-3">Currencies</h3>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Currency
          </th>
          <th class="text-left">
            Rate
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>ZAR</td>
          <td>{{ currencies.data.ZAR }}</td>
        </tr>
        <tr>
          <td>BDT</td>
          <td>{{ currencies.data.BDT }}</td>
        </tr>
        <tr>
          <td>PKR</td>
          <td>{{ currencies.data.PKR}}</td>
        </tr>
        <tr>
          <td>INR</td>
          <td>{{ currencies.data.INR }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn
        color="green"
        dark
        @click="refreshCurrencies()"
        class="md2"
    >
      Refresh
    </v-btn>
    <v-overlay :value="loading">
      <v-progress-circular
          indeterminate
          size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>

</template>

<script src="../../components/home.component.ts"></script>
