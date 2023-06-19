import Image from "next/image"
import logo from "/public/Logo.webp"
import facebook from "@/images/facebook.svg"
import twitter from "@/images/twitter.svg"
import linkedin from "@/images/linkedin.svg"
const Footer =()=>{
    return (
        <footer className="w-full my-20">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col gap-10 lg:flex-row justify-evenly">
                    <div className="max-w-sm">
                        <Image src={logo} alt="logo" />
                        <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                        <div className="flex gap-4">
                            <div className="py-3 px-3 rounded-md bg-[#f1f1f1] inline-block cursor-pointer">
                                <Image src={twitter} alt="facebook icon" className="w-6"/>
                            </div>
                            <div className="p-3 rounded-md bg-[#f1f1f1] inline-block cursor-pointer">
                                <Image src={facebook} alt="facebook icon" />
                            </div>
                            <div className="p-3 rounded-md bg-[#f1f1f1] inline-block cursor-pointer">
                                <Image src={linkedin} alt="facebook icon" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold">Company</h1>
                        <nav className="list-none flex flex-col gap-2 mt-2">
                            <li>About</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>How it Works</li>
                            <li>Contact Us</li>
                        </nav>
                    </div>
                    <div>
                        <h1 className="font-bold">Support</h1>
                        <nav className="list-none flex flex-col gap-2 mt-2">
                            <li>Support Carrer</li>
                            <li>24h Service</li>
                            <li>Quick Chat</li>
                        </nav>
                    </div>
                    <div>
                        <h1 className="font-bold">Contact</h1>
                        <nav className="list-none flex flex-col gap-2 mt-2">
                            <li>Whatsapp</li>
                            <li>Support 24h</li>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer