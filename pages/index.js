
import Head from "next/head";
import ThemeButton from "@/components/ThemeButton";

export default function Home() {
    return (
        <>
            <Head>
                <title>Francesco Mineo - Sviluppatore Full Stack</title>
            </Head>
            <main className="mx-3 sm:container sm:mx-auto">
                <section className="text-left ">
                    <ThemeButton />
                </section>
            </main>
        </>
    );
}
