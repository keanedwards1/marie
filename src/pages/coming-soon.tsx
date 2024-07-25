import { useRouter } from "next/router";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/RespFooter";
import SubscribeForm from "@/components/SubscribeForm";

export default function ComingSoonPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-purple-50">
            <Head>
                <title>Coming Soon</title>
                <meta name="description" content="Coming Soon" />
            </Head>
            <Nav />
            <div className="container mx-auto flex flex-col mt-10 items-center justify-center p-4">
                <h1 className="text-4xl text-slate-800 font-serif font-bold">
                    Coming Soon
                </h1>
                <p className="mt-4 text-lg font-serif lg:w-1/2 md:w-1/3 text-slate-700 italic">
                    &quot;The Realm Of Unity&quot; is currently in the works. Marie is working with her publishers to make final tweaks and finalize the cover art.
                </p>
                <p className="mt-2 -mb-20 text-lg text-slate-700 font-serif">
                    
                </p>

            </div>
            <div className="mb-0 -mt-10 w-full">
                    <SubscribeForm />
                </div>
            
            <Footer />
        </div>
    );
}