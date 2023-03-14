import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <div class="container marketing mt-4">
     <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Laokako.<br/> <span class="text-muted"></span></h2>
            <p class="lead">Bienvenue sur Laokako, trouvez des idées de recettes de cuisine parmi nos milliers de recettes ou déposez la vôtre.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src={process.env.PUBLIC_URL + `/img/lily-banse.jpg`} alt="Generic placeholder image"/>
          </div>
        </div>
         <hr class="featurette-divider"/>
       <div class="row">
          <div class="col-lg-4">
            <img class="rounded-circle"  src={process.env.PUBLIC_URL + `/img/hero-header.png`} width="140" height="140"/>
            <h2>Plats</h2>
            <p></p>
            <p></p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle"  src={process.env.PUBLIC_URL + `/img/aag.jpg`} alt="Generic placeholder image" width="140" height="140"/>
            <h2>Entrées</h2>
            <p></p>
            <p></p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle"  src={process.env.PUBLIC_URL + `/img/may.jpg`} alt="Generic placeholder image" width="140" height="140"/>
            <h2>sans viande</h2>
            <p></p>
            <p></p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle"  src={process.env.PUBLIC_URL + `/img/chip.jpg`} alt="Generic placeholder image" width="140" height="140"/>
            <h2>Apéritifs</h2>
            <p></p>
            <p></p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle"  src={process.env.PUBLIC_URL + `/img/sara.jpg`} alt="Generic placeholder image" width="140" height="140"/>
            <h2>Desserts</h2>
            <p></p>
            <p></p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle"  src={process.env.PUBLIC_URL + `/img/crispy.png`} alt="Generic placeholder image" width="140" height="140"/>
            <h2>Rapide</h2>
            <p></p>
            <p></p>
          </div>
        </div>
  
    </div>

    



  )
}
