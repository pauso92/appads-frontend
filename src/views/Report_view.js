import React from 'react'
import '../css/Report_view.css'

function Report_view() {
    return (
        <>
            <div className="wrap_report">
                <div className="link">
                    <button className="button_report">Generar Reporte</button>
                </div>
                <div className="wrap_period">
                    <p className="p_period">selecciona el periodo: </p>
                    <select className="select_period"></select>
                    <p className="p_period2"> a: </p>
                    <select className="select_period"></select>
                </div>
            </div>
            <div>
                <div className="campain">
                    <input className="checkbox_campain" type="checkbox"></input> 
                    <label className="lebel_campain">Campaña 1</label>
                </div>
                <div className="campain">
                    <input className="checkbox_campain" type="checkbox"></input> 
                    <label className="lebel_campain">Campaña 2</label>
                </div>
                <div className="campain">
                    <input className="checkbox_campain" type="checkbox"></input> 
                    <label className="lebel_campain">Campaña 3</label>
                </div>
            </div>
        </>
    )
}

export default Report_view