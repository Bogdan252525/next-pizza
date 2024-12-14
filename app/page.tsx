import { Container, SortPopup } from "@/components/shared";
import { Title } from "@/components/shared";
import { Categories } from "@/components/shared";

export default function Home() {
  return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
				<Categories />
				<SortPopup />
			</Container>
		</>
  );
}
