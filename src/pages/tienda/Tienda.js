import React from "react";
import "./Tienda.css";
const Tienda = () => {
  return (
    <div>
      <h2>Tienda</h2>

      <div className="buscabusca">
      <input type="search" placeholder="Busca tu producto" id="Buscador" />
      </div>
      

    <div class="flex-box">
      <div class="card">
        <div class="img1"></div>
        <h3>Auriculares $12.000</h3>
        <p class="titleB">Para pelearte con tus compañeros de equipo</p>
        <a href="/">Comprar</a>
      </div>

      <div class="card">
        <div class="img2"></div>
        <h3>Monitor $50.000</h3>
        <p class="titleB">Buenisimo para ver cuevana full hd</p>
        <a href="/">Comprar</a>
      </div>

      <div class="card">
        <div class="img3"></div>
        <h3>Mouse Genius $4.000</h3>
        <p class="titleB">El titan de titanes</p>
        <a href="/">Comprar</a>
      </div>

      <div class="card">
        <div class="img4"></div>
        <h3>Placa de video $100.000</h3>
        <p class="titleB">No vayas a minar crypto eh</p>
        <a href="/">Comprar</a>
      </div>

      <div class="card">
        <div class="img5"></div>
        <h3>Teclado Genius $4.000</h3>
        <p class="titleB">El que nunca te deja tirado</p>
        <a href="/">Comprar</a>
      </div>

      <div class="card">
        <div class="img6"></div>
        <h3>Ventilador liliana $23.000</h3>
        <p class="titleB">Para cuando el ventilador de la compu no alcanza</p>
        <a href="/">Comprar</a>
      </div>
    </div>
    </div>
  );
};

export default Tienda;
