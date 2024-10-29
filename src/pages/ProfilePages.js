import React from 'react';

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
                    <div className="w-full bg-yellow-400 p-6 rounded-b-3xl flex flex-col items-center">
                        <div className="bg-white rounded-full p-4">
                            <i className="fas fa-user-circle text-6xl text-gray-400"></i>
                        </div>
                        <div className="flex items-center mt-2">
                            <span className="text-xl font-bold">Joko_5892</span>
                            <i className="fas fa-pencil-alt text-sm ml-2"></i>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center mt-4 space-y-4">
                        <button className="w-11/12 flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <i className="fas fa-box text-2xl"></i>
                                <span className="ml-4 text-lg">Pesanan Saya</span>
                            </div>
                            <i className="fas fa-chevron-right text-yellow-400 text-2xl"></i>
                        </button>
                        <button className="w-11/12 flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <i className="fas fa-receipt text-2xl text-gray-500"></i>
                                <span className="ml-4 text-lg">Riwayat Transaksi</span>
                            </div>
                            <i className="fas fa-chevron-right text-yellow-400 text-2xl"></i>
                        </button>
                        <button className="w-11/12 flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <i className="fas fa-history text-2xl"></i>
                                <span className="ml-4 text-lg">Riwayat Pesanan</span>
                            </div>
                            <i className="fas fa-chevron-right text-yellow-400 text-2xl"></i>
                        </button>
                        <button className="w-11/12 flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <i className="fas fa-question-circle text-2xl"></i>
                                <span className="ml-4 text-lg">Tentang Kami</span>
                            </div>
                            <i className="fas fa-chevron-right text-yellow-400 text-2xl"></i>
                        </button>
                        <button className="w-11/12 bg-white p-4 rounded-lg shadow-md text-yellow-400 font-bold text-lg">
                            Ganti Password
                        </button>
                        <button className="w-11/12 bg-yellow-400 p-4 rounded-lg shadow-md text-white font-bold text-lg">
                            Log Out
                        </button>
                    </div>
                    <div className="w-full bg-yellow-400 p-4 mt-auto flex justify-around rounded-t-3xl">
                        <div className="flex flex-col items-center">
                            <i className="fas fa-home text-2xl"></i>
                            <span className="text-sm">Beranda</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fas fa-shopping-cart text-2xl"></i>
                            <span className="text-sm">Keranjang</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <i className="fas fa-user text-2xl"></i>
                            <span className="text-sm">Saya</span>
                        </div>
                    </div>
                </div>
  );
};

export default ProfilePage;
