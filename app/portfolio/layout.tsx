export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center w-full gap-4 py-16">
			<div className="text-center w-full justify-center">
				{children}
			</div>
		</section>
	);
}
