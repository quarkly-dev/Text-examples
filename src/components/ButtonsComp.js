import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button, Box } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"button": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	}
};

const ButtonsComp = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Button {...override("button")} />
		<Button {...override("button1")} />
		{children}
	</Box>;
};

Object.assign(ButtonsComp, { ...Box,
	defaultProps,
	overrides
});
export default ButtonsComp;