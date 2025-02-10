"use client";

import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
		<header className="relative w-full h-screen bg-cover bg-center">
			<Nav />

			<div
			className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
			style={{ backgroundImage: `url(/contact.jpg)` }}
			>
			<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
				<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.55, duration: 0.8 }}
				className="text-4xl md:text-6xl font-bold mb-4"
				>
				Contact Us
				</motion.h1>
			</div>
			</div>
		</header>

		<div className="p-8 max-w-5xl mx-auto">
			{/* Contact Information Section */}
			<div className="mb-12 text-center">
			<h2 className="text-3xl font-bold mb-4 text-gray-800">
				We'd love to hear from you
			</h2>
			<p className="text-gray-600">
				Have questions, comments, or need support? Get in touch with us
				using the form below or reach out directly.
			</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
			{/* Contact Info */}
			<div className="bg-gray-100 p-6 rounded-lg shadow">
				<h3 className="text-2xl font-bold mb-4 text-primary">
				Contact Information
				</h3>
				<ul className="space-y-4">
				<li className="flex items-center">
					<span className="text-secondary font-bold mr-2">Phone:</span>
					<span className="text-gray-600">+123-456-7890</span>
				</li>
				<li className="flex items-center">
					<span className="text-secondary font-bold mr-2">Email:</span>
					<span className="text-gray-600">info@neemabaraka.com</span>
				</li>
				<li className="flex items-center">
					<span className="text-secondary font-bold mr-2">Address:</span>
					<span className="text-gray-600">
					123 Main Street, Nairobi, Kenya
					</span>
				</li>
				</ul>
			</div>

			{/* Contact Form */}
			<div className="bg-gray-100 p-6 rounded-lg shadow">
				<h3 className="text-2xl font-bold mb-4 text-primary">
				Send Us a Message
				</h3>
				<form
				onSubmit={async (e) => {
					e.preventDefault();
				
					const formData = {
					name: e.target.name.value,
					email: e.target.email.value,
					message: e.target.message.value,
					};
				
					try {
					const response = await fetch("/api/send-email", {
						method: "POST",
						headers: {
						"Content-Type": "application/json",
						},
						body: JSON.stringify(formData),
					});
				
					const result = await response.json();
				
					if (response.ok) {
						alert("Message sent successfully!");
						e.target.reset();
					} else {
						alert(result.message || "Something went wrong.");
					}
					} catch (error) {
					console.error("Error submitting form:", error);
					alert("Failed to send the message.");
					}
				}}
				className="space-y-4"
				>
				<div>
					<label
					htmlFor="name"
					className="block text-sm font-bold text-gray-700"
					>
					Your Name
					</label>
					<input
					type="text"
					id="name"
					name="name"
					className="w-full border-gray-300 rounded-lg mt-2 p-2"
					placeholder="Enter your full name"
					required
					/>
				</div>
				<div>
					<label
					htmlFor="email"
					className="block text-sm font-bold text-gray-700"
					>
					Your Email
					</label>
					<input
					type="email"
					id="email"
					name="email"
					className="w-full border-gray-300 rounded-lg mt-2 p-2"
					placeholder="Enter your email"
					required
					/>
				</div>
				<div>
					<label
					htmlFor="message"
					className="block text-sm font-bold text-gray-700"
					>
					Your Message
					</label>
					<textarea
					id="message"
					name="message"
					rows="5"
					className="w-full border-gray-300 rounded-lg mt-2 p-2"
					placeholder="Enter your message"
					required
					></textarea>
				</div>
				<button
					type="submit"
					className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-orangered transition-all"
				>
					Send Message
				</button>
				</form>
			</div>
			</div>
		</div>
		
		<Footer />
    </>
  );
}
