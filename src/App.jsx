import "./index.css";
import React from "react";

function App() {
	return (
		<>
			<div className='grid  grid-cols-1 sm:grid-cols-2'>
				<div className='bg-gradient-to-r from-cyan-400 font-semibold to-blue-600 sm:min-h-screen sm:flex sm:items-center p-8 sm:p-12'>
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
				<div className=' min-h-scren sm:flex sm:items-center p-12 sm:p-24 xl:p-48'>
					<div className='grow bg-white shadow-2xl rounded border border-gray-200 p-8'>
						<div className='sm:flex sm-itens-center'>
							<img
								className='sm:shrink-0 mx-auto sm:mx-0 h-24 rounded-full'
								src='/assets/person.jpg'></img>
							<div className='sm:ml-4 sm:grow text-center'>
								<p className='text-xl'>Pedro Antônio</p>
								<p className='text-sm'>Desenvolvedor</p>
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
                <button className="px-3 border-2 border-zinc-600">Entrar</button>
							</form>
								</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
