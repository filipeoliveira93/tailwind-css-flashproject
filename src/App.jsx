import "./index.css";
import React from "react";

function App() {
	return (
		<>
			<div className='grid  grid-cols-1 sm:grid-cols-2 h-full'>
				<div className='bg-gradient-to-t from-cyan-400 font-semibold to-blue-600 sm:min-h-screen sm:flex sm:items-center p-8 sm:p-12'>
					<div className='grow '>
						<h1 className='text-white text-center text-xl sm:text-3xl'>
							Seja Bem vindo!{" "}
						</h1>
						<p className='text-center text-zinc-900  sm:text-lg'>
							{" "}
							Faça Login para Começar
						</p>
					</div>
				</div>
				<div className='min-h-screen min-h-scren sm:flex bg-white sm:items-center p-8 md:p-24 sm:p-24 xl:p-48'>
					<div className='grow bg-white shadow-2xl shadow-zinc-600 rounded border border-gray-400/70 p-8'>
						<div className='sm:flex sm:itens-center border-2'>
							<img
								className='sm:shrink-0 mx-auto my-auto sm:mx-0 h-32 rounded-full p-1 border-[5px] border-blue-600/50 hover:border-blue-600 duration-300'
								src='/assets/person.jpg'></img>
							<div className='grid-cols-1 grow text-center sm:flex sm:flex-col sm:justify-center text-zinc-900 border-zinc-800 sm:grow sm:ml-6 sm:text-left'>
								<p className='text-xl font-bold py-2'>Pedro Antônio</p>
								<p className='text-sm font-semibold '>Desenvolvedor</p>
							</div>
						</div>
								<div className="grid">
									<button
										className='mt-4 px-4 mx-auto  text-slate-400 hover:text-slate-600 duration-200 hover:scale-105'
										type='button'>
										não é Pedro?
									</button>
							<form className='flex flex-col items-center' action=''>
								<input
									className='rounded border-2 border-slate-400 p-1 shrink mx-auto placeholder:text-center outline-0 my-4 focus:border-blue-500'
									placeholder='password'
									type='password'
								/>
                <button className="px-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl duration-150">Entrar</button>
							</form>
								</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
