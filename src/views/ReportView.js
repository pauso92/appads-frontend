import React from 'react'
import SummaryTable from '../components/SummaryTable'
import ChartsItem from '../components/ChartsItem'
import '../css/ReportView/Main.css'

const ReportView = () => {

  return (
    <>

    <div className="MainDiv">
      <h1> ReportView </h1>
    <div className="Tables">
      <SummaryTable />
    </div>
    <div className="Charts">
      <ChartsItem />
    </div>
  

      </div>
    </>
  )

}

export default ReportView;