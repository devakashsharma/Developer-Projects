// import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from "./components/Features.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />

            {/* <section className="z-0 min-h-screen bg-blue-500" /> */}

            <About />
            <Features />
        </main>
    )
}

export default App
