import { useState } from "react";
import CurrentIndexContext from "./CurrentIndexContext";

interface Props {
	children: React.ReactNode;
}

const CurrentIndexProvider = ({ children }: Props) => {
	const state = useState(0);

	return <CurrentIndexContext.Provider value={state}>{children}</CurrentIndexContext.Provider>;
};

export default CurrentIndexProvider;
