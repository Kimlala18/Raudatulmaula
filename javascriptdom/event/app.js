const button = document.querySelector('#changecolor');
const Container = document.querySelector('#changecolor');

button.addEventListener('click', function (e){
	ContainerRule.style.backgroundColor = generateRandomColor();
	e.stopPropagation();

});

Container.addEventListener('click', function(e){
	Container.classList.toggle('hide');
});

const generateRandomColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
};




