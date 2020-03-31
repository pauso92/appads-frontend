import React from 'react'
import '../css/SummaryTable.css'

const SummaryTable = () => {

  return (
    <>
    <div className="grid-container-table">
      <table>
        <tr>
          <th>Fecha</th>
            <th>  
              Anuncio
            </th>
            <th>Nombre Anuncio</th>
            <th>Alcance</th>
            <th>Impresiones</th>
          <th>Gasto</th>
          <th>  Reacciones</th>
          <th>CTR(Click To Rate)</th>
          <th>VTR(View To Rate)</th>
          <th>ER(Engagement To Rate)</th>
        </tr>
        <tr>
          <td>17/03/2020 20:000</td>
          <td> <video src="https://video-qro1-1.xx.fbcdn.net/v/t42.1790-2/91111366_545778856057050_2939288419372802716_n.mp4?_nc_cat=108&_nc_sid=cf96c8&_nc_eui2=AeH5b92Xmkm_EjlfUl73JVGCosGZCSnPJHeYi4Z0HPoLxgbpQ7UstzBqsnxw_zmJH7Z5qob8ZGbq4UYUxwceRJaAb4M2r_500mrmy0r-H_D6qw&_nc_ohc=GWyUOxx6GD0AX-r3Eh0&_nc_ht=video-qro1-1.xx&oh=605bb0cfa5270a7b9c9cdc5f0f14b03c&oe=5E7F1358" autoplay width="100" height="150"></video></td>
          <td> Sandwich</td>
          <td> 3,000,000</td>
          <td> 6,000,000</td>
          <td> $831,580</td>
          <td> 2,580</td>
          <td> 2.5% </td>
          <td> 3.5% </td>
          <td> 5.5% </td>
        </tr>
        <tr>
          <td>17/03/2020 20:000</td>
          <td> <video src="https://video-qro1-1.xx.fbcdn.net/v/t42.9040-2/91071815_547171885927713_3517200846712471552_n.mp4?_nc_cat=107&_nc_sid=cf96c8&_nc_eui2=AeETUR7CJa_CiZ2wHKjjwcFlztvrVl3g2CQSsNkuou3MTK1if72nl0BDG01116bIlyzUU6QIi5oMb0AquMCNiE8OL37bQeJGFVXpZ3pFNnZhzA&_nc_ohc=wmMwXEGfmggAX-XS0AU&_nc_ht=video-qro1-1.xx&oh=39a98d4ea1faf71f1b8ced9dcdbf5dc6&oe=5E7F140A" autoplay width="100" height="150"></video></td>
          <td> Desayuno</td>
          <td> 3,000,000</td>
          <td> 6,000,000</td>
          <td> $831,580</td>
          <td> 2,580</td>
          <td> 2.5% </td>
          <td> 3.5% </td>
          <td> 5.5% </td>
        </tr>
        <tr>
          <td>17/03/2020 20:000</td>
          <td> <video src="https://video.fmex5-1.fna.fbcdn.net/v/t42.9040-2/91305461_2523988811253371_5649218192925523968_n.mp4?_nc_cat=1&_nc_sid=cf96c8&_nc_eui2=AeEeOL1FEKVKHRz-0TTDWZkipGja-AKWtvKwpRFtff1pl0b6glEmaY45S-nxLfm1ncmHkEHPHFEs0m49q2ZwaEEWOOTLSuVe92CJ4hsEfqJBgQ&_nc_ohc=QuNRNrYeKy0AX-HoqTY&_nc_ht=video.fmex5-1.fna&oh=60d7ca3eaf73bf7aca699e95de58e9d3&oe=5E7F0CDD" autoplay width="100" height="150"></video></td>
          <td> Pan Integral</td>
          <td> 3,000,000</td>
          <td> 6,000,000</td>
          <td> $831,580</td>
          <td> 2,580</td>
          <td> 2.5% </td>
          <td> 3.5% </td>
          <td> 5.5% </td>
        </tr>
      </table>
    </div>
    </>
  )

}

export default SummaryTable;
