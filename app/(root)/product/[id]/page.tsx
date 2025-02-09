import { ChooseProductModal } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
	const product = await prisma.product.findUnique({
		where: {
			id: parseInt(id),
		},
	});

	if (!product) {
		return notFound()
	}
	
	return (
		<ChooseProductModal product={product} />
	)
}