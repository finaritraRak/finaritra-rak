import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Blog.css'

export default function Blog() {
   const[listeData, dataChange]=useState(null);
    const navigate = useNavigate();

     const LoadDetail = (id) => {
        navigate("/blog/detail/" + id);
    }

     const LoadEdit = (id) => {
        navigate("/blog/edit/" + id);
    }

  useEffect(() => {
      fetch("http://192.168.0.1:1000/blog").then((res) =>{
           return res.json();

      }).then((resp)=>{
          dataChange(resp);

      }).catch((err) => {
        console.log(err.message);
      })
    }, [])
  return (
  
    <div>
       <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">My Blog</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
       
          <div class="row">

           {
                      listeData && listeData.map(item=>(
               <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" alt="Card image cap"/>
                <div class="card-body" key={item.id}>
                 
                  <p class="card-text"> {item.nom}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button onClick={() => { LoadDetail(item.id) }} type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button  onClick={() => { LoadEdit(item.id) }} type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
           
                         
                      ))
                     }
           

           
           
          </div>
        </div>
      </div>

    </main>

    </div>

  )
}
