import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
import ButtonsComp from "./ButtonsComp";
const defaultProps = {};
const overrides = {
	"buttonsComp": {
		"kind": "ButtonsComp",
		"props": {},
		"overrides": {
			"button1": {
				"props": {
					"type": "button"
				}
			}
		}
	}
};

const WrappBtnComp = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<ButtonsComp {...override("buttonsComp")} />
		{children}
	</Box>;
};

Object.assign(WrappBtnComp, { ...Box,
	defaultProps,
	overrides
});
export default WrappBtnComp;