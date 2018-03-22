console.log("App.js is running!");

const app = {
    title: "Kyle's Decision App",
    subtitle: "check this out!",
    options: [],
    chosenOption: ""
};    

const onFormSubmit = (e) => {
    e.preventDefault();

    let option = e.target.elements.option.value;

    if(option){
        app.options.push(option);  
        e.target.elements.option.value = '';
        renderThisApp();
    }
};

const removeOptions = () => {
    app.options = [];
    app.chosenOption = "";
    renderThisApp();
};

const makeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    app.chosenOption = option;
    renderThisApp();
    alert(option);
};

const appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);

const renderThisApp = () => {
    //JSX - JavaScript XML
    let template = (
        <div>
            <h1>{app.title}</h1>
            <h2>{app.chosenOption}</h2>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are you options!</p> : <p>No Options</p>}
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should Kyle do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderThisApp();