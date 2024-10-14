import { AdditionalRevenueSources } from "./modules/AdditionalRevenueSources/AdditionalRevenueSources";
import { MonetizeCustomerBaseBlock } from "./modules/MonetizeCustomerBaseBlock/MonetizeCustomerBaseBlock";
import { Flex } from "./components/Flex/Flex";
import { BalanceProfitUser } from "./modules/BalanceProfitUser/BalanceProfitUser";
import { Partners } from "./modules/Partners/Partners";
import { DetailedReports } from "./modules/DetailedReports/DetailedReports";
import { Form } from "./modules/Form/Form";

export default function Home() {
	return (
		<Flex vertical>
			<MonetizeCustomerBaseBlock section="advantages" />
			<AdditionalRevenueSources section="advantages" />
			<BalanceProfitUser section="advantages" />
			<Partners section="advantages" />
			<DetailedReports section="how-to-work" />
			<Form section="how-to-work" />
		</Flex>
	);
}
