import axios from 'axios'
import React from 'react'

const apiDeputados = axios.create({
    baseURL:'https://dadosabertos.camara.leg.br/api/v2'
}) 
export default apiDeputados