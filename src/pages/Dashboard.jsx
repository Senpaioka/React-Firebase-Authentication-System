function Dashboard() {


    return (
        <>
         <div className="min-h-screen flex">
            <aside className="w-64 shadow-md hidden md:block border border-gray-700">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white">My Dashboard</h2>
                </div>
                <nav className="mt-8">
                    <a href="#" className="block py-2.5 px-4 rounded hover:bg-blue-50 hover:text-blue-600">🏠 Dashboard</a>
                    <a href="#" className="block py-2.5 px-4 rounded hover:bg-blue-50 hover:text-blue-600">📊 Analytics</a>
                    <a href="#" className="block py-2.5 px-4 rounded hover:bg-blue-50 hover:text-blue-600">🧾 Reports</a>
                    <a href="#" className="block py-2.5 px-4 rounded hover:bg-blue-50 hover:text-blue-600">⚙️ Settings</a>
                </nav>
            </aside>

            <main className="flex-1 flex flex-col">

            <header className="shadow-sm flex items-center justify-between px-6 py-4 border border-gray-700">
            <h1 className="text-xl font-semibold">Dashboard Overview</h1>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Search..." className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" />
                    {/* <img src="https://i.pravatar.cc/40" className="w-10 h-10 rounded-full border" alt="" /> */}
                </div>
            </header>

              <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* <!-- Card 1 --> */}
                <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow">
                    <h3 className="text-gray-500 text-sm">Total Users</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">12,345</p>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow">
                    <h3 className="text-gray-500 text-sm">Revenue</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">$45,670</p>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow">
                    <h3 className="text-gray-500 text-sm">Orders</h3>
                    <p className="text-3xl font-bold text-yellow-600 mt-2">1,230</p>
                </div>

                {/* <!-- Card 4 --> */}
                <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow">
                    <h3 className="text-gray-500 text-sm">Feedback</h3>
                    <p className="text-3xl font-bold text-red-600 mt-2">98%</p>
                </div>

            </section>



            <section className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold mb-3">Sales Overview</h3>
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                    [Chart Placeholder]
                </div>
                </div>

                <div className="p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold mb-3">Recent Orders</h3>
                <table className="w-full text-sm">
                    <thead>
                    <tr className="text-left border-b">
                        <th className="py-2">Order ID</th>
                        <th className="py-2">Customer</th>
                        <th className="py-2">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b">
                        <td className="py-2">#1234</td>
                        <td>John Doe</td>
                        <td>$250</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2">#1235</td>
                        <td>Jane Smith</td>
                        <td>$480</td>
                    </tr>
                    <tr>
                        <td className="py-2">#1236</td>
                        <td>Mike Brown</td>
                        <td>$320</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                
            </section>

            </main>
         </div>
        </>
    )
}


export default Dashboard;