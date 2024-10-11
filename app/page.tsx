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
			<MonetizeCustomerBaseBlock />
			<AdditionalRevenueSources />
			<BalanceProfitUser />
			<Partners />
			<DetailedReports />
			<Form />
		</Flex>
	);
}
