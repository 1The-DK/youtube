import React, { useState } from "react"

import Layout from "../components/Layout"
import Modal from "../components/Modal"

const IndexPage = () => {

  const [isActive, setActive] = useState(false);

  const handleClick = (e) => {
    let target = e.target;

    if (target.classList.contains('btn') || target.classList.contains('modal__cross')) {
      setActive(!isActive);
    }
  }

  return (
    <Layout>  
      <section className="my-32" onClick={handleClick}>
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="lg:col-start-2 col-span-12 lg:col-span-10">
              <h1><button className="btn font-bold text-blue">Modal</button> in React</h1>
              <Modal state={isActive} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage