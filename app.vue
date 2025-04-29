<template>
  <main>
    <header class="bg-[#11212D] w-full h-18 shadow-custom-light">
      <div class="w-full flex justify-between items-center px-4">
        <div class="flex flex-row justify-between items-center w-80 mr-36 ">
            <img src="/imagenes/euler.svg" alt="Logo de team papas fritas" class="w-[68px] object-contain">
            <p class="text-[#FFFFFF] font-semibold w-auto text-[16px] tracking-wide ">Team Papitas Fritas</p>
        </div>
        <nav class="w-full flex justify-content item-center">
          <ul class="flex w-full flex justify-between item-center">
            <li class="text-[#FFFFFF] text-[12px] hover:text-[#00857c] cursor-pointer delay-300">
              <a href="">
                Problema planteado
              </a>
            </li>
            <li class="text-[#FFFFFF] text-[12px] hover:text-[#00857c] cursor-pointer delay-300">
              <a href="">
                Ecuación logistica 
              </a>
            </li>
            <li class="text-[#FFFFFF] text-[12px] hover:text-[#00857c] cursor-pointer delay-300">
              <a href="">
                Proyección 
              </a>
            </li>
            <li class="text-[#FFFFFF] text-[14px] hover:text-[#00857c] cursor-pointer delay-300">
              <a href="">
                Sobre nosotros
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>

    <section class="w-full h-[447px] bg-[#253745] flex justify-around items-center shadow-custom-sections">
      <figure class="grid place-content-center">
        <img src="/imagenes/flag_canada.svg" alt="Bandera canada" class="w-[428px]">
      </figure>

      <div class="flex flex-nowrap flex-col">
        <span class=" w-full text-[#FFFFFF] text-[18px] font-semibold text-center mb-8">
          Problema planteado
        </span>
        <p class="text-[#FFFFFF] text-[14px] w-96 text-justify mb-8">
          Este proyecto utiliza la ecuación diferencial logística para analizar y proyectar el crecimiento poblacional de GTA Canada, revelando cómo la ciudad evoluciona en medio de dinámicas complejas y limitaciones como recursos y espacio urbano. A través de datos históricos y el modelo matemático, se identifica el equilibrio entre el crecimiento y la capacidad de soporte, lo que permite predecir puntos críticos de estabilización y comprender mejor los desafíos y oportunidades en la planificación urbana sostenible de una metrópoli en constante transformación.
        </p>
        <button class="w-24 text-[#FFFFFF] text-[12px] bg-[#AFAFAF] h-8 grid place-content-center mx-auto shadow-custom-dark rounded-md-custom hover:shadow-custom-buttons hover:bg-[#11212D] hover:delay-200">
          Leer más
        </button>
      </div>
    </section>


    <!-- Section ecuacion poblacional -->
     <section class="mx-auto w-full flex justify-center my-12">
      <img src="/imagenes/fx-icon.svg" alt="" class="w-[68px]">
     </section>

    <section class="h-[850px] grid grid-flow-col w-full px-8">
      <article class="flex flex-col items-center">
        <span class="text-[18px] text-[#11212D] font-bold pb-8">
          Ecuación Poblacional
        </span>
        <span class="pl-4 text-[#06141B] pb-8">
          ¿En que consiste la Ecuación Poblacional?  
        </span>
        <figure class="pb-8">
          <img src="/imagenes/ecuacion_poblacional.png" alt="Ecuación Poblacional">
        </figure>
        <figure class="pb-8">
          <img src="/imagenes/solve-poblacional.jpg" alt="Solución Ecuación Poblacional">
        </figure>

        <span class="pl-4 text-[#06141B] pb-8 font-medium">
          Obtenga la Ecuación Poblacional según los años que escogio 
        </span>

        <p class="pl-4 text-[#06141B] pb-8 ">P(t) = {{ cModel }}*exp({{ kModel }}* t)</p>
        <p class="pl-4 text-[#06141B] pb-8 ">Predicción: {{ predictionResult }}</p>

      </article>


      <article class="w-full">
        <span class="text-[#06141B] pb-4 text-center flex justify-center">
          ¿Quieres proyectar la población de Canada?
        </span>

        <p class="text-[#06141B] pb-8 text-center w-[500px] mx-auto">
          Teniendo en cuenta el año inicial y el año a proyectar puedes analizar la población de GTA Canada, con datos reales y comportamientos de los indices. Utilizando dos variables necesarias para que tu proyección sea lo más precisa que se pueda, usando la Eucación Poblacional. 
        </p>

        <p class="text-[#06141B] pb-4   text-center flex justify-center">Generar modelo Poblacional</p>

    <div class="w-full  flex flex-col m-4 h-[450px]">
      <div class="flex items-center p-2 font-bold text-white border-b rounded-md-custom shadow-custom-sections border-blue-50 bg-[#005062]">
        <div class="w-1/2 pr-2 border-r text-center font-semibold border-blue-50 ">Año</div>
        <div class="w-1/2 pl-2 text-center font-semibold">Población</div>
      </div>

      <!-- Contenedor scrollable para las filas -->
      <div class="flex-1 overflow-y-scroll">
        <div
          v-for="(year, i) in dataYear"
          :key="i"
          class="flex items-center p-2 text-white ]"
        >
          <div class="w-1/2 pr-2 radius-2 mr-4 flex items-center justify-center h-8 bg-[#005062] rounded-md-custom">{{ year }}</div>
          <div class="w-1/2 pl-2 bg-[#11212D] flex items-center justify-center h-8 rounded-md-custom">{{ dataPopulation[i] }}</div>
        </div>
      </div>
    </div>

    
    <div class="flex flex-col w-full mt-8">

      <div class="flex justify-around items-center mb-8">
        <label calss="" for="year1P">Selecciona en base a la tabla el año inicial: </label>
        <select class="border rounded-md p-2 shadow-custom-light" name="year1P" id="year1P" v-model="yearModel0">
          <option v-for="row, i in dataYear" :key="i" :value="row"> {{row}} </option>
        </select>
      </div>
    
      <div class="flex justify-around items-center mb-8">
        <label class="" for="year2P">Seleccione el segundo dato mayor al año inicial:</label>
        <select class="border rounded-md p-2 shadow-custom-light" name="year2P" id="year2P" v-model="yearModel1">
          <option v-for="row, i in yearList2" :key="i" :value="row"> {{row}} </option>
        </select>
      </div>
      

        <div class="flex justify-evenly items-center mb-8">
          <label for="year2P">Hasta que año quiere proyectar la población: </label>
          <input class="border rounded-md p-2 shadow-custom-light" type="number" :min="yearModel0" v-model="yearselected">
        </div>
        <button class="border rounded-md p-2 shadow-custom-light  w-1/2 mx-auto hover:shadow-custom-buttons hover:delay-150 hover:bg-[#11212D] hover:text-[#FFFFFF]" @click="predictModel">Predecir</button>
    </div>
        

      

      </article>

      
    </section>

    
    <section class="w-full h-[700px] grid place-content-center bg-[#253745] mt-56">
      <span class="w-full text-[#FFFFFF] text-[18px] font-semibold text-center mb-8">¡Grafica con los datos anteriores la Ecuación Poblacional!</span>
      <section class="w-[800px] h-[400px] grid place-content-center bg-[#FFFFFF] p-4 rounded-md">
        <canvas id="acquisitions"></canvas>
      </section>
    </section>
    

    <!-- logistica  -->
    <section class="mx-auto w-full flex justify-center my-12">
      <img src="/imagenes/fx-icon-green.svg" alt="" class="w-[68px]">
     </section>


    <section class="h-auto grid grid-flow-col w-full px-8">
      <article class="w-full">
        <span class="text-[#06141B] pb-4 text-center flex justify-center">
          ¿Quieres proyectar la población de canada?
        </span>

        <p class="text-[#06141B] pb-8 text-center w-[500px] mx-auto">
          Teniendo en cuenta el año inicial, la población maxima que creas y el año a proyectar puedes analizar la población de GTA Canada, con datos reales y comportamientos de los indices. Utilizando dos variables necesarias para que tu proyección sea lo mas precisa que se pueda, usando la Eucación Logistaica. 
        </p>

        <p class="text-[#06141B] pb-4 text-center flex justify-center">Generar modelo logisticol</p>

        <div class="w-full  flex flex-col m-4 h-[450px]">
          <div class="flex items-center p-2 font-bold text-white border-b rounded-md-custom shadow-custom-sections border-blue-50 bg-[#005062]">
            <div class="w-1/2 pr-2 border-r text-center font-semibold border-blue-50 ">Año</div>
            <div class="w-1/2 pl-2 text-center font-semibold">Población</div>
          </div>

      <!-- Contenedor scrollable para las filas -->
          <div class="flex-1 overflow-y-scroll">
            <div v-for="(year, i) in dataYear" :key="i" class="flex items-center p-2 text-white ]">
              <div class="w-1/2 pr-2 radius-2 mr-4 flex items-center justify-center h-8 bg-[#005062] rounded-md-custom">{{ year }}</div>
              <div class="w-1/2 pl-2 bg-[#11212D] flex items-center justify-center h-8 rounded-md-custom">{{ dataPopulation[i] }}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full mt-8">
          <div class="flex justify-around items-center mb-8">
            <label calss="" for="year1Log">Selecciona en base a la tabla el año inicial: </label> 
            <select class="border rounded-md p-2 shadow-custom-light" name="year0Log" id="year0Log" v-model="yearModelLog0">
              <option v-for="row, i in dataYear" :key="i" :value="row"> {{row}} </option>
            </select>
          </div>
            
          <div class="flex justify-around items-center mb-8">
            <label class="" for="year1Log">Seleccione el segundo dato mayor al año inicial:</label>
            <select class="border rounded-md p-2 shadow-custom-light" name="year1Log" id="year1Log" v-model="yearModelLog1">
              <option v-for="row, i in yearListLog2" :key="i" :value="row"> {{row}} </option>
            </select>
          </div>

          <div class="flex justify-around items-center mb-8">
            <label class="" for="PopulationMax">Capacidad máxima de población a predecir: :</label>
            <input class="border rounded-md p-2 shadow-custom-light" name="PopulationMax" id="PopulationMax" type="number" :min="yearModelLog0" v-model="PMax" step="0.1">
          </div>

          <div class="flex justify-around items-center mb-8">
            <label for="yearPredictionLog">Hasta que año quiere proyectar la población: </label>
            <input class="border rounded-md p-2 shadow-custom-light" name="yearPredictionLog" id="yearPredictionLog" type="number" :min="yearModelLog0" v-model="yearselectedLog"> 
          </div>
          <button class="border rounded-md p-2 shadow-custom-light w-1/2 mx-auto hover:shadow-custom-buttons hover:delay-150 hover:bg-[#2C4951] hover:text-[#FFFFFF]" @click="predictLogisticModel">Predecir</button>
        </div>
      </article> 

      <article class="flex flex-col items-center">
        <span class="text-[18px] text-[#2C4951] font-bold pb-8">
          Eucacion Logistica
        </span>
        <span class="text-[#06141B] pb-8">
          ¿En que consiste la Eucación Logistica?  
        </span>
        <figure class="pb-8">
          <img src="/imagenes/tasa.webp" alt="Ecuación Logistica">
        </figure>
        <figure class="pb-8">
          <img src="/imagenes/solve-logistica.png" alt="Solución Ecuación Logistica">
        </figure>

        <span class="pr-4 text-[#06141B] pb-8 font-medium">
          Obtenga la ecuación logistica según los años que escogio 
        </span>

        <p class="pr-4 text-[#06141B] pb-8 ">P(t) = {{ PMax }}*{{ kcModel }}/(exp(-{{ rModel }}*t) + {{ kcModel }})</p>
        <p class="pr-4 text-[#06141B] pb-8 ">Predicción: {{ predictionResultLog }}</p>

      </article>

    </section>

    <section class="w-full h-[700px] grid place-content-center bg-[#2C4951] mt-36">
      <span class="w-full text-[#FFFFFF] text-[18px] font-semibold text-center mb-8">¡Grafica con los datos anteriores la ecuación logistica!</span>
      <section class="w-[800px] h-[400px] grid place-content-center bg-[#FFFFFF] p-4 rounded-md">
        <canvas id="acquisitionsLog"></canvas>
      </section>
    </section>

    <footer class="h-[500px] w-full">
      <div class="flex flex-col h-full">
        <span class="text-[18px] text-[#2C4951] font-bold my-14 flex justify-center">¿Donde nos encuentras?</span>
        <div class="grid grid-cols-3 grid-rows-2 gap-6 flex-1 px-4">
          <div class="flex justify-center items-center">
            <img src="/imagenes/email.svg" class="w-[30px] mr-4" alt="Correo Electronico">
            <span class="text-[#2C4951] font-medium">Teampapasfritas@gmail.com</span>
          </div>

          <div class="flex justify-center items-center">
            <img src="/imagenes/instagram.svg" class="w-[30px] mr-4" alt="Instagram">
            <span class="text-[#2C4951] font-medium">Team_Papitas_Fritas</span>
          </div>

          <div class="flex justify-center items-center">
            <img src="/imagenes/whatsapp.svg" class="w-[30px] mr-4" alt="WhatsApp">
            <span class="text-[#2C4951] font-medium">+57 3214030094</span>
          </div>

          <div class="flex justify-center items-center">
            <img src="/imagenes/linkedin.svg" class="w-[30px] mr-4" alt="LinkedIn">
            <span class="text-[#2C4951] font-medium">Team_Papitas_Fritas</span>
          </div>

          <div class="flex justify-center items-center">
            <img src="/imagenes/twitter.svg" class="w-[30px] mr-4" alt="Twitter">
            <span class="text-[#2C4951] font-medium">Papitas_fritas</span>
          </div>

          <div class="flex justify-center items-center">
            <img src="/imagenes/graph.svg" class="w-[30px] mr-4" alt="Frase">
            <span class="text-[#2C4951] font-medium">Frase: Cualquier hueco es trinchera, cuando hay hambre</span>
          </div>   
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import Chart from 'chart.js/auto';


import { dataYear, dataPopulation } from '@/utils/data'

import { getModel, exponential, getLogisticModel, logisticPopulation } from '@/utils/ecuations'

const poblacionalChart = ref<Chart|null>(null)
const logisticChart = ref<Chart|null>(null)


// Modelo poblacional
const yearModel0 = ref(dataYear[0])
const yearModel1 = ref(dataYear[1])
const yearselected = ref(dataYear[0])

const cModel = ref(0)
const kModel = ref(0)
const predictionResult = ref(0)

// Model logistic
const yearModelLog0 = ref(dataYear[0])
const yearModelLog1 = ref(dataYear[1])
const yearselectedLog = ref(dataYear[0])

const kcModel = ref(0)
const rModel = ref(0)
const predictionResultLog = ref(0)
const PMax = ref(0)

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

  if (poblacionalChart.value) {
    poblacionalChart.value.destroy()
    poblacionalChart.value = null
  }

  poblacionalChart.value = new Chart(
    // @ts-ignore
    document.getElementById('acquisitions'),
    {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Ecuación de Población',
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

const yearListLog2 = computed(() => {
  const arr = dataYear.filter((row) => row > yearModelLog0.value)
  yearModelLog1.value = arr[0] // segundo año posterior al primer seleccionado
  return arr
})

const predictLogisticModel = () => {
  const yearDiff = yearModelLog1.value - yearModelLog0.value
  const { kc, r, PMax: modelPMax } = getLogisticModel(yearModelLog0.value, yearModelLog1.value, PMax.value, yearDiff)

  kcModel.value = kc
  rModel.value = r

  // Diference years old and now
  const predictionYears = yearselected.value - yearModel0.value
  predictionResultLog.value = logisticPopulation(kc, r, predictionYears, modelPMax)

  // Graph data
  let years = []
  let population = []
  const maxYear = Math.max(yearModelLog1.value, yearselectedLog.value + 2)

  // MOSTRAR SOLO EL RANGO DESDE EL AÑO "0" HASTA LA PREDICCIÓN O EL AÑO MÁXIMO DEL MODELO
  for (let index = yearModelLog0.value; index <= maxYear; index++) {
    const t = index - yearModelLog0.value
    years.push(index)
    population.push(logisticPopulation(kc, r, t, modelPMax))
  }

  // Mostrar el modelo completo solo para y1 1984 y2 1992 pmax y pmax 8M
  // for (let index = - 200; index <= 200; index++) {
  //   const t = index
  //   years.push(index)
  //   population.push(logisticPopulation(kc, r, t, modelPMax))
  // }

  if (logisticChart.value) {
    logisticChart.value.destroy()
    logisticChart.value = null
  }

  logisticChart.value = new Chart(
    document.getElementById('acquisitionsLog'),
    {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Población logística',
            data: population,
            borderColor: '#FFFFFF',
            pointBackgroundColor: function(context) {
              let index = context.dataIndex
              const year = years[index]
              return  year === yearModelLog0.value ? 'green' : 
                      year === yearModelLog1.value ? 'green' : 
                      year === yearselectedLog.value ? 'red' : 
                      'blue'
            }
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            title: { display: true, text: 'Población' }
          },
          x: {
            title: { display: true, text: 'Años' }
          }
        }
      }
    }
  )
}
</script>
