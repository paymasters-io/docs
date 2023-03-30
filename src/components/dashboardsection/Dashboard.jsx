import React from 'react';
import Dashboard from "@site/static/assets/pm-images/Dashboard.png"

export default function DashboardSection() {

    return (
        <section className="flex flex-col text-black pt-10 font-mono items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold my-4 text-center">Effortlessly Manage Transactions Using The Dashboard</h1>
            <p className="text-lg my-4 text-center">Simplify Payments on the Blockchain with Paymasters-io</p>
            <img className="w-full md:w-2/3 lg:w-1/2" src={Dashboard} alt=" Dashboard Image" />
        </section>
    )

}