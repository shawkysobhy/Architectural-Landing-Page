function CustomBurgerButton({onClickHandler}) {
  return (
		<button className='flex flex-col items-center justify-center w-10 h-10 cursor-pointer ' onClick={onClickHandler}>
			<span className={`block w-full h-1 bg-darkGray mb-2 `}></span>
			<span className={`block w-full h-1 bg-darkGray mb-2  `}></span>
			<span className={`block w-full h-1 bg-darkGray `}></span>
		</button>
	);
}

export default CustomBurgerButton;
