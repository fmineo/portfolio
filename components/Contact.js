import React, { Component } from "react";
import { AiOutlineSend } from "react-icons/ai";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: "",
                email: "",
                message: "",
            },
            isSubmitting: false,
            isSubmitted: false,
            isError: false,
            isSuccess: false,
        };
    }

    submitForm = async (e) => {
        e.preventDefault();
        this.setState({ isSubmitting: true });

        const res = await fetch("/sendmail.php", {
            method: "POST",
            body: JSON.stringify(this.state.values),
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.setState({ isSubmitted: true });
        this.setState({ isSubmitting: false });
        const data = await res.json();
        !data.hasOwnProperty("error")
            ? this.setState({ message: data.success, isSuccess: true })
            : this.setState({ message: data.error, isError: true, isSubmitted: false });

        setTimeout(
            () =>
                this.setState({
                    isError: false,
                    isSuccess: false,
                    message: "",
                }),
            3000
        );
    };

    handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

    render() {
        return (
            <div className="pb-28">
                <h3 className="text-center text-3xl md:text-5xl pb-5">
                    Contattami
                </h3>
                <form
                    className="max-w-[800px] mx-auto rounded-lg shadow-lg flex flex-col px-8 py-8 bg-white dark:bg-slate-700"
                    onSubmit={this.submitForm}
                >
                    <div className="flex flex-col">
                        <label
                            htmlFor="fullname"
                            className="text-sm font-light dark:text-gray-300"
                        >
                            Il tuo nome
                            <span className="text-red-600 dark:text-gray-50 ml-1">
                                *
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={this.state.values.name}
                            onChange={this.handleInputChange}
                            placeholder="Scrivi qui il tuo nome"
                            className="peer placeholder:text-sm py-2 pl-4 rounded-md shadow dark:bg-slate-800 dark:border-0 my-1"
                        />
                        <p className="invisible peer-focus-within:peer-invalid:visible text-red-700 dark:text-red-500 font-light">
                            Inserisci il tuo nome
                        </p>
                    </div>

                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="email"
                            className="text-sm font-light dark:text-gray-300"
                        >
                            La tua E-mail
                            <span className="text-red-600 dark:text-gray-50 ml-1">
                                *
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={this.state.values.email}
                            onChange={this.handleInputChange}
                            placeholder="mail@esempio.it"
                            className="peer py-2 pl-4 placeholder:text-sm rounded-md shadow dark:bg-slate-800 dark:border-0 my-1"
                        />
                        <p className="invisible peer-focus-within:peer-invalid:visible text-red-700 dark:text-red-500 font-light">
                            Inserisci la tua email
                        </p>
                    </div>

                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="message"
                            className="text-sm font-light dark:text-gray-300"
                        >
                            Messaggio
                            <span className="text-red-600 dark:text-gray-50 ml-1">
                                *
                            </span>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={this.state.values.message}
                            onChange={this.handleInputChange}
                            required
                            rows={5}
                            placeholder="Scrivi qui il tuo messaggio"
                            className="peer placeholder:text-sm py-2 pl-4 rounded-md shadow dark:bg-slate-800 dark:border-0 my-1"
                        ></textarea>
                        <p className="invisible peer-focus-within:peer-invalid:visible text-red-700 dark:text-red-500 font-light">
                            Scrivi un messaggio
                        </p>
                    </div>

                    <div className="">
                        <button
                            type="submit"
                            disabled={this.state.isSubmitting || this.state.isSubmitted} 
                            className="disabled:cursor-not-allowed px-10 mt-5 w-full text-center py-2 bg-black text-gray-50 font-light rounded-md text-lg flex flex-row items-center justify-center dark:bg-slate-500"
                        >
                            Invia <AiOutlineSend className="ml-1" />
                        </button>
                        <div
                            className={`rounded-md my-4 py-1 w-full text-center message ${
                                this.state.isError && "error"
                            } ${
                                this.state.isSuccess && "success"
                            } ${
                                !this.state.isSubmitting||!this.state.isSubmitted && "hidden"
                            }`}
                        >
                            {this.state.isSubmitting
                                ? "Invio in corso..."
                                : this.state.message}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;
