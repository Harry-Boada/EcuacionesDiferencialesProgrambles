import { dataYear, dataPopulation } from '@/utils/data'

export const getModel = (year1:number, year2:number) => {
    const c = dataPopulation[dataYear.indexOf(year1)]

    const k = Math.log( dataPopulation[dataYear.indexOf(year2)] / c) / ( year2 - year1 ) 

    return { c, k }
}

export const exponential = (c:number, k:number, yearDiference:number) => {
    return c * Math.exp(k * yearDiference)
}

export const logarithm = () => {

}
