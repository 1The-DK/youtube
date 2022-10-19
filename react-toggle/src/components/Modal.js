import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Modal = ({ state }) => {
    return (
        <div className={`modal ${ state ? 'modal--active' : '' }`}>
            <div className="grid grid-cols-12">
                <div className="col-span-10 col-start-2 lg:col-start-4 lg:col-span-6">
                    <div className="bg-grey p-6 lg:p-12 rounded-2xl relative">
                        <h2 className="mb-4 lg:mb-8">Modal</h2>
                        <StaticImage
                            alt="Liquid art by Susan Wilkinson"
                            src="../images/liquid.jpg"
                            className="rounded-xl"
                        />
                        <button className="modal__cross">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 1L1 21" stroke="#1D1D24" strokeWidth="2" />
                                <path d="M21 21L1 0.999999" stroke="#1D1D24" strokeWidth="2" />
                                </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal

