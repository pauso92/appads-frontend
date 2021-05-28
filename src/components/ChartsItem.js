import React from 'react'
import '../css/ChartsItem.css' 
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'


const GET_CAMPAIGN_SUMMARY = gql`
{
  getCampaignSummary{
    name
    img
    day
    reports_end
    reach
    impressions
    interactions
    cost_per_results
    amount_spent
    finish
    plays
    plays3sg
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
 return(
   <> 
    { 
        data.getCampaignSummary.map((item, idx) =>(
         <div  key={idx}>
          <p>
            {item.day}
          </p>
          </div>
        ))
      
    }
   
   </>
 )
  
}else {
  return 'Loading/Error'
}

}
 


export default ReactChartComponent