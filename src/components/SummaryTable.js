import React from 'react'
import '../css/SummaryTable.css'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_CAMPAIGN_SUMMARY = gql`
{
  getCampaignSummary{
    img
    day
    reports_end
    campaing_name
    adset_name
    ad_name
    reach
    impressions
    cost_per_results
    amount_spent
    finish
    plays
    vcr
    vtr
    er
  }
  }
`;

const SummaryTable = () => {

  const {loading, error, data } = useQuery(GET_CAMPAIGN_SUMMARY)
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>

  return (
    <>
    <div className="grid-container-table">
      <table>
       <thead>
         <tr>
         <th>Imágen</th>
         <th>Día</th>
         <th>Fin del informe</th>
         <th>Nombre de la campaña</th>
         <th>Grupo de Anuncios</th>
         <th>Anuncio</th>
         <th>Alcance</th>
         <th>Impresiones</th>
         <th>Costo por resultados</th>
         <th>Importe gastado</th>
         <th>Finalización</th>
         <th>Reproducciones</th>
          <th>VCR (COMPLETE VIEWS)</th>
          <th>VTR (View Rate)</th>
          <th>ER(Engament Rate)</th>
         </tr>
       </thead>
       <tbody>
         { data.getCampaignSummary.map((item, idx) =>(
           <tr key={idx}>
             <td><img width="90px" src={item.img}></img></td>
             <td>{item.day}</td>
             <td>{item.reports_end}</td>
             <td>{item.campaing_name}</td>
             <td>{item.adset_name}</td>
             <td>{item.ad_name}</td>
             <td>{item.reach}</td>
             <td>{item.impressions}</td>
             <td>{item.cost_per_results}</td>
             <td>{item.amount_spent}</td>
             <td>{item.finish}</td>
             <td>{item.plays}</td>
             <td>{item.vcr}</td> 
             <td>{item.vtr}</td> 
             <td>{item.er}</td>
           </tr>
         ))
         }
       </tbody>
      </table>
    </div>
    </>
  )

}

export default SummaryTable;
