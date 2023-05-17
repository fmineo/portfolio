
import Head from "next/head";
import ThemeButton from "@/components/ThemeButton";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Skills from "@/components/Skills/Skills";
import CmsAndTools from "@/components/CmsAndTools";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Head>
                <title>Francesco Mineo - Sviluppatore Full Stack</title>
            </Head>
            <main className="mx-3 sm:container sm:mx-auto">
                <section className="text-left">
                    <ThemeButton />
                    <Profile />
                    <About />
                </section>
                <section className="">
                    <Skills />
                </section>
                <section className="">
                    <CmsAndTools />
                </section>
                <section>
                    <Contact />
                </section>
            </main>
        </>
    );
}
