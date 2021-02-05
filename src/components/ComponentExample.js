import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Box } from "@quarkly/widgets";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace,
			"color": "--lightD1"
		}
	}
};

const ComponentExample = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon {...override("icon")} />
		{children}
	</Box>;
};

Object.assign(ComponentExample, { ...Box,
	defaultProps,
	overrides
});
export default ComponentExample;