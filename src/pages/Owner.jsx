const Owner = () => <h1>Pagina del dueño</h1>;
export default Owner;


import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/styles/owner.css';



export default function Owner() {
    // Estado de pelis
    const [movies] = useState([
        'Castillo Ambulante',
        'Orgullo y Prejuicio',
        'Familia del futuro',
        'Interstella 5555',
        'Chicago'
    ]);

    return (
        <>
            <Header />

            <main className="owner-container">
                {/* Sección de datos personales */}
                <section className="profile">
                    <img
                        src="/assets/images/unamed.jpg"   
                        className="profile-img"
                    />
                    <h1 className="owner-name">Jennifer Reynaga Cabrera</h1>
                    <p className="owner-contacto">
                        <a href="correo:jenn@gmail.com">jenn@gmail.com</a>
                    </p>
                    <p className="owner-description">
                        Desarrolladora full-stack aprendiendo a dar soluciones
                    </p>
                </section>


              {/* Peliculas */}
                       
                <section className="my-fav-movies">
                    <h2>Estas son mis pelis favoritas </h2>
                    <ul>
                        {movies.map((title, idx) => (
                            <li key={idx}>{title}</li>
                        ))}
                    </ul>
                </section>
            </main>

            <Footer />
        </>
    );
}