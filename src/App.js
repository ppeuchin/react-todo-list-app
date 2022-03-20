import React from "react";
import "./App.css";
import { Provider, connect } from 'react-redux';
import { store, mapStateToProps, mapDispatchToProps } from './redux/store';

function darkmode() {
    const moon = "bi bi-moon-fill btn btn-sm btn-outline-dark mx-3";
    const sun =
        "bi bi-brightness-high-fill btn btn-sm btn-outline-light mx-3";
    var toggler = document.getElementById("toggler");
    toggler.className = toggler.className === sun ? moon : sun;

    var table = document.getElementById("table");
    table.className =
        table.className === "table table-stripped table-hover"
            ? "table table-stripped table-hover table-dark"
            : "table table-stripped table-hover";
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// React
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }

    handleSubmit() {
        if (this.state.input) {
            this.setState((state) => ({
                input: ""
            }));
            this.props.addNewItem(this.state.input);
        }
    }

    handleDelete(id) {
        this.props.deleteItem(id);
    }

    render() {
        return (
            <div className="my-5 w-75 mx-auto">
                {/* page heading */}
                <h1 className="text-center m-3 animate__animated animate__rubberBand">
                    To-Do App With React & Redux
                    <i
                        id="toggler"
                        title="Toggle dark mode"
                        className="bi bi-moon-fill btn btn-sm btn-outline-dark mx-3"
                        onClick={darkmode}
                    ></i>
                </h1>
                <div className="text-center">
                    {/* input and submit button */}
                    {/* <label className="lead">New ToDo</label> */}
                    <div class="input-group mb-3 my-4 w-50 mx-auto">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="New ToDo"
                            value={this.state.input}
                            onChange={this.handleChange.bind(this)}
                            aria-label="New ToDo"
                            aria-describedby="button-addon"
                        />
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                            id="button-addon"
                            onClick={this.handleSubmit.bind(this)}
                        >
                            Add ToDo
                        </button>
                    </div>
                </div>
                {/* render todo list items */}
                <div className="w-50 mx-auto">
                    {/* in table form */}
                    <table
                        id="table"
                        className="table table-stripped table-hover"
                    >
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="text-start"
                                    colSpan={2}
                                >
                                    To Do
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item, idx) => (
                                <tr className="animate__animated animate__fadeInLeft">
                                    <td key={idx} className="text-start">
                                        {item}
                                    </td>
                                    <td className="text-end">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() =>
                                                this.handleDelete(idx)
                                            }
                                        >
                                            <i className="bi bi-trash3-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

// React-Redux
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
};

export default AppWrapper;
