<template>
  <div>
    <header>

    </header>

    <section>
      <div>
        <p>Generar modelo</p>
        Año 1:
        <select name="" id="" v-model="yearModel0">
          <option v-for="row, i in dataYear" :key="i" :value="row"> {{row}} </option>
        </select>

        Año 2:
        <select name="" id="" v-model="yearModel1">
          <option v-for="row, i in yearList2" :key="i" :value="row"> {{row}} </option>
        </select>

      </div>

      <div>
        Año a predecir 2:
        <input type="number" :min="yearModel0" v-model="yearselected">

        <button @click="predictModel">Predecir</button>

        <p>P(t) = {{ cModel }}*exp({{ kModel }}* t)</p>
        <p>Predicción: {{ predictionResult }}</p>
      </div>
    </section>

    <section class="h-80 bg-blue-500 overflow-y-scroll">
      <table>
        <tr>
          <td>Año</td>
          <td>Población</td>
        </tr>

        <tr v-for="row, i in dataYear" :key="i">
          <td>{{dataYear[i]}}</td>
          <td>{{dataPopulation[i]}}</td>
        </tr>
      </table>
    </section>

    <section class="w-[800px]">
      <canvas id="acquisitions"></canvas>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

import Chart from 'chart.js/auto';

// @ts-ignore
import { dataYear, dataPopulation } from '@/utils/data'
// @ts-ignore
import { getModel, exponential } from '@/utils/ecuations'

const yearModel0 = ref(dataYear[0])
const yearModel1 = ref(dataYear[1])
const yearselected = ref(dataYear[0])

const cModel = ref(0)
const kModel = ref(0)
const predictionResult = ref(0)

const predictModel = () => {
  const { c, k } = getModel(yearModel0.value, yearModel1.value)
  cModel.value = c
  kModel.value = k
  
  predictionResult.value = exponential(cModel.value, kModel.value, yearselected.value - yearModel0.value)

  let years = []
  let population = []

  const maxYear = yearModel1.value > yearselected.value ? yearModel1.value : (yearselected.value + 2)

  for (let index = yearModel0.value; index <= maxYear ; index++) {
    years.push(index)
    population.push( exponential(cModel.value, kModel.value, index - yearModel0.value) )
  }

  new Chart(
    // @ts-ignore
    document.getElementById('acquisitions'),
    {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Población',
            data: population,
            pointBackgroundColor: function(context) {
              let index = context.dataIndex;
              const year = years[index]
              return  year === yearModel0.value ? 'green' : year === yearModel1.value ? 'green' : year === yearselected.value ? 'red' : 'blue' ;
            }
          }
        ]
      }
    }
  );
}

const yearList2 = computed(() => {
  const arr = dataYear.filter((row) => row > yearModel0.value)
  yearModel1.value = arr[0] 
  return arr
})
</script>
