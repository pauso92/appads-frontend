import React from 'react'
import {Bar} from 'react-chartjs-2'
import graphql2chartjs from 'graphql2chartjs'
import '../css/ChartsItem.css' 
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

const ReactChartComponent = () => {
const {loading, error, data } = useQuery(GET_CAMPAIGN_SUMMARY)
if(loading) return <p>Loading...</p>
if(error) return <p>Error</p>
if (data) {
  const g2c = new graphql2chartjs(data, 'bar');
  return (
    <>
      <div>
      <Bar data= {g2c.data} />
      </div>
     
    </>
)}else {
  return 'Loading/Error'
}

}
 /* const ReactChartComponent = () => {
    const data = React.useMemo(
      () => [
        [[1, 10], [2, 15], [3, 10]],
        [[1, 10], [2, 13], [3, 10]],
        [[1, 14], [2, 10], [3, 13]]
      ],
      []
    )

    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
  )

  return (
    <div>
      <div class="tabla2">
        <Chart data={data} axes={axes} />
      </div>
    </div>
  )
}*/


export default ReactChartComponent