import { TrenzaMatrimoniosBlogsModel } from "@/models/trenza";
import { connectMongoDB } from "@/lib/mongodb";
import CardBlog from "@/components/cardBlogs";
import { cache } from "react";

export const dynamic = "force-dynamic";

const getItems = cache(async function loadMenu() {
	await connectMongoDB();
	const ListBlogs = await TrenzaMatrimoniosBlogsModel.find();
	return ListBlogs.map(blogs => {
		const obj = blogs.toObject();
		obj._id = obj._id.toString(); // Convierte _id a una cadena
		return obj;
	}); // Usa .toObject() para convertir cada producto a un objeto JavaScript simple
})
export default async function BlogPage() {
	const blogs = await getItems();
	return (
		<div>
			<h1 className="h-16 text-3xl font-semibold">Blogs</h1>
			<div className="grid grid-cols-1 gap-4 w-full max-w-6xl mx-auto md:grid-cols-2">
				{blogs.map((blog) => (
					<CardBlog
						key={blog._id}
						title={blog.title}
						description={blog.description}
						image={blog.image}
						date={blog.createdAt}
						slug={blog?.slug || blog._id}
					/>
				))}
			</div>
		</div>
	);
}
