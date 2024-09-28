// One-way data flow from parent to child
// Pet is the child element, can only receive data from parent, cannot pass data to parent
const Pet = props => {
	// when Pet is rendered, it will create the components below
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("h2", {}, props.animal),
		React.createElement("h2", {}, props.breed)
	]);
};

// App is the parent element, can pass data to child, does not allow receipt of data from child
const App = () => {
	// when App is rendered, it will create the components below
	// notice that the components below calls another element which has other elems
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, {
			animal: "Dog",
			name: "Luna",
			breed: "Havanese"
		}),
		React.createElement(Pet, {
			animal: "Bird",
			name: "Pepper",
			breed: "Cockatiel"
		}),
		React.createElement(Pet, {
			animal: "Cat",
			name: "Doink",
			breed: "Mixed"
		})
	]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// This is like the "OnIntialized" in .NET
// root.render will render the argument of React.createElement, passing in App)
root.render(React.createElement(App));
