<template>
  <main class="flex flex-col">
    <!-- HEADER -->
    <header class="bg-[#11212D] w-full shadow-custom-light">
      <div class="flex flex-col md:flex-row justify-between items-center px-4 py-3">
        <!-- Logo + nombre -->
        <div class="flex items-center space-x-2 mb-2 md:mb-0">
          <img src="/imagenes/euler.svg" alt="Logo de team papas fritas" class="w-[48px] md:w-[68px] object-contain" />
          <p class="text-white font-semibold text-[14px] md:text-[16px] tracking-wide">
            Team Papitas Fritas
          </p>
        </div>
        <!-- Navegación -->
        <!-- Botón hamburguesa (solo móvil) -->
      <button @click="toggleMenu" class="md:hidden p-2 focus:outline-none" aria-label="Toggle menu">
        <img src="/imagenes/menu.svg" alt="Menu" class="w-6 h-6" />
      </button>

    <!-- Navegación -->
    <nav>
      <ul
        :class="[
          // Móvil: si showMenu true => flex-col, si false => hidden
          showMenu ? 'flex flex-col space-y-2' : 'hidden',
          // Desde md: siempre flex-row y visible
          'md:flex md:flex-row md:space-y-0 md:space-x-6'
        ]"
        class="text-white text-[12px] md:text-[14px]"
      >
        <li class="hover:text-[#00857c]"><a href="#problema">Problema planteado</a></li>
        <li class="hover:text-[#00857c]"><a href="#poblacional-section">Ecuación Poblacional</a></li>
        <li class="hover:text-[#00857c]"><a href="#proyeccion-poblacion">Proyección Poblacional</a></li>
        <li class="hover:text-[#00857c]"><a href="#logistica-section">Ecuación logística</a></li>
        <li class="hover:text-[#00857c]"><a href="#proyeccion-logistica">Proyección logística</a></li>
        <li class="hover:text-[#00857c]"><a href="#footer">Sobre nosotros</a></li>
      </ul>
    </nav>
      </div>
    </header>

    <!-- SECCIÓN 1: Problema planteado -->
    <section id="problema" class="w-full bg-[#253745] flex flex-col items-center justify-center shadow-custom-sections px-4 py-8 space-y-6 md:flex-row md:justify-around md:space-y-0 md:h-[447px] md:py-0">
      <figure class="w-full flex justify-center md:w-auto md:flex-shrink-0">
        <img src="/imagenes/flag_canada.svg" alt="Bandera canada" class="w-32 sm:w-48 md:w-[428px] object-contain"/>
      </figure>

      <div class="w-full flex flex-col items-center text-center space-y-4 md:items-start md:text-left md:w-1/2 md:pl-8">
        <span class="text-white text-[18px] font-semibold">Problema planteado</span>
        <p class="text-white text-[14px]">
          Este proyecto utiliza la ecuación diferencial logística para analizar y proyectar el crecimiento poblacional de GTA Canada, revelando cómo la ciudad evoluciona en medio de dinámicas complejas y limitaciones como recursos y espacio urbano. A través de datos históricos y el modelo matemático, se identifica el equilibrio entre el crecimiento y la capacidad de soporte, lo que permite predecir puntos críticos de estabilización y comprender mejor los desafíos y oportunidades en la planificación urbana sostenible de una metrópoli en constante transformación.
        </p>
        <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?Lang=E&GENDERlist=1&STATISTIClist=1&HEADERlist=0&DGUIDlist=2021A00053520005&SearchText=toronto" class="px-6 py-2 bg-[#AFAFAF] text-white text-[12px] rounded-md-custom shadow-custom-dark hover:bg-[#11212D] hover:shadow-custom-buttons transition mx-auto" target="_blank">
          Leer más
        </a>
        <!-- <a class="px-6 py-2 bg-[#AFAFAF] text-white text-[12px] rounded-md-custom shadow-custom-dark hover:bg-[#11212D] hover:shadow-custom-buttons transition">
          Leer más
        </a> -->
      </div>
    </section>

    <!-- ICONO FX -->
    <section class="w-full flex justify-center my-12">
      <img src="/imagenes/fx-icon.svg" alt="" class="w-16 md:w-[68px]" />
    </section>

    <!-- SECCIÓN 2: Ecuación Poblacional -->
    <section id="poblacional-section" class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 pb-14">
      <!-- Explicación -->
      <article class="flex flex-col items-center space-y-4">
        <span class="text-[18px] text-[#11212D] font-bold">Ecuación Poblacional</span>
        <span class="text-[#06141B] text-center">¿En que consiste la Ecuación Poblacional?</span>
        <figure><img src="/imagenes/ecuacion_poblacional.webp" alt="Ecuación Poblacional" /></figure>
        <figure><img src="/imagenes/solve-poblacional.webp" alt="Solución Ecuación Poblacional" /></figure>
        <span class="text-[#06141B] font-medium">
          Obtenga la Ecuación Poblacional según los años que escogio
        </span>
        <p class="text-[#06141B]">P(t) = {{ cModel }}*exp({{ kModel }}* t)</p>
        <p class="text-[#06141B]">Predicción: {{ predictionResult }}</p>
        <p class="text-[#06141B]">Error porcentual: {{ errorPercentModel }} %</p>
      </article>
      <!-- Formulario y tabla -->
      <article class="flex flex-col">
        <span class="text-[#06141B] text-center mb-4">¿Quieres proyectar la población de Canada?</span>
        <p class="text-[#06141B] text-center mb-6">
          Teniendo en cuenta el año inicial y el año a proyectar puedes analizar la población de GTA Canada, con datos reales y comportamientos de los indices. Utilizando dos variables necesarias para que tu proyección sea lo más precisa que se pueda, usando la Ecuación Poblacional.
        </p>
        <p class="text-[#06141B] text-center mb-4">Generar modelo Poblacional</p>

        <div class="w-full flex flex-col h-[450px]">
          <div class="flex items-center p-2 font-bold text-white border-b rounded-md-custom shadow-custom-sections bg-[#005062]">
            <div class="w-1/2 pr-2 border-r border-blue-50 text-center">Año</div>
            <div class="w-1/2 pl-2 text-center">Población</div>
          </div>
          <div class="flex-1 overflow-y-scroll">
            <div v-for="(year, i) in dataYear" :key="i" class="flex items-center p-2 text-white ">
              <div class="w-1/2 mr-2 flex items-center justify-center h-8 bg-[#005062] rounded-md-custom ">{{ year }}</div>
              <div class="w-1/2 ml-2 flex items-center justify-center h-8 bg-[#11212D] rounded-md-custom">{{ dataPopulation[i] }}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4 mt-8">
          <div class="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0">
            <label for="year1P">Selecciona en base a la tabla el año inicial:</label>
            <select id="year1P" v-model="yearModel0" class="border rounded-md p-2 shadow-custom-light">
              <option v-for="(row,i) in dataYear" :key="i" :value="row">{{ row }}</option>
            </select>
          </div>
          <div class="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0">
            <label for="year2P">Seleccione el segundo dato mayor al año inicial:</label>
            <select id="year2P" v-model="yearModel1" class="border rounded-md p-2 shadow-custom-light">
              <option v-for="(row,i) in yearList2" :key="i" :value="row">{{ row }}</option>
            </select>
          </div>
          <div class="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0">
            <label for="yearselected">Hasta que año quiere proyectar la población:</label>
            <input type="number" :min="yearModel0" v-model="yearselected" class="border rounded-md p-2 shadow-custom-light"/>
          </div>

          <button @click="predictModel" class="border rounded-md p-2 shadow-custom-light w-full md:w-1/2 mx-auto hover:shadow-custom-buttons hover:bg-[#11212D] hover:text-white transition">
            Predecir
          </button>
        </div>

      </article>
    </section>

    <!-- GRÁFICO POBLACIONAL -->
    <section id="proyeccion-poblacion" class="w-full bg-[#253745] flex flex-col items-center py-12 shadow-custom-sections">
      <span class="text-white text-[18px] font-semibold mb-8 text-center">
        ¡Grafica con los datos anteriores la Ecuación Poblacional!
      </span>
      <div class="w-full max-w-[800px] h-[400px] bg-white p-4 rounded-md shadow">
        <canvas id="acquisitions"></canvas>
      </div>
    </section>

    <!-- ICONO FX VERDE -->
    <section class="w-full flex justify-center my-12">
      <img src="/imagenes/fx-icon-green.svg" alt="Icono Función matematica" class="w-16 md:w-[68px]" />
    </section>

    <!-- SECCIÓN 3: Ecuación Logística -->
    <section id="logistica-section" class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 my-12">

      <article class="flex flex-col items-center space-y-4">
        <span class="text-[18px] text-[#2C4951] font-bold">Ecuacion Logistica</span>
        <span class="text-[#06141B] text-center">¿En que consiste la Ecuación Logistica?</span>
        <figure>
          <img src="/imagenes/tasa.webp" alt="Ecuación Logistica" />
        </figure>
        <figure>
          <img src="/imagenes/solve-logistica.webp" alt="Solución Ecuación Logistica" />
        </figure>
        <span class="text-[#06141B] font-medium">Obtenga la ecuación logistica según los años que escogio</span>
        <p class="text-[#06141B]">P(t) = {{ PMax }}*{{ kcModel }}/(exp(-{{ rModel }}*t) + {{ kcModel }})</p>
        <p class="text-[#06141B]">Predicción: {{ predictionResultLog }}</p>
        <p class="text-[#06141B]">Error porcentual: {{ errorPercentLogistic }} %</p>
      </article>
      
      <!-- Formulario y tabla logística -->
      <article class="flex flex-col">
        <span class="text-[#06141B] text-center mb-4">¿Quieres proyectar la población de canada?</span>
        <p class="text-[#06141B] text-center mb-6">
          Teniendo en cuenta el año inicial, la población máxima que creas y el año a proyectar puedes analizar la población de GTA Canada, con datos reales y comportamientos de los índices. Utilizando dos variables necesarias para que tu proyección sea lo más precisa que se pueda, usando la Ecuación Logística.
        </p>
        <p class="text-[#06141B] text-center mb-4">Generar modelo logistico</p>

        <div class="w-full flex flex-col h-[450px]">
          <div class="flex items-center p-2 font-bold text-white border-b rounded-md-custom shadow-custom-sections bg-[#005062]">
            <div class="w-1/2 pr-2 border-r border-blue-50 text-center">Año</div>
            <div class="w-1/2 pl-2 text-center">Población</div>
          </div>
          <div class="flex-1 overflow-y-scroll">
            <div v-for="(year, i) in dataYear" :key="i" class="flex items-center p-2 text-white even:bg">
              <div class="w-1/2 mr-2 flex items-center justify-center h-8 bg-[#005062] rounded-md-custom"> {{ year }} </div>
              <div class="w-1/2 ml-2 flex items-center justify-center h-8 bg-[#11212D] rounded-md-custom">{{ dataPopulation[i] }}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4 mt-8">

          <div class="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0">
            <label for="year1Log">Selecciona en base a la tabla el año inicial:</label>
            <select id="year1Log" v-model="yearModelLog0" class="border rounded-md p-2 shadow-custom-light">
              <option v-for="(row,i) in dataYear" :key="i" :value="row">{{ row }}</option>
            </select>
          </div>

          <div class="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0">
            <label for="year2Log">Seleccione el segundo dato mayor al año inicial:</label>
            <select id="year2Log" v-model="yearModelLog1" class="border rounded-md p-2 shadow-custom-light">
              <option v-for="(row,i) in yearListLog2" :key="i" :value="row">{{ row }}</option>
            </select>
          </div>

          <div class="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0">
            <label for="PopulationMax">Capacidad máxima de población a predecir:</label>
            <input id="PopulationMax" type="number" :min="yearModelLog0" v-model="PMax" step="0.1" class="border rounded-md p-2 shadow-custom-light"/>
          </div>

          <div class="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0">
            <label for="yearPredictionLog">Hasta que año quiere proyectar la población:</label>
            <input id="yearPredictionLog" type="number" :min="yearModelLog0" v-model="yearselectedLog" class="border rounded-md p-2 shadow-custom-light" />
          </div>

          <button @click="predictLogisticModel" class="border rounded-md p-2 shadow-custom-light w-full md:w-1/2 mx-auto hover:shadow-custom-buttons hover:bg-[#2C4951] hover:text-white transition">
            Predecir
          </button>
        </div>
      </article> 
    </section>

    <!-- GRÁFICO LOGÍSTICO -->
    <section id="proyeccion-logistica" class="w-full bg-[#2C4951] flex flex-col items-center py-12">
      <span class="text-white text-[18px] font-semibold mb-8 text-center">
        ¡Grafica con los datos anteriores la ecuación logistica!
      </span>
      <div class="w-full max-w-[800px] h-[400px] bg-white p-4 rounded-md shadow">
        <canvas id="acquisitionsLog"></canvas>
      </div>
    </section>

    <!-- FOOTER -->
    <footer id="footer" class="w-full bg-white mt-12">
      <div class="flex flex-col items-center space-y-6 py-8 px-4 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-6 md:space-y-0 md:px-8">
        <span class="text-[18px] text-center text-[#2C4951] font-bold md:col-span-3">
          ¿Donde nos encuentras?
        </span>
        <div class="flex items-center space-x-2">
          <img src="/imagenes/email.svg" alt="Correo" class="w-6" />
          <span class="text-[#2C4951]">Teampapasfritas@gmail.com</span>
        </div>
        <div class="flex items-center space-x-2">
          <img src="/imagenes/instagram.svg" alt="Instagram" class="w-6" />
          <span class="text-[#2C4951]">Team_Papitas_Fritas</span>
        </div>
        <div class="flex items-center space-x-2">
          <img src="/imagenes/whatsapp.svg" alt="WhatsApp" class="w-6" />
          <span class="text-[#2C4951]">+57 3214030094</span>
        </div>
        <div class="flex items-center space-x-2">
          <img src="/imagenes/linkedin.svg" alt="LinkedIn" class="w-6" />
          <span class="text-[#2C4951]">Team_Papitas_Fritas</span>
        </div>
        <div class="flex items-center space-x-2">
          <img src="/imagenes/twitter.svg" alt="Twitter" class="w-6" />
          <span class="text-[#2C4951]">Papitas_fritas</span>
        </div>
        <div class="flex items-center space-x-2">
          <img src="/imagenes/graph.svg" alt="Frase" class="w-6" />
          <span class="text-[#2C4951]">Frase: Cualquier hueco es trinchera, cuando hay hambre</span>
        </div>
      </div>
    </footer>
  </main>
</template>



<script setup lang="ts">
import { ref, computed } from 'vue'

import Chart from 'chart.js/auto';

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}


import { dataYear, dataPopulation } from '@/utils/data'

import { getModel, exponential, getLogisticModel, logisticPopulation } from '@/utils/ecuations'

const poblacionalChart = ref<Chart|null>(null)
const logisticChart = ref<Chart|null>(null)


function roundTo(num: number, decimals = 5): number {
  return parseFloat(num.toFixed(decimals));
}

// Modelo poblacional
const yearModel0 = ref(dataYear[0])
const yearModel1 = ref(dataYear[1])
const yearselected = ref(dataYear[0])
const errorPercentModel = ref(0)

const cModel = ref(0)
const kModel = ref(0)
const predictionResult = ref(0)

// Model logistic
const yearModelLog0 = ref(dataYear[0])
const yearModelLog1 = ref(dataYear[1])
const yearselectedLog = ref(dataYear[0])
const errorPercentLogistic = ref(0)

const kcModel = ref(0)
const rModel = ref(0)
const predictionResultLog = ref(0)
const PMax = ref(0)

function percentError(real: number, predicted: number, decimals = 5): number {
  if (real === 0) return 0
  const err = Math.abs((real - predicted) / real) * 100
  return parseFloat(err.toFixed(decimals))
}

const predictModel = () => {
  const { c, k } = getModel(yearModel0.value, yearModel1.value)
  cModel.value = roundTo(c, 3)
  kModel.value = roundTo(k, 3)
  
  
  const rawPrediction = exponential(cModel.value, kModel.value, yearselected.value - yearModel0.value)
  const pred = Math.trunc(roundTo(rawPrediction, 5))
  predictionResult.value = pred 

  const realPop = dataPopulation[dataYear.indexOf(yearselected.value)]
  // 2) calcula el error
  errorPercentModel.value = percentError(realPop, pred, 2)

  // const rawPrediction = predictionResult.value = exponential(cModel.value, kModel.value, yearselected.value - yearModel0.value)
  // predictionResult.value = roundTo(rawPrediction, 5)  

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

  kcModel.value = roundTo(kc, 4)
  rModel.value  = roundTo(r, 4)

  // Diference years old and now
  // const predictionYears = yearselected.value - yearModel0.value
  // predictionResultLog.value = logisticPopulation(kc, r, predictionYears, modelPMax)

  const rawLogPred = logisticPopulation(kc, r, yearselectedLog.value - yearModelLog0.value, modelPMax)
  const predLog = Math.trunc(roundTo(rawLogPred, 4))
  predictionResultLog.value = predLog

  const realPopLog = dataPopulation[dataYear.indexOf(yearselectedLog.value)]
  errorPercentLogistic.value = percentError(realPopLog, predLog, 2)
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
