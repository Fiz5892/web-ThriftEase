import React from 'react';


const LoginPage = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-md p-4">
                    <div className="mb-8">
                        <i className="fas fa-user-circle text-9xl text-gray-400"></i>
                    </div>
                    <h1 className="text-2xl font-bold mb-6">Login Account</h1>
                    <div className="w-full mb-4">
                        <div className="flex items-center border border-gray-300 rounded-lg p-2 mb-4">
                            <i className="fas fa-user text-gray-400 mr-2"></i>
                            <input type="text" placeholder="Email/Username" className="flex-1 outline-none text-gray-500" />
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-lg p-2 mb-2">
                            <i className="fas fa-lock text-gray-400 mr-2"></i>
                            <input type="password" placeholder="Password" className="flex-1 outline-none text-gray-500" />
                            <i className="fas fa-eye text-gray-400"></i>
                        </div>
                        <div className="text-right mb-6">
                            <a href="#" className="text-gray-500">Lupa sandi ?</a>
                        </div>
                    </div>
                    <button className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg mb-6 shadow-lg">Login</button>
                    <div className="text-center mb-6">
                        <span className="text-gray-500">Belum terdaftar? </span>
                        <a href="#" className="text-yellow-500 font-bold">Buat akun</a>
                    </div>
                    <div className="text-center text-gray-500">
                        <p>Copyright <i className="far fa-copyright"></i> 2024 ThriftEase</p>
                    </div>
                </div>

  );
};

export default LoginPage;
