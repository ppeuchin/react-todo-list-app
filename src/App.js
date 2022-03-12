import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            items: [],
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }

    handleSubmit() {
        this.setState((state) => ({
            input: "",
            items: state.items.concat(state.input),
        }));
    }

    handleDelete(id) {
        this.setState((state) => ({
            items: [...state.items].filter(
                (item) => state.items.indexOf(item) !== id
            ),
        }));
    }

    render() {
        return (
            <div className="my-5 w-75 mx-auto">
                {/* page heading */}
                <h1 className="text-center m-3 animate__animated animate__rubberBand">
                    To-Do App With React & Redux
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
                    <table className="table table-stripped table-hover">
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
                            {this.state.items.map((item, idx) => (
                                <tr className="animate__animated animate__fadeInLeft">
                                    <td key={idx} className="text-start">
                                        {item}
                                    </td>
                                    <td className="text-end">
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
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

export default App;
